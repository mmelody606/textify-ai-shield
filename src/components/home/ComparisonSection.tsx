
import { Check, X } from "lucide-react";

const comparisonData = {
  categories: ["Features", "Accuracy", "Speed", "Security", "Support", "Pricing", "Languages", "Report Detail"],
  services: [
    {
      name: "TextifyShield",
      values: [
        "Plagiarism & AI Detection",
        "99.8% accuracy rate",
        "Results in seconds",
        "End-to-end encryption",
        "24/7 Live support",
        "Pay-per-page, no subscription",
        "8 languages supported",
        "Comprehensive with sources"
      ],
      isPrimary: true,
    },
    {
      name: "Competitor A",
      values: [
        "Plagiarism only",
        "95% accuracy rate",
        "3-5 minutes",
        "Basic security",
        "Email only",
        "Monthly subscription",
        "2 languages",
        "Basic report"
      ],
      isPrimary: false,
    },
    {
      name: "Competitor B",
      values: [
        "AI detection only",
        "90% accuracy rate",
        "Up to 10 minutes",
        "Standard security",
        "Business hours only",
        "High fixed price",
        "English only",
        "Limited detail"
      ],
      isPrimary: false,
    }
  ]
};

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
            Why We're Better
          </h2>
          <p className="text-lg text-gray-600">
            See how TextifyShield compares to other plagiarism and AI detection services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-50 text-left text-sm font-medium text-gray-500 uppercase tracking-wider rounded-tl-xl">
                  Comparison
                </th>
                {comparisonData.services.map((service, index) => (
                  <th 
                    key={index} 
                    className={`py-4 px-6 text-center text-sm font-semibold uppercase tracking-wider
                      ${service.isPrimary 
                        ? 'bg-brand-blue text-white' 
                        : 'bg-gray-50 text-gray-500'
                      }
                      ${index === comparisonData.services.length - 1 ? 'rounded-tr-xl' : ''}
                    `}
                  >
                    {service.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.categories.map((category, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-4 px-6 text-sm font-medium text-gray-700">
                    {category}
                  </td>
                  {comparisonData.services.map((service, colIndex) => (
                    <td 
                      key={colIndex} 
                      className={`py-4 px-6 text-center
                        ${service.isPrimary ? 'text-brand-blue font-medium' : 'text-gray-500'}`}
                    >
                      {service.values[rowIndex].toLowerCase() === 'yes' ? (
                        <Check className={`h-5 w-5 mx-auto ${service.isPrimary ? 'text-brand-green' : 'text-gray-400'}`} />
                      ) : service.values[rowIndex].toLowerCase() === 'no' ? (
                        <X className="h-5 w-5 mx-auto text-red-400" />
                      ) : (
                        <span className="text-sm">{service.values[rowIndex]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
