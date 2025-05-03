
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Registration = () => {
  const { toast } = useToast();
  const [userType, setUserType] = useState<'customer' | 'farmer'>('customer');
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
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
          
          <div className="mb-8">
            <div className="flex gap-4 mb-4">
              <Button
                type="button"
                variant={userType === 'customer' ? 'default' : 'outline'}
                className={userType === 'customer' ? 'bg-growgreen-600 hover:bg-growgreen-700 flex-1' : 'flex-1'}
                onClick={() => setUserType('customer')}
              >
                Register as Customer
              </Button>
              <Button
                type="button"
                variant={userType === 'farmer' ? 'default' : 'outline'} 
                className={userType === 'farmer' ? 'bg-growgreen-600 hover:bg-growgreen-700 flex-1' : 'flex-1'}
                onClick={() => setUserType('farmer')}
              >
                Register as Farmer
              </Button>
            </div>
          </div>
          
          {userType === 'customer' ? (
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
              
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea id="address" placeholder="Your complete delivery address" required />
              </div>
              
              <div className="space-y-2">
                <Label>Preferences</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vegetarian" />
                    <Label htmlFor="vegetarian" className="text-sm">Vegetarian</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vegan" />
                    <Label htmlFor="vegan" className="text-sm">Vegan</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="organic" />
                    <Label htmlFor="organic" className="text-sm">Organic Only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dairy" />
                    <Label htmlFor="dairy" className="text-sm">Dairy</Label>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the <Link to="/terms" className="text-growgreen-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-growgreen-600 hover:underline">Privacy Policy</Link>
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-growgreen-600 hover:bg-growgreen-700">Create Account</Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="farmerName">Full Name</Label>
                <Input id="farmerName" type="text" placeholder="Enter your full name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmerEmail">Email Address</Label>
                <Input id="farmerEmail" type="email" placeholder="you@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmerPhone">Phone Number</Label>
                <Input id="farmerPhone" type="tel" placeholder="Your 10-digit phone number" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmerPassword">Password</Label>
                <Input id="farmerPassword" type="password" placeholder="Create a strong password" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmerConfirmPassword">Confirm Password</Label>
                <Input id="farmerConfirmPassword" type="password" placeholder="Confirm your password" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmName">Farm Name</Label>
                <Input id="farmName" type="text" placeholder="Your farm's name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmAddress">Farm Address / Region</Label>
                <Textarea id="farmAddress" placeholder="Your farm's address or region" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="productCategories">Product Categories</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fruits" />
                    <Label htmlFor="fruits" className="text-sm">Fruits</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vegetables" />
                    <Label htmlFor="vegetables" className="text-sm">Vegetables</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dairy" />
                    <Label htmlFor="dairy" className="text-sm">Dairy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="homemade" />
                    <Label htmlFor="homemade" className="text-sm">Homemade</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="certification">Certification (if applicable)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select certification type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organic">Organic Certified</SelectItem>
                    <SelectItem value="natural">Natural Farming</SelectItem>
                    <SelectItem value="fpo">FPO Certified</SelectItem>
                    <SelectItem value="none">No Certification</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="farmerTerms" required />
                <Label htmlFor="farmerTerms" className="text-sm">
                  I agree to the <Link to="/terms" className="text-growgreen-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-growgreen-600 hover:underline">Privacy Policy</Link>
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-growgreen-600 hover:bg-growgreen-700">Register as Farmer</Button>
            </form>
          )}
          
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
