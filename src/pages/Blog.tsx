
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Tag, Clock, User } from "lucide-react";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Avoid Plagiarism in Academic Writing",
    excerpt: "Learn effective strategies to ensure your academic papers are original and properly cited.",
    category: "Academic Writing",
    author: "Dr. Rajesh Kumar",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "How to Spot AI-Generated Content: A Comprehensive Guide",
    excerpt: "Discover the telltale signs of AI-written text and learn how to distinguish between human and machine writing.",
    category: "AI Detection",
    author: "Dr. Priya Sharma",
    date: "July 2, 2023",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "The Ethical Implications of AI Content Detection",
    excerpt: "Exploring the moral and ethical questions surrounding AI detection technology in academia and publishing.",
    category: "Ethics",
    author: "Arjun Patel",
    date: "August 10, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Plagiarism: Types, Consequences, and Prevention",
    excerpt: "A deep dive into the different forms of plagiarism and how to ensure academic integrity in your work.",
    category: "Academic Integrity",
    author: "Dr. Rajesh Kumar",
    date: "September 5, 2023",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "How Universities Are Adapting to Combat AI-Generated Essays",
    excerpt: "Universities worldwide are implementing new strategies to maintain academic integrity in the age of AI.",
    category: "Education",
    author: "Dr. Priya Sharma",
    date: "October 12, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "The Future of Content Verification in Publishing",
    excerpt: "How publishers are implementing new technologies to ensure the originality of submitted manuscripts.",
    category: "Publishing",
    author: "Arjun Patel",
    date: "November 8, 2023",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

// Categories for filtering
const categories = [
  "All Categories",
  "Academic Writing",
  "AI Detection",
  "Ethics",
  "Academic Integrity",
  "Education",
  "Publishing",
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Separate featured and regular posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
              TextifyShield Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert insights on plagiarism, AI detection, and maintaining content integrity.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 py-6 pr-4 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand mb-8">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="h-60 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-brand-blue bg-blue-50 rounded-full">
                        <Tag className="mr-1 h-3 w-3" /> {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand mb-3">
                      <Link to={`/blog/${post.id}`} className="hover:text-brand-blue">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-brand-blue hover:text-blue-700 font-medium"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Listing */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-lg font-bold text-brand mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-50 text-brand-blue font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-brand mb-4">Join Our Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Stay updated with the latest articles and tips.
                  </p>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="mb-3"
                  />
                  <Button className="w-full bg-brand-blue hover:bg-blue-600 text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-brand">All Articles</h2>
                <div className="text-sm text-gray-500">
                  Showing {filteredPosts.length} articles
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                    <Link to={`/blog/${post.id}`} className="h-48 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                    </Link>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium text-brand-blue bg-blue-50 rounded-full">
                          {post.category}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-brand mb-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-brand-blue">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center mt-4 text-sm">
                        <div className="text-gray-500 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="ml-auto">
                          <Link 
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center text-brand-blue hover:text-blue-700 font-medium text-sm"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="bg-white rounded-xl p-8 text-center border border-gray-100">
                  <h3 className="text-xl font-bold text-brand mb-2">No articles found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Check Your Content?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Use our advanced plagiarism and AI detection tools to ensure your content is original and authentic.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-blue-50">
              <Link to="/#pricing">
                Try TextifyShield Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
