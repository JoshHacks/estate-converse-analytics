
import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare, ChartLine } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="lg:w-1/2 lg:pr-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Never Miss a <span className="text-estate-500">Lead</span> Again
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              EstateTalk captures missed calls, engages potential clients, and provides 
              real-time analytics to help real estate agents close more deals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-estate-500 hover:bg-estate-600 text-white px-8 py-6 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-estate-500 text-estate-500 hover:bg-estate-50 px-8 py-6 text-lg">
                Book a Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center text-gray-500">
              <span className="text-xs sm:text-sm">🔒 No credit card required • 14-day free trial</span>
            </div>
          </div>
          
          {/* Right content - Feature cards */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 animate-float" style={{ animationDelay: "0.3s" }}>
                <div className="w-12 h-12 bg-estate-100 rounded-full flex items-center justify-center mb-4">
                  <PhoneCall className="text-estate-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Capture</h3>
                <p className="text-gray-600">Never miss an opportunity with automated call handling</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-12 h-12 bg-estate-100 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-estate-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Interaction</h3>
                <p className="text-gray-600">Natural conversations that qualify leads effectively</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 animate-float" style={{ animationDelay: "0.7s" }}>
                <div className="w-12 h-12 bg-estate-100 rounded-full flex items-center justify-center mb-4">
                  <ChartLine className="text-estate-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">Instant insights from every conversation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 animate-float" style={{ animationDelay: "0.9s" }}>
                <div className="w-12 h-12 bg-estate-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-estate-600" width={24} height={24}>
                    <path d="M18 8L10 16L6 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">CRM Integration</h3>
                <p className="text-gray-600">Seamless sync with your existing systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
