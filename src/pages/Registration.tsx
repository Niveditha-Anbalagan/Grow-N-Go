
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Registration = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // For now, just show a toast notification
    toast({
      title: "Account registration initiated",
      description: "This is a front-end mockup. Backend integration is needed for actual registration.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-growgreen-700">Create Your GrowNGo Account</h1>
            <p className="text-muted-foreground mt-2">Join the community of conscious eaters in Chennai</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Enter your full name" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Your 10-digit phone number" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a strong password" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <Link to="/terms" className="text-growgreen-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-growgreen-600 hover:underline">Privacy Policy</Link>
              </Label>
            </div>
            
            <Button type="submit" className="w-full bg-growgreen-600 hover:bg-growgreen-700">Create Account</Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Already have an account? <Link to="/login" className="text-growgreen-600 hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
