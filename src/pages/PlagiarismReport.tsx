
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, AlertCircle, CheckCircle, XCircle, FileText, ExternalLink } from "lucide-react";

const PlagiarismReport = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
              Plagiarism Detection Report
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              See how our advanced plagiarism checker provides comprehensive analysis of content originality.
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
                    <h2 className="text-2xl font-bold mb-2">Plagiarism Detection Report</h2>
                    <p className="text-blue-100">Document: "Global Warming Effects on Ecosystems.docx"</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-medium">
                      <AlertCircle className="mr-2 h-5 w-5" />
                      23% Similarity Found
                    </span>
                  </div>
                </div>
              </div>

              {/* Report Summary */}
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h3 className="text-xl font-bold text-brand mb-4">Report Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                      <h4 className="font-semibold text-brand">Similarity Score</h4>
                    </div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">23%</div>
                    <p className="text-sm text-gray-600">Content matches found in other sources</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 text-brand-blue mr-2" />
                      <h4 className="font-semibold text-brand">Content Analysis</h4>
                    </div>
                    <div className="text-3xl font-bold text-brand-blue mb-2">2,450</div>
                    <p className="text-sm text-gray-600">Words analyzed in document</p>
                  </div>
                  <div className="bg-brand-light rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <ExternalLink className="h-5 w-5 text-brand mr-2" />
                      <h4 className="font-semibold text-brand">Sources Identified</h4>
                    </div>
                    <div className="text-3xl font-bold text-brand mb-2">7</div>
                    <p className="text-sm text-gray-600">Unique sources of matching content</p>
                  </div>
                </div>
              </div>

              {/* Originality Score */}
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h3 className="text-xl font-bold text-brand mb-4">Originality Score</h3>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Originality</span>
                    <span className="font-bold text-green-600">77%</span>
                  </div>
                  <Progress value={77} className="h-4 mb-3" />
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-700">Similarity</span>
                    <span className="font-bold text-yellow-600">23%</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Original content: 77%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Similar content: 23%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Matching Sources */}
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h3 className="text-xl font-bold text-brand mb-4">Matching Sources</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <div className="flex items-center mb-2 md:mb-0">
                        <div className="flex-shrink-0 h-8 w-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-3">
                          <span className="font-bold text-sm">1</span>
                        </div>
                        <h4 className="font-medium text-brand">Environmental Science Journal (2022)</h4>
                      </div>
                      <div className="text-sm font-medium text-yellow-600">
                        11% Match
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      <a href="#" className="text-brand-blue hover:text-blue-700 underline flex items-center">
                        https://www.environmental-science-journal.org/article12345
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100 text-sm text-gray-700">
                      "Climate change has significantly altered the biodiversity of marine ecosystems. Rising ocean temperatures have caused mass coral bleaching events, disrupting the delicate balance of reef ecosystems worldwide."
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <div className="flex items-center mb-2 md:mb-0">
                        <div className="flex-shrink-0 h-8 w-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-3">
                          <span className="font-bold text-sm">2</span>
                        </div>
                        <h4 className="font-medium text-brand">National Geographic (2021)</h4>
                      </div>
                      <div className="text-sm font-medium text-yellow-600">
                        7% Match
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      <a href="#" className="text-brand-blue hover:text-blue-700 underline flex items-center">
                        https://www.nationalgeographic.com/environment/article/global-warming
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100 text-sm text-gray-700">
                      "The Arctic is warming at a rate almost twice the global average, leading to rapidly melting sea ice. This loss of ice affects wildlife habitats and contributes to further warming through reduced surface reflectivity."
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <div className="flex items-center mb-2 md:mb-0">
                        <div className="flex-shrink-0 h-8 w-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-3">
                          <span className="font-bold text-sm">3</span>
                        </div>
                        <h4 className="font-medium text-brand">Smith, J. et al. (2020) - Research Paper</h4>
                      </div>
                      <div className="text-sm font-medium text-yellow-600">
                        5% Match
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      <a href="#" className="text-brand-blue hover:text-blue-700 underline flex items-center">
                        https://www.sciencedirect.com/science/article/pii/S0921800920
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100 text-sm text-gray-700">
                      "Forest ecosystems are experiencing phenological changes, with altered timing of flowering, leaf emergence, and fruiting. These shifts can create mismatches between interdependent species, disrupting ecological relationships."
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
                    <span className="ml-2">Cite all sources properly using appropriate citation style (APA, MLA, Chicago, etc.).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Rephrase highlighted sections in your own words while maintaining the original meaning.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Use quotation marks for any directly copied text and provide proper citations.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mt-1 text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2">Include a comprehensive bibliography or references section at the end of your document.</span>
                  </li>
                </ul>
              </div>

              {/* Report Footer */}
              <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50">
                <div className="mb-4 sm:mb-0">
                  <p className="text-sm text-gray-500">
                    Report generated on: April 16, 2023 • Report ID: PL-54321
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
              Key Features of Our Plagiarism Checker
            </h2>
            <p className="text-lg text-gray-600">
              Our advanced technology scans billions of web pages, academic papers, and publications to ensure content originality.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand mb-2">Comprehensive Search</h3>
                <p className="text-gray-600">
                  Scans over 10 billion web pages, academic journals, books, and publications for matches.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-brand-green rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand mb-2">Sentence Analysis</h3>
                <p className="text-gray-600">
                  Analyzes individual sentences and linguistic patterns to detect even modified plagiarism.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand mb-2">Citation Helper</h3>
                <p className="text-gray-600">
                  Provides source information and citation suggestions in multiple formats (APA, MLA, Chicago).
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
              Ready to Check Your Content?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Verify the originality of your content with our advanced plagiarism detection technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-blue-50">
                <Link to="/#pricing">
                  Check for Plagiarism Now
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

export default PlagiarismReport;
