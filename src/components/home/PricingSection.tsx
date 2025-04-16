
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { CreditCard, Shield, Check } from "lucide-react";

const PricingSection = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [activeService, setActiveService] = useState<string>("plagiarism");

  const plagiarismPrice = 30; // ₹30 per page
  const aiCheckPrice = 20; // ₹20 per page

  const handleSliderChange = (value: number[]) => {
    setPageCount(value[0]);
  };

  const calculateTotalPrice = () => {
    if (activeService === "plagiarism") {
      return pageCount * plagiarismPrice;
    } else {
      return pageCount * aiCheckPrice;
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Pay only for what you need - no hidden fees or subscriptions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <Tabs defaultValue="plagiarism" className="w-full" onValueChange={setActiveService}>
              <TabsList className="w-full mb-8">
                <TabsTrigger
                  value="plagiarism"
                  className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Plagiarism Check
                </TabsTrigger>
                <TabsTrigger
                  value="ai"
                  className="flex-1 data-[state=active]:bg-brand-green data-[state=active]:text-white"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  AI Detection
                </TabsTrigger>
              </TabsList>

              <TabsContent value="plagiarism" className="mt-0">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Pages</span>
                    <span className="text-sm font-bold text-brand">{pageCount}</span>
                  </div>
                  <Slider
                    defaultValue={[1]}
                    max={100}
                    step={1}
                    className="my-4"
                    onValueChange={handleSliderChange}
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1 page</span>
                    <span>50 pages</span>
                    <span>100 pages</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                  <div className="flex-1 p-6 bg-blue-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-brand mb-2">Base Price</h3>
                    <div className="text-3xl font-bold text-brand-blue mb-2">₹{plagiarismPrice}</div>
                    <p className="text-sm text-gray-600">per page</p>
                  </div>
                  <div className="flex-1 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-brand mb-2">Pages</h3>
                    <div className="text-3xl font-bold text-brand mb-2">× {pageCount}</div>
                    <p className="text-sm text-gray-600">total pages to check</p>
                  </div>
                  <div className="flex-1 p-6 bg-green-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-brand mb-2">Total</h3>
                    <div className="text-3xl font-bold text-brand-green mb-2">₹{calculateTotalPrice()}</div>
                    <p className="text-sm text-gray-600">one-time payment</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mb-8">
                  <h4 className="font-medium text-brand-blue mb-2">What's included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-blue mr-2" />
                      <span className="text-sm text-gray-700">Detailed similarity report</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-blue mr-2" />
                      <span className="text-sm text-gray-700">Source identification</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-blue mr-2" />
                      <span className="text-sm text-gray-700">Highlighted text matches</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-blue mr-2" />
                      <span className="text-sm text-gray-700">PDF report download</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full py-6 bg-brand-blue hover:bg-blue-600 text-white">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Pay ₹{calculateTotalPrice()} and Check Now
                </Button>
              </TabsContent>

              <TabsContent value="ai" className="mt-0">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Pages</span>
                    <span className="text-sm font-bold text-brand">{pageCount}</span>
                  </div>
                  <Slider
                    defaultValue={[1]}
                    max={100}
                    step={1}
                    className="my-4"
                    onValueChange={handleSliderChange}
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1 page</span>
                    <span>50 pages</span>
                    <span>100 pages</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                  <div className="flex-1 p-6 bg-green-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-brand mb-2">Base Price</h3>
                    <div className="text-3xl font-bold text-brand-green mb-2">₹{aiCheckPrice}</div>
                    <p className="text-sm text-gray-600">per page</p>
                  </div>
                  <div className="flex-1 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-brand mb-2">Pages</h3>
                    <div className="text-3xl font-bold text-brand mb-2">× {pageCount}</div>
                    <p className="text-sm text-gray-600">total pages to check</p>
                  </div>
                  <div className="flex-1 p-6 bg-blue-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-brand mb-2">Total</h3>
                    <div className="text-3xl font-bold text-brand-blue mb-2">₹{calculateTotalPrice()}</div>
                    <p className="text-sm text-gray-600">one-time payment</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 mb-8">
                  <h4 className="font-medium text-brand-green mb-2">What's included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-green mr-2" />
                      <span className="text-sm text-gray-700">AI probability score</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-green mr-2" />
                      <span className="text-sm text-gray-700">Sentence-by-sentence analysis</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-green mr-2" />
                      <span className="text-sm text-gray-700">AI pattern detection</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-brand-green mr-2" />
                      <span className="text-sm text-gray-700">PDF report download</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full py-6 bg-brand-green hover:bg-green-600 text-white">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Pay ₹{calculateTotalPrice()} and Check Now
                </Button>
              </TabsContent>
            </Tabs>
          </div>

          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm text-gray-500">Money-back guarantee</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">Secure payment</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
