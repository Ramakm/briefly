
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 to-blue-500/5">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to focus on what <br />
            <span className="gradient-text">actually matters?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've already reclaimed their time and focus with Briefly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Start your free trial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-border hover:bg-muted/50 transition-all duration-300"
            >
              Schedule demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required • Cancel anytime • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
