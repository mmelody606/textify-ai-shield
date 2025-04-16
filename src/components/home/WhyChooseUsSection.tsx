
import { Zap, Lock, CheckCircle, Clock, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    icon: Zap,
    title: "Fast Results",
    description: "Get comprehensive results in seconds, not minutes or hours.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: CheckCircle,
    title: "Highly Accurate",
    description: "99.8% accuracy rate with advanced AI and pattern recognition.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Lock,
    title: "100% Secure",
    description: "Your content is never stored or shared with third parties.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Check your content anytime, from anywhere in the world.",
    color: "bg-purple-100 text-purple-600",
  },
];

const testimonials = [
  {
    content: "TextifyShield saved my academic career. I was able to verify my dissertation was completely original before submission.",
    author: "Sarah Johnson",
    role: "PhD Student",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    content: "The AI detection is incredibly accurate. As a professor, I can now easily verify if my students' work is authentic.",
    author: "Dr. Michael Chen",
    role: "University Professor",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    content: "Fast, reliable and affordable. I use it for all my content marketing to ensure everything is original.",
    author: "Emma Rodriguez",
    role: "Content Marketer",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    content: "The detailed reports helped me identify areas where I needed to improve citation. Best plagiarism tool I've used.",
    author: "Robert Williams",
    role: "Graduate Student",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    content: "As a journal editor, I rely on TextifyShield to verify submissions. It's become an essential part of our workflow.",
    author: "Dr. Lisa Taylor",
    role: "Journal Editor",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Why Choose TextifyShield
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied users who trust our platform for their content verification needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-brand mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center mb-8">
            <div className="lg:w-1/3 lg:pr-12 mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-brand">4.9/5</span>
              </div>
              <h3 className="text-2xl font-bold text-brand mb-3">
                Trusted by 10,000+ Users Worldwide
              </h3>
              <p className="text-gray-600">
                See what our customers say about our plagiarism and AI detection services.
              </p>
            </div>
            
            <div className="lg:w-2/3">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                      <Card className="border-0 shadow-none">
                        <CardContent className="p-4">
                          <blockquote className="relative">
                            <div className="text-lg text-gray-700 mb-4 min-h-[80px]">
                              "{testimonial.content}"
                            </div>
                            <footer className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <cite className="font-medium text-brand not-italic">
                                  {testimonial.author}
                                </cite>
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                              </div>
                            </footer>
                          </blockquote>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden sm:flex justify-end gap-2 mt-4">
                  <CarouselPrevious className="relative left-0 right-0 translate-x-0 translate-y-0" />
                  <CarouselNext className="relative left-0 right-0 translate-x-0 translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 mt-4">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
              <div>
                <span className="block text-3xl font-bold text-brand-blue">10,000+</span>
                <span className="text-sm text-gray-500">Checks Completed</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-brand-blue">99.8%</span>
                <span className="text-sm text-gray-500">Accuracy Rate</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-brand-blue">500+</span>
                <span className="text-sm text-gray-500">Universities Trust Us</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-brand-blue">24/7</span>
                <span className="text-sm text-gray-500">Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
