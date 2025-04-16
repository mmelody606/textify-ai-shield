
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-brand-blue bg-blue-50 rounded-full mb-4">
                <Shield className="mr-1 h-4 w-4" /> Trusted by 10,000+ Students & Professionals
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand mb-6 tracking-tight">
                Detect Plagiarism & AI Content{" "}
                <span className="text-brand-blue">Instantly!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                The most accurate, fastest, and affordable plagiarism and AI content detector. Protect your academic integrity and professional reputation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand-blue hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg text-lg">
                  <Link to="/#pricing">
                    Check Plagiarism Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50 font-medium px-6 py-3 rounded-lg text-lg">
                  <Link to="/#pricing">
                    Detect AI Content <AlertCircle className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm font-medium text-gray-600">99.8% Accuracy</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-brand-green">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm font-medium text-gray-600">100% Secure</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm font-medium text-gray-600">Instant Results</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative mx-auto bg-white shadow-xl rounded-2xl p-4 md:p-8 animate-scale-in">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs font-medium text-gray-500">TextifyShield Scanner</div>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-blue-100 rounded w-full animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  <div className="pt-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="h-6 w-20 bg-blue-50 rounded-md"></div>
                      <div className="h-6 w-20 bg-green-50 rounded-md"></div>
                    </div>
                    <div className="h-8 w-24 bg-brand-blue rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium text-brand-blue">Results in seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
