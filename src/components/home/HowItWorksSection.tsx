
import { Upload, Search, FileText, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Content",
    description: "Simply paste your text or upload your document for analysis.",
    color: "bg-blue-100 text-brand-blue",
    number: "01",
  },
  {
    icon: Search,
    title: "Analyze",
    description: "Our advanced algorithms scan your content for plagiarism or AI patterns.",
    color: "bg-green-100 text-brand-green",
    number: "02",
  },
  {
    icon: FileText,
    title: "Get Detailed Report",
    description: "Receive a comprehensive report with highlighted issues and originality score.",
    color: "bg-purple-100 text-purple-600",
    number: "03",
  },
  {
    icon: Download,
    title: "Download Results",
    description: "Save your report in PDF format for future reference.",
    color: "bg-orange-100 text-orange-600",
    number: "04",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Get results in four simple steps - it's quick, easy, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-100 z-0"></div>
              )}
              
              <div className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow z-10">
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                  <span className="text-sm font-bold text-brand">{step.number}</span>
                </div>
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
