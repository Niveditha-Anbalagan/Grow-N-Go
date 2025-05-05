
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userData: any) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Handle specific error cases
        if (error.message.includes('Email not confirmed')) {
          await resendEmailConfirmation(email);
          toast('Verification email sent', {
            description: 'Please check your inbox and confirm your email'
          });
        } else {
          throw error;
        }
      } else if (data.user) {
        navigate('/dashboard');
        toast('Login successful', {
          description: 'Welcome back to GrowNGo!'
        });
      }
    } catch (error: any) {
      console.error('Login error:', error.message);
      toast('Login failed', {
        description: error.message
      });
    }
  };

  // Helper function to resend confirmation email
  const resendEmailConfirmation = async (email: string) => {
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });
      
      if (error) throw error;
    } catch (error: any) {
      console.error('Error resending confirmation:', error.message);
    }
  };

  const signUp = async (email: string, password: string, userData: any) => {
    try {
      // Register the user with auto confirmation enabled
      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
          emailRedirectTo: window.location.origin,
        },
      });

      if (signUpError) {
        throw signUpError;
      }

      // If sign up was successful, automatically sign them in
      if (data.user) {
        if (data.session) {
          // User is already authenticated, redirect to dashboard
          toast('Registration successful', {
            description: 'Welcome to GrowNGo!'
          });
          navigate('/dashboard');
        } else {
          // Email confirmation is required
          toast('Registration successful', {
            description: 'Please check your email to confirm your account before logging in.'
          });
        }
      }
    } catch (error: any) {
      toast('Registration failed', {
        description: error.message
      });
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
      toast('Logged out successfully');
    } catch (error: any) {
      toast('Logout failed', {
        description: error.message
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
