
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-estate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Never Miss a Lead Again?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join hundreds of real estate professionals who've increased their business with EstateTalk.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-white text-estate-800 hover:bg-gray-100 px-8 py-6 text-lg">
            Start Free Trial
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-estate-700 px-8 py-6 text-lg">
            Book a Demo
          </Button>
        </div>
        <p className="mt-6 text-sm opacity-80">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
