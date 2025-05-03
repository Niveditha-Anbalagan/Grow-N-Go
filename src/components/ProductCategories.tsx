
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
    name: "Organic Strawberries",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "fruits"
  },
  {
    id: 2,
    name: "Fresh Green Spinach",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    category: "vegetables"
  },
  {
    id: 3,
    name: "Artisan Cheese",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862",
    category: "dairy"
  },
  {
    id: 4,
    name: "Family Veggie Basket",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1605613928079-c1d0b5266aec",
    category: "baskets"
  },
  {
    id: 5,
    name: "Homemade Strawberry Jam",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1519680490495-a8399afbef7b",
    category: "homemade"
  },
  {
    id: 6,
    name: "Organic Apples",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a",
    category: "fruits"
  },
  {
    id: 7,
    name: "Fresh Carrots",
    price: 2.29,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979",
    category: "vegetables"
  },
  {
    id: 8,
    name: "Organic Milk",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
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
          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">Fresh From The Farm</h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Browse our selection of fresh, organic products grown and made with love by local farmers.
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
                  <span className="text-growgreen-700 font-medium">${product.price.toFixed(2)}</span>
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
