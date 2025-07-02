
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  FileText, 
  Users, 
  LayoutDashboard, 
  MessageSquare, 
  Star 
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Daily Digest",
    description: "Get a personalized summary of your most important emails, delivered every morning at your preferred time."
  },
  {
    icon: FileText,
    title: "Smart Categorization",
    description: "AI automatically organizes your emails by importance, urgency, and topic so you never miss what matters."
  },
  {
    icon: LayoutDashboard,
    title: "Clean Dashboard",
    description: "Beautiful, distraction-free interface that shows you exactly what you need to know at a glance."
  },
  {
    icon: MessageSquare,
    title: "Context Preservation",
    description: "Keep full context with smart threading and conversation summaries that save you time."
  },
  {
    icon: Users,
    title: "Team Insights",
    description: "Share curated digests with your team and stay aligned on important communications."
  },
  {
    icon: Star,
    title: "Priority Detection",
    description: "Advanced AI learns your patterns to surface the emails that truly need your attention."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to <br />
            <span className="gradient-text">reclaim your focus</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for professionals who refuse to let email control their day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-hover glass-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
