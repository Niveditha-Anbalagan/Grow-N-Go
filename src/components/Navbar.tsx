
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search, Package, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Package className="h-8 w-8 text-growgreen-600 mr-2" />
            <span className="text-2xl font-bold text-growgreen-700 font-poppins">Grow<span className="text-earth-600">N</span>Go</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-growgreen-600 font-medium">Home</Link>
          <Link to="/#shop" className="text-foreground hover:text-growgreen-600 font-medium">Shop</Link>
          <Link to="/#about" className="text-foreground hover:text-growgreen-600 font-medium">About</Link>
          <Link to="/#how-it-works" className="text-foreground hover:text-growgreen-600 font-medium">How it Works</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-growgreen-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </Button>
          
          {user ? (
            <div className="flex items-center space-x-2">
              <Link to="/dashboard">
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => signOut()} 
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-growgreen-600 hover:bg-growgreen-700 text-white">Sign In</Button>
            </Link>
          )}
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
            <Link to="/" className="text-foreground hover:text-growgreen-600 font-medium py-2">Home</Link>
            <Link to="/#shop" className="text-foreground hover:text-growgreen-600 font-medium py-2">Shop</Link>
            <Link to="/#about" className="text-foreground hover:text-growgreen-600 font-medium py-2">About</Link>
            <Link to="/#how-it-works" className="text-foreground hover:text-growgreen-600 font-medium py-2">How it Works</Link>
            <div className="flex items-center space-x-3 pt-2">
              <Button variant="outline" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-growgreen-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Button>
              
              {user ? (
                <div className="flex flex-col space-y-2 w-full pt-2">
                  <Link to="/dashboard" className="w-full">
                    <Button variant="outline" className="w-full justify-center">
                      Dashboard
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={() => signOut()} 
                    className="w-full text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link to="/login" className="w-full">
                  <Button className="w-full bg-growgreen-600 hover:bg-growgreen-700 text-white">Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
