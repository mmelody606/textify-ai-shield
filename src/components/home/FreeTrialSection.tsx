
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";

const FreeTrialSection = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const maxWords = 500;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    
    // Count words
    const words = value.trim() ? value.trim().split(/\s+/) : [];
    setWordCount(words.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-200">
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="mb-6 md:mb-0 md:mr-8">
                <span className="inline-block px-3 py-1 text-xs font-medium text-brand-blue bg-blue-100 rounded-full border border-blue-200 mb-3">
                  LIMITED OFFER
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-brand mb-3">
                  Try Our Free Checker
                </h2>
                <p className="text-gray-600">
                  Enter up to 500 words and see how our plagiarism and AI detection works.
                </p>
              </div>
              <div className="flex-shrink-0 md:ml-auto">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-100">
                  <span className="text-2xl font-bold text-brand-blue">500</span>
                </div>
                <span className="block text-center text-xs font-medium text-gray-500 mt-1">
                  FREE WORDS
                </span>
              </div>
            </div>

            <div className="mb-4">
              <Textarea
                placeholder="Paste your text here (up to 500 words)..."
                className="min-h-[150px] text-gray-700"
                value={text}
                onChange={handleTextChange}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm text-gray-500">
                  {wordCount} / {maxWords} words
                </div>
                {wordCount > maxWords && (
                  <div className="flex items-center text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Exceeds free limit
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-blue hover:bg-blue-600 text-white sm:flex-1">
                Check Plagiarism
              </Button>
              <Button variant="outline" className="border-brand-green text-brand-green hover:bg-green-50 sm:flex-1">
                Detect AI Content
              </Button>
            </div>

            <div className="mt-6 text-sm text-center text-gray-500">
              No credit card required. Upgrade for unlimited checks and full reports.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
