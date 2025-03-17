
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Estate<span className="text-estate-500">Talk</span>
            </h3>
            <p className="mb-4">
              Helping real estate agents never miss a lead with AI-powered call handling and analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-estate-500 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="hover:text-estate-500 transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="hover:text-estate-500 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="hover:text-estate-500 transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-estate-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-estate-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-estate-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-estate-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-estate-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EstateTalk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
