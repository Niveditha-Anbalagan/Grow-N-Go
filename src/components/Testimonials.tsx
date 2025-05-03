
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const farmerTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Organic Vegetable Farmer",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a",
    quote: "GrowNGo has transformed our small family farm. We now have a direct connection with customers who value our sustainable farming practices."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Dairy Farmer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "The platform made it possible for us to expand our customer base and share our organic dairy products with more people in the community."
  }
];

const customerTestimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    location: "Local Resident",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "The quality of produce from GrowNGo is incomparable to supermarkets. I love knowing exactly where my food comes from."
  },
  {
    id: 2,
    name: "David Chen",
    location: "Food Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "My family's health has improved since we started eating fresh, organic produce from GrowNGo. The weekly deliveries are super convenient."
  }
];

const TestimonialCard = ({ name, role, image, quote }: { name: string, role: string, image: string, quote: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
    <div className="flex-shrink-0">
      <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover" />
    </div>
    <div>
      <p className="italic mb-4 text-gray-700">"{quote}"</p>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="section bg-earth-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="subheadline">Testimonials</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">Our Community Stories</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Hear from the farmers who grow your food and the customers who enjoy it.
          </p>
        </div>
        
        <Tabs defaultValue="customers" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="customers" className="px-6 py-2">Customers</TabsTrigger>
            <TabsTrigger value="farmers" className="px-6 py-2">Farmers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="customers" className="space-y-6">
            {customerTestimonials.map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.location}
                image={testimonial.image}
                quote={testimonial.quote}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="farmers" className="space-y-6">
            {farmerTestimonials.map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                quote={testimonial.quote}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
