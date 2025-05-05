import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';

interface Profile {
  id: string;
  first_name: string;
  last_name: string;
  is_farmer: boolean;
  farm_name?: string;
}

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (error) {
            throw error;
          }

          setProfile(data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-custom py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-growgreen-700 mb-2">Welcome to your Dashboard</h1>
            <p className="text-muted-foreground">
              {profile?.is_farmer 
                ? 'Manage your farm products and orders' 
                : 'View your orders and preferences'}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h2 className="font-semibold mb-2 text-lg">Your Profile</h2>
            {profile ? (
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {profile.first_name} {profile.last_name}</p>
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                <p><span className="font-medium">Account Type:</span> {profile.is_farmer ? 'Farmer' : 'Customer'}</p>
                {profile.is_farmer && profile.farm_name && (
                  <p><span className="font-medium">Farm Name:</span> {profile.farm_name}</p>
                )}
              </div>
            ) : (
              <p>No profile information available.</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="border-growgreen-600 text-growgreen-600 hover:bg-growgreen-50"
            >
              Edit Profile
            </Button>
            <Button 
              variant="outline" 
              className="border-red-600 text-red-600 hover:bg-red-50"
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
