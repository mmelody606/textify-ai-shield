
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is your plagiarism detection?",
    answer: "Our plagiarism detection system boasts a 99.8% accuracy rate. We use advanced algorithms to scan billions of web pages, academic databases, and previously submitted papers to identify matching content and provide detailed similarity reports."
  },
  {
    question: "How does the AI content detection work?",
    answer: "Our AI detection technology analyzes linguistic patterns, syntax structures, and semantic consistency that are typically present in AI-generated content. The system has been trained on millions of samples to identify subtle indicators that distinguish between human and AI writing with high precision."
  },
  {
    question: "Is my content secure when I upload it?",
    answer: "Absolutely. We take security seriously. Your uploaded content is encrypted during transit and processing. We do not store your text after the check is complete, and it's never shared with third parties. Your intellectual property remains 100% yours."
  },
  {
    question: "How long does it take to get results?",
    answer: "Results are typically delivered within seconds for standard documents. For larger documents (50+ pages), it may take up to a minute to complete the comprehensive analysis. Our system is optimized for speed without compromising accuracy."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, UPI, and digital wallets including PayPal, Google Pay, and PhonePe. All transactions are secure and processed through industry-standard payment gateways with encryption."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes, we offer a money-back guarantee. If our system fails to provide accurate results or if you encounter any technical issues that prevent the service from working properly, you can request a refund within 7 days of your purchase."
  },
  {
    question: "Can I check content in languages other than English?",
    answer: "Currently, we support English, Spanish, French, German, Italian, Portuguese, Dutch, and Russian. We're continuously expanding our language capabilities to serve a global audience better."
  },
  {
    question: "Do you offer bulk checking for educational institutions?",
    answer: "Yes, we offer special packages for educational institutions with bulk checking requirements. Please contact our support team for custom pricing and integration options for your institution's needs."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to commonly asked questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium py-4 text-brand hover:text-brand-blue hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="max-w-lg mx-auto mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Didn't find what you're looking for?
          </p>
          <div className="inline-flex items-center text-brand-blue hover:text-blue-700 font-medium">
            <a href="/contact" className="flex items-center">
              Contact our support team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
