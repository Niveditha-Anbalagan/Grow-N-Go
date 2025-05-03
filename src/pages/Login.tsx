
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // For now, just show a toast notification
    toast({
      title: "Sign in attempted",
      description: "This is a front-end mockup. Backend integration is needed for actual authentication.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-growgreen-700">Sign In to GrowNGo</h1>
            <p className="text-muted-foreground mt-2">Fresh from Tamil Nadu farms to your Chennai doorstep</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Your password" required />
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <Link to="/forgot-password" className="text-sm text-growgreen-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <Button type="submit" className="w-full bg-growgreen-600 hover:bg-growgreen-700">Sign In</Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Don't have an account? <Link to="/register" className="text-growgreen-600 hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
