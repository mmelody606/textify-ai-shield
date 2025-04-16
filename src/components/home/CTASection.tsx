
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Verify Your Content?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start checking your content for plagiarism and AI-generated text today. Fast, accurate, and secure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-blue-50">
              <Link to="/#pricing">
                Check Plagiarism Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
              <Link to="/#pricing">
                Detect AI Content <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-blue-100">
            No credit card required for your first check.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
