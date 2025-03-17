
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, MessageSquare, ChartLine, FileAudio, User } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <PhoneCall className="h-12 w-12 text-estate-500" />,
      title: "Smart Call Capture",
      description: "Never miss a potential client again. EstateTalk answers overflow and after-hours calls, ensuring every lead is captured."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-estate-500" />,
      title: "AI Conversation",
      description: "Our AI engages callers naturally, asking the right questions to qualify leads and gather essential information for follow-ups."
    },
    {
      icon: <ChartLine className="h-12 w-12 text-estate-500" />,
      title: "Real-Time Analytics",
      description: "Get instant insights into call metrics, lead quality, and conversation highlights through our intuitive dashboard."
    },
    {
      icon: <FileAudio className="h-12 w-12 text-estate-500" />,
      title: "Call Recordings & Transcripts",
      description: "Access full call recordings and AI-generated transcripts for every conversation, allowing you to review details at any time."
    },
    {
      icon: <User className="h-12 w-12 text-estate-500" />,
      title: "Lead Qualification",
      description: "EstateTalk identifies high-value prospects and gathers their requirements, helping you prioritize your follow-ups."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-estate-500">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      ),
      title: "CRM Integration",
      description: "Automatically sync lead information with popular CRM systems, creating detailed records with no manual data entry."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Real Estate Professionals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EstateTalk combines cutting-edge AI with real estate expertise to create a powerful tool that captures leads and delivers insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
