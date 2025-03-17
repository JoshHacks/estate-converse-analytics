
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Never Miss a Lead",
      description: "Capture every potential client, even during your busiest times or after hours.",
      checks: [
        "24/7 call answering capability",
        "Handles overflow calls during peak times",
        "Covers after-hours inquiries automatically"
      ]
    },
    {
      title: "Save Time and Resources",
      description: "Let AI handle the initial client interactions so you can focus on closing deals.",
      checks: [
        "No need for additional reception staff",
        "Eliminate manual call screening",
        "Focus your time on qualified prospects"
      ]
    },
    {
      title: "Increase Conversion Rates",
      description: "Convert more callers into clients with intelligent lead qualification.",
      checks: [
        "Engage leads instantly, reducing drop-offs",
        "Ask the right questions to qualify interest",
        "Prioritize follow-ups based on lead quality"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Real Estate Agents Choose EstateTalk</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform delivers tangible benefits that directly impact your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-3 text-estate-800">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.checks.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 bg-estate-100 rounded-full p-1">
                      <Check size={16} className="text-estate-600" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
