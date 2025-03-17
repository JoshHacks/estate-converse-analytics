
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for individual agents or small teams",
      features: [
        "50 AI-handled calls per month",
        "Call recordings & transcripts",
        "Basic analytics dashboard",
        "Email notifications",
        "1 user account"
      ]
    },
    {
      name: "Professional",
      price: "$129",
      description: "Ideal for growing real estate teams",
      features: [
        "200 AI-handled calls per month",
        "Call recordings & transcripts",
        "Advanced analytics & insights",
        "CRM integration",
        "Priority support",
        "5 user accounts"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large agencies with high call volumes",
      features: [
        "Unlimited AI-handled calls",
        "Call recordings & transcripts",
        "Premium analytics & reporting",
        "Custom CRM integrations",
        "Dedicated account manager",
        "Unlimited user accounts",
        "White labeling options"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 ${
                plan.highlighted 
                  ? 'bg-white border-2 border-estate-500 shadow-xl relative' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-estate-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <Button 
                className={`w-full mb-8 ${
                  plan.highlighted 
                    ? 'bg-estate-500 hover:bg-estate-600 text-white' 
                    : 'bg-estate-50 text-estate-700 hover:bg-estate-100'
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="mr-2 text-estate-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
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

export default PricingSection;
