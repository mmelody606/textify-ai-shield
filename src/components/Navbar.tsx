
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-brand font-bold text-xl">TextifyShield</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-blue font-medium">
              Home
            </Link>
            <Link to="/ai-report" className="text-gray-700 hover:text-brand-blue font-medium">
              AI Detection
            </Link>
            <Link to="/plagiarism-report" className="text-gray-700 hover:text-brand-blue font-medium">
              Plagiarism Check
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-blue font-medium">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-brand-blue font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-blue font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild className="bg-brand-blue hover:bg-blue-600 text-white font-medium">
              <Link to="/#pricing">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/ai-report" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              onClick={toggleMenu}
            >
              AI Detection
            </Link>
            <Link 
              to="/plagiarism-report" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Plagiarism Check
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-brand-blue text-white hover:bg-blue-600"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

