import { Card, CardContent } from "@/components/ui/card";
import { Bot, Workflow, Zap, Settings } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "AI Automation Solutions",
      description: "Custom AI-powered automation systems tailored to your business needs, reducing manual work and increasing efficiency.",
      icon: <Bot className="w-8 h-8" />
    },
    {
      title: "Custom AI Agents for Business Operations",
      description: "Intelligent agents that handle customer service, data processing, and business operations automatically.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Workflow Automation with n8n",
      description: "Seamless workflow automation connecting your tools and systems for maximum productivity and efficiency.",
      icon: <Workflow className="w-8 h-8" />
    },
    {
      title: "Business Process Optimization",
      description: "Analyze and optimize your business processes with AI-driven insights and automated solutions.",
      icon: <Settings className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What <span className="bg-gradient-hero bg-clip-text text-transparent">We Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI automation services designed to transform your business operations
            and drive unprecedented growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card border-border shadow-card-dark hover:shadow-neon transition-all duration-300 group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};