
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle, CheckCircle, XCircle, InfoIcon } from "lucide-react";

const AIReport = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
              AI Content Detection Report
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              See how our advanced AI detection technology provides comprehensive analysis of content authenticity.
            </p>
            <Button asChild className="bg-brand-blue hover:bg-blue-600 text-white">
              <Link to="/#pricing">
                Try It Yourself <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              {/* Report Header */}
              <div className="p-6 md:p-8 bg-brand-blue text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">AI Content Detection Report</h2>
                    <p className="text-blue-100">Document: "The Future of Renewable Energy.docx"</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white text-brand-blue font-medium">
                      <AlertCircle className="mr-2 h-5 w-5" />
                      87% AI-Generated
                    </span>
                  </div>
                </div>
              </div>

              {/* Report Summary */}
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h3 className="text-xl font-bold text-brand mb-4">Report Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                      <h4 className="font-semibold text-brand">AI Probability</h4>
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">87%</div>
                    <p className="text-sm text-gray-600">High likelihood of AI-generated content</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center mb-2">
                      <InfoIcon className="h-5 w-5 text-brand-blue mr-2" />
                      <h4 className="font-semibold text-brand">Content Analysis</h4>
                    </div>
                    <div className="text-3xl font-bold text-brand-blue mb-2">1,250</div>
                    <p className="text-sm text-gray-600">Words analyzed in document</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                      <h4 className="font-semibold text-brand">Sections Flagged</h4>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">7/9</div>
                    <p className="text-sm text-gray-600">Document sections flagged as AI</p>
                  </div>
                </div>
              </div>

              {/* Content Analysis */}
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h3 className="text-xl font-bold text-brand mb-4">Content Analysis</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-brand mb-1">Introduction</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          "Renewable energy sources are increasingly gaining prominence as sustainable alternatives to traditional fossil fuels. This paper explores the future landscape of renewable energy technologies, their potential impact on global energy systems, and the challenges and opportunities that lie ahead in their widespread adoption."
                        </p>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          98% AI Probability
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-brand mb-1">Current State of Solar Energy</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          "Solar photovoltaic technology has seen remarkable improvements in efficiency and cost-effectiveness over the past decade. The global installed capacity has grown exponentially, with major deployments in China, the United States, and various European countries. This growth trajectory suggests a promising future for solar as a dominant renewable energy source."
                        </p>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          76% AI Probability
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-brand mb-1">Personal Experience with Wind Farms</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          "During my visit to the coastal wind farm last summer, I was struck by the massive scale of the turbines. The loud whooshing sound was unexpected, and I felt a mix of awe and concern about the local bird populations. The tour guide mentioned they'd implemented special measures to minimize bird strikes, but I still wonder if it's enough."
                        </p>
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          12% AI Probability
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pattern Analysis */}
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h3 className="text-xl font-bold text-brand mb-4">AI Pattern Analysis</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <XCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-brand">Formulaic Structure</h4>
                      <p className="text-sm text-gray-600">
                        The document follows a predictable pattern common in AI-generated content, with very consistent paragraph lengths and transitional phrases.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <XCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-brand">Generic Language</h4>
                      <p className="text-sm text-gray-600">
                        Uses standardized, generic phrasing rather than unique or idiosyncratic expressions typical of human writing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <XCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-brand">Reference Style</h4>
                      <p className="text-sm text-gray-600">
                        References are perfectly formatted in a consistent pattern that suggests automated generation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-brand">Personal Anecdotes</h4>
                      <p className="text-sm text-gray-600">
                        The section about personal experience with wind farms shows characteristics of human writing, with subjective observations and emotional context.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="p-6 md:p-8 bg-gray-50">
                <h3 className="text-xl font-bold text-brand mb-4">Recommendations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Revise the introduction and theoretical sections with more personal insights and unique perspectives.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Add more varied sentence structures and lengths to improve authenticity.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Include more specific examples, data points, and first-hand observations throughout the document.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Consider using our AI content rewriting tool to help transform AI-generated sections into more human-like writing.</span>
                  </li>
                </ul>
              </div>

              {/* Report Footer */}
              <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50">
                <div className="mb-4 sm:mb-0">
                  <p className="text-sm text-gray-500">
                    Report generated on: April 16, 2023 • Report ID: AI-87429
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" className="text-gray-600 border-gray-300">
                    Download PDF
                  </Button>
                  <Button className="bg-brand-blue hover:bg-blue-600 text-white">
                    Check Another Document
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand mb-4">
              Key Features of Our AI Detection
            </h2>
            <p className="text-lg text-gray-600">
              Our advanced technology identifies AI-generated content with industry-leading accuracy.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand mb-2">Pattern Recognition</h3>
                <p className="text-gray-600">
                  Our algorithms detect subtle patterns and regularities that are characteristic of machine-generated text.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-brand-green rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand mb-2">Statistical Analysis</h3>
                <p className="text-gray-600">
                  Comprehensive statistical models analyze sentence structure, word choice, and linguistic variations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand mb-2">Contextual Evaluation</h3>
                <p className="text-gray-600">
                  Evaluates how ideas flow and connect, identifying the unnatural transitions common in AI writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Verify Your Content?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get comprehensive AI detection with detailed reports and recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-blue-50">
                <Link to="/#pricing">
                  Start Detecting AI Content
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                <Link to="/contact">
                  Contact Sales for Bulk Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIReport;
