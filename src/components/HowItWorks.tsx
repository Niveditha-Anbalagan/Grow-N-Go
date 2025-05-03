
import React from 'react';
import { Package, ShoppingCart, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-growgreen-600" />,
      title: "Browse & Choose",
      description: "Select from our range of fresh, seasonal produce and farm-made goods."
    },
    {
      icon: <Package className="w-12 h-12 text-growgreen-600" />,
      title: "Farmers Harvest",
      description: "Local farmers harvest your order fresh, ensuring quality and freshness."
    },
    {
      icon: <Truck className="w-12 h-12 text-growgreen-600" />,
      title: "Fresh Delivery",
      description: "Receive your order delivered right to your doorstep, farm fresh!"
    }
  ];

  return (
    <section id="how-it-works" className="section bg-growgreen-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="subheadline">How It Works</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">From Farm To Doorstep</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our simple process ensures you get the freshest products possible from our network of local farms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-sm">
                {step.icon}
              </div>
              <div className="pt-6 text-center">
                <h4 className="text-xl font-bold mb-4 mt-4">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-10 h-0.5 bg-growgreen-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
