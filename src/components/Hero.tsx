
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-orange-50/30 via-white to-yellow-50/30">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your inbox, <br />
            <span className="gradient-text">finally focused</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform inbox chaos into focused insights. AI-powered daily digest for busy professionals who value their time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                Start free trial
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-muted-foreground hover:text-foreground px-8 py-3 text-lg transition-colors duration-300"
            >
              Watch demo
            </Button>
          </div>

          <div className="text-sm text-muted-foreground mb-16">
            No credit card required • 14-day free trial • Setup in 2 minutes
          </div>
        </div>

        <div className="animate-slide-in">
          <div className="relative mx-auto max-w-4xl">
            <div className="glass-card rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-orange-50/50 to-yellow-50/50 rounded-xl p-6 min-h-[300px] flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop" 
                  alt="Email dashboard interface showing organized inbox"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-yellow-500/20 rounded-full blur-sm"></div>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
