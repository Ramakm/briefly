
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 0 : 0,
      period: "Free forever",
      description: "Perfect for individuals getting started",
      features: [
        "5 email accounts",
        "Daily digest",
        "Basic categorization",
        "7-day email history",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: isAnnual ? 19 : 29,
      period: isAnnual ? "/month (billed yearly)" : "/month",
      description: "For busy professionals who need more",
      features: [
        "Unlimited email accounts",
        "Real-time digest updates",
        "Advanced AI categorization",
        "30-day email history",
        "Priority support",
        "Custom digest timing",
        "Team sharing"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: isAnnual ? 49 : 69,
      period: isAnnual ? "/month (billed yearly)" : "/month",
      description: "For teams and organizations",
      features: [
        "Everything in Professional",
        "Unlimited email history",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support",
        "SSO integration",
        "Admin dashboard",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="section-padding">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Simple, <span className="gradient-text">transparent pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Choose the plan that fits your needs. All plans include a 14-day free trial.
              </p>
              
              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  Annual
                </span>
                {isAnnual && (
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Save 30%
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`glass-card card-hover relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/auth" className="w-full">
                      <Button 
                        className={`w-full ${plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                          : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                        }`}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                Need a custom solution? We'd love to help.
              </p>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
