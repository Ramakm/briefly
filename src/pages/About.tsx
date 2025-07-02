
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Focus First",
      description: "We believe your attention is your most valuable asset. Everything we build is designed to help you focus on what truly matters."
    },
    {
      icon: Users,
      title: "Human-Centered AI",
      description: "Our AI doesn't replace human judgment—it enhances it. We create tools that amplify your natural productivity patterns."
    },
    {
      icon: Lightbulb,
      title: "Simplicity",
      description: "The best solutions are elegant and simple. We strip away complexity to deliver tools that just work."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="section-padding">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  About <span className="gradient-text">Briefly</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We're on a mission to help professionals reclaim their time and focus in an increasingly noisy digital world.
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-16">
                <div className="glass-card rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Briefly was born from a simple observation: the average professional spends 2.5 hours a day managing email, yet most of that time is spent on messages that don't truly matter. We realized that the problem wasn't just about email management—it was about attention management.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Founded in 2024 by a team of engineers and productivity experts who experienced this pain firsthand, Briefly represents a new approach to information consumption. Instead of giving you more tools to process more information faster, we help you process less information more effectively.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we're proud to help thousands of professionals across the globe reclaim hours of their day and focus on the work that truly moves the needle.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                    <Card key={index} className="glass-card card-hover">
                      <CardContent className="p-8 text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                          <value.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We're always looking for talented individuals who share our passion for helping people work better. 
                  If you're interested in joining our team, we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:careers@briefly.com" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    View Open Positions
                  </a>
                  <a 
                    href="mailto:hello@briefly.com" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-all duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
