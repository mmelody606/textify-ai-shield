
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone, MessageSquare, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Have questions or need help? We're here to assist you with any inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-brand mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We value your feedback and are dedicated to providing excellent service. 
                  Reach out to us via the contact form or use our direct contact details below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand">Email</h3>
                      <p className="mt-1 text-gray-600">support@textifyshield.com</p>
                      <p className="mt-1 text-gray-600">info@textifyshield.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand">Phone</h3>
                      <p className="mt-1 text-gray-600">+1 (123) 456-7890</p>
                      <p className="mt-1 text-gray-600">+1 (987) 654-3210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand">Address</h3>
                      <p className="mt-1 text-gray-600">
                        123 Innovation Drive<br />
                        Tech Park, Bangalore 560001<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-brand">Business Hours</h3>
                      <p className="mt-1 text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 10:00 AM - 2:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-medium text-brand mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand-blue hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand-blue hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand-blue hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand-blue hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full mb-6">
                        <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-brand mb-4">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        className="bg-brand-blue hover:bg-blue-600 text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center mb-6">
                        <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 text-brand-blue">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <h2 className="text-2xl font-bold text-brand">Send us a Message</h2>
                          <p className="text-gray-600">We'll respond as soon as possible</p>
                        </div>
                      </div>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject
                          </label>
                          <Select onValueChange={handleSelectChange} value={formData.subject}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                              <SelectItem value="Plagiarism Detection Support">Plagiarism Detection Support</SelectItem>
                              <SelectItem value="AI Content Detection Support">AI Content Detection Support</SelectItem>
                              <SelectItem value="Billing & Payments">Billing & Payments</SelectItem>
                              <SelectItem value="Technical Support">Technical Support</SelectItem>
                              <SelectItem value="Partnership Opportunities">Partnership Opportunities</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Your message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-brand-blue hover:bg-blue-600 text-white flex items-center justify-center py-6"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-brand mb-8">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9989294453183!2d77.63589677584413!3d12.97574541732248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177a0a7bb805%3A0x1b6730e07792292f!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1682597363030!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about contacting us.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand mb-3">What is your response time?</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand mb-3">Do you offer phone support?</h3>
                <p className="text-gray-600">
                  Yes, our phone support is available Monday to Friday, 9:00 AM to 6:00 PM IST. You can reach us at +1 (123) 456-7890.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand mb-3">How can I get technical assistance?</h3>
                <p className="text-gray-600">
                  For technical issues, please contact us through the form on this page or email support@textifyshield.com with details of your problem.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand mb-3">Do you offer enterprise solutions?</h3>
                <p className="text-gray-600">
                  Yes, we offer custom enterprise solutions for educational institutions and businesses. Contact our sales team for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
