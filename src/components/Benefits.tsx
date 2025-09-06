import { Check, Clock, DollarSign, TrendingUp, Trophy } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      title: "Save Time & Cut Costs",
      description: "Automate repetitive tasks and reduce operational costs by up to 70%",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Eliminate Manual Work",
      description: "Remove human error and streamline processes with intelligent automation",
      icon: <Check className="w-6 h-6" />
    },
    {
      title: "Scale Faster with AI Agents",
      description: "Deploy AI agents that work 24/7 to handle customer service and operations",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Stay Ahead of Competitors",
      description: "Leverage cutting-edge AI technology to maintain competitive advantage",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why You Need <span className="bg-gradient-hero bg-clip-text text-transparent">Automation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations and unlock unprecedented growth with our AI automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="flex items-start space-x-4 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <DollarSign className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-medium">Average ROI: 300% within 6 months</span>
          </div>
        </div>
      </div>
    </section>
  );
};