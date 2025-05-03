
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-earth-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Sustainable farming in Tamil Nadu" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="subheadline">About GrowNGo</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">Nourishing Chennai, Empowering Tamil Nadu Farmers</h3>
            <p className="mb-4 text-lg">
              GrowNGo was founded with a simple mission: to reconnect Chennai residents with their food sources while supporting local Tamil Nadu agriculture.
            </p>
            <p className="mb-6 text-lg">
              We partner with small-scale farmers from Kanchipuram, Thiruvallur, and throughout Tamil Nadu who practice sustainable farming methods, ensuring that every product you receive is not only fresh and delicious but also grown with care for our environment.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-growgreen-600 mb-2">50+</span>
                <span className="text-center">Tamil Nadu Farmers</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-growgreen-600 mb-2">3000+</span>
                <span className="text-center">Chennai Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
