
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brand">TextifyShield</h3>
            <p className="text-gray-600 text-sm">
              Cutting-edge technology to detect and remove AI-generated content and plagiarism in your text.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-800">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plagiarism-report" className="text-gray-600 text-sm hover:text-brand-blue">
                  Plagiarism Check
                </Link>
              </li>
              <li>
                <Link to="/ai-report" className="text-gray-600 text-sm hover:text-brand-blue">
                  AI Content Detection
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 text-sm hover:text-brand-blue">
                  Content Rewriting
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 text-sm hover:text-brand-blue">
                  Grammar Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-800">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 text-sm hover:text-brand-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 text-sm hover:text-brand-blue">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 text-sm hover:text-brand-blue">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 text-sm hover:text-brand-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 text-sm hover:text-brand-blue">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-600 text-sm hover:text-brand-blue">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 text-sm hover:text-brand-blue">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} TextifyShield. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
              <span className="flex items-center text-gray-500 text-sm">
                <Mail className="mr-1 h-4 w-4" /> support@textifyshield.com
              </span>
              <span className="flex items-center text-gray-500 text-sm">
                <Phone className="mr-1 h-4 w-4" /> +1 (123) 456-7890
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
