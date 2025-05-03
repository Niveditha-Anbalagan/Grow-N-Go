
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: ProductType[] = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 65,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
    category: "fruits"
  },
  {
    id: 2,
    name: "Fresh Spinach (Keerai)",
    price: 30,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    category: "vegetables"
  },
  {
    id: 3,
    name: "Aavin Butter",
    price: 50,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d",
    category: "dairy"
  },
  {
    id: 4,
    name: "Weekly Veggie Basket",
    price: 599,
    image: "https://images.unsplash.com/photo-1605613928079-c1d0b5266aec",
    category: "baskets"
  },
  {
    id: 5,
    name: "Homemade Mango Pickle",
    price: 180,
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba",
    category: "homemade"
  },
  {
    id: 6,
    name: "Organic Coconuts",
    price: 35,
    image: "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb",
    category: "fruits"
  },
  {
    id: 7,
    name: "Fresh Okra (Ladies Finger)",
    price: 40,
    image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2",
    category: "vegetables"
  },
  {
    id: 8,
    name: "Farm Fresh Curd",
    price: 45,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    category: "dairy"
  }
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "fruits", name: "Fruits" },
  { id: "vegetables", name: "Vegetables" },
  { id: "dairy", name: "Dairy" },
  { id: "baskets", name: "Organic Baskets" },
  { id: "homemade", name: "Homemade Items" }
];

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="shop" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="subheadline">Our Products</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">Fresh From Tamil Nadu Farms</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Browse our selection of fresh, organic products grown and made with love by local farmers from across Tamil Nadu.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'bg-growgreen-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-growgreen-700 font-medium">₹{product.price}</span>
                  <Button className="bg-growgreen-600 hover:bg-growgreen-700 h-9 rounded-full px-4">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
