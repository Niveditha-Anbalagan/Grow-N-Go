
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-growgreen-50 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="headline text-growgreen-800">
              Fresh from Farms <br className="hidden md:block" />to Your Table
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Delivering locally grown, organic produce and homemade farm goods straight to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">Shop Now</Button>
              <Button variant="outline" className="btn-secondary">Learn More</Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-growgreen-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-earth-100 rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
              alt="Fresh organic produce" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3] md:aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
