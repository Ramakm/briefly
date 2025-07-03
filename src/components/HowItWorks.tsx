
const steps = [
  {
    number: "01",
    title: "Connect your inbox",
    description: "Link your email accounts in under 2 minutes. We support Gmail, Outlook, and all major providers.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
  },
  {
    number: "02", 
    title: "AI learns your patterns",
    description: "Our AI analyzes your email habits, priorities, and communication patterns to understand what matters to you.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
  },
  {
    number: "03",
    title: "Receive your digest",
    description: "Get a beautifully formatted daily summary with the most important emails, action items, and insights.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple setup, <br />
            <span className="gradient-text">powerful results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three steps to transform your email experience and reclaim hours of your day.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">{step.number}</span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-80 h-48 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
