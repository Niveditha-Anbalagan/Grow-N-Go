
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search, Package } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Package className="h-8 w-8 text-growgreen-600 mr-2" />
            <span className="text-2xl font-bold text-growgreen-700 font-poppins">Grow<span className="text-earth-600">N</span>Go</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-growgreen-600 font-medium">Home</a>
          <a href="#shop" className="text-foreground hover:text-growgreen-600 font-medium">Shop</a>
          <a href="#about" className="text-foreground hover:text-growgreen-600 font-medium">About</a>
          <a href="#how-it-works" className="text-foreground hover:text-growgreen-600 font-medium">How it Works</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-growgreen-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </Button>
          <Button className="bg-growgreen-600 hover:bg-growgreen-700 text-white">Sign In</Button>
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden flex items-center">
          <Button variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md pt-2 pb-4 absolute w-full z-40">
          <div className="container-custom flex flex-col space-y-3">
            <a href="#" className="text-foreground hover:text-growgreen-600 font-medium py-2">Home</a>
            <a href="#shop" className="text-foreground hover:text-growgreen-600 font-medium py-2">Shop</a>
            <a href="#about" className="text-foreground hover:text-growgreen-600 font-medium py-2">About</a>
            <a href="#how-it-works" className="text-foreground hover:text-growgreen-600 font-medium py-2">How it Works</a>
            <div className="flex items-center space-x-3 pt-2">
              <Button variant="outline" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-growgreen-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Button>
              <Button className="bg-growgreen-600 hover:bg-growgreen-700 text-white">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
