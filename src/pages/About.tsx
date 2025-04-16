
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Eye, BookOpen, Users, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
              About TextifyShield
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We're on a mission to uphold academic integrity and ensure content authenticity in the age of AI.
            </p>
            <Button asChild className="bg-brand-blue hover:bg-blue-600 text-white">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  TextifyShield was founded in 2021 by a team of educators, data scientists, and software engineers who recognized a growing problem: the increasing prevalence of plagiarism and AI-generated content in academia and professional settings.
                </p>
                <p className="text-gray-600 mb-4">
                  With the rise of sophisticated language models and content generation tools, it became harder than ever to distinguish between authentic human writing and artificially generated text. We saw firsthand how this was affecting educational integrity and undermining the value of original thought.
                </p>
                <p className="text-gray-600">
                  That's why we created TextifyShield—a comprehensive solution that combines advanced AI detection algorithms with traditional plagiarism checking capabilities to provide a powerful shield against content misrepresentation.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                    alt="Our team working on TextifyShield"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-xl">Since</div>
                    <div className="text-3xl">2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600">
              Guided by strong principles that shape everything we do.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 text-brand-blue rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To uphold academic and professional integrity by providing accurate, accessible tools that detect plagiarism and AI-generated content.
                </p>
                <p className="text-gray-600">
                  We believe in creating a fair environment where original thought is valued and protected, and where the authenticity of content can be verified with confidence.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-green-100 text-brand-green rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand mb-4">Core Values</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-brand-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong>Integrity:</strong> We believe in honesty, transparency, and ethical practices in everything we do.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-brand-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong>Innovation:</strong> We continuously refine our technology to stay ahead of evolving AI detection challenges.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-brand-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong>Accessibility:</strong> We make powerful detection tools available and affordable to all who need them.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-brand-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong>Privacy:</strong> We respect user data and maintain strict security standards to protect content.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              A diverse group of experts committed to upholding content integrity.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                    alt="Team member"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand mb-1">Dr. Rajesh Kumar</h3>
                  <p className="text-brand-blue font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">
                    Former professor with 15+ years of experience in computational linguistics and natural language processing.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                    alt="Team member"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand mb-1">Dr. Priya Sharma</h3>
                  <p className="text-brand-blue font-medium mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600 text-sm">
                    AI researcher specializing in machine learning algorithms with a focus on content analysis and pattern detection.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                    alt="Team member"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand mb-1">Arjun Patel</h3>
                  <p className="text-brand-blue font-medium mb-3">Head of Product</p>
                  <p className="text-gray-600 text-sm">
                    Product visionary with experience building educational technology solutions used by universities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-brand-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                <p className="text-blue-100">Customers</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <p className="text-blue-100">Universities</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">99.8%</div>
                <p className="text-blue-100">Accuracy</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">2M+</div>
                <p className="text-blue-100">Checks Run</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand mb-4">
                Ready to Try TextifyShield?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of educators, students, and professionals who trust our platform for content verification.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-brand-blue hover:bg-blue-600 text-white">
                <Link to="/#pricing">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-blue-50">
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
