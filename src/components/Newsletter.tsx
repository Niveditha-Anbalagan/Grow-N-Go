
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application you would send this to your backend
    toast({
      title: "Thanks for subscribing!",
      description: "You've successfully joined our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="section bg-growgreen-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Join Our Chennai Community of Conscious Eaters</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for Tamil Nadu seasonal recipes, farmer stories, and updates on new products.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white text-gray-800 border-0 focus-visible:ring-2 focus-visible:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-white text-growgreen-600 hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="text-sm opacity-75 mt-3 text-center">
            By subscribing you agree to receive our newsletter. We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
