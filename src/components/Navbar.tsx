
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-estate-800">
            Estate<span className="text-estate-500">Talk</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-estate-600 font-medium transition-colors">
            Features
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-estate-600 font-medium transition-colors">
            Benefits
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-estate-600 font-medium transition-colors">
            Pricing
          </a>
          <Button className="bg-estate-500 hover:bg-estate-600 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-600 hover:text-estate-600 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#benefits"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-600 hover:text-estate-600 font-medium transition-colors"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-600 hover:text-estate-600 font-medium transition-colors"
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button className="w-full bg-estate-500 hover:bg-estate-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
