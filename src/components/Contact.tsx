import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MessageCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented with Supabase
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-muted-foreground">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how AI automation can revolutionize your workflows and scale your operations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Glassmorphism Form Container */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Form */}
            <div className="relative bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/90 font-medium">
                      Full Name *
                    </Label>
                    <div className="relative group/input">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-background/50 border-white/20 backdrop-blur-sm focus:bg-background/70 focus:border-primary/50 transition-all duration-300 group-hover/input:border-white/30"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/90 font-medium">
                      Email Address *
                    </Label>
                    <div className="relative group/input">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-background/50 border-white/20 backdrop-blur-sm focus:bg-background/70 focus:border-primary/50 transition-all duration-300 group-hover/input:border-white/30"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground/90 font-medium">
                    Company Name
                  </Label>
                  <div className="relative group/input">
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-background/50 border-white/20 backdrop-blur-sm focus:bg-background/70 focus:border-primary/50 transition-all duration-300 group-hover/input:border-white/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/90 font-medium">
                    Message *
                  </Label>
                  <div className="relative group/input">
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project and how we can help..."
                      rows={5}
                      className="bg-background/50 border-white/20 backdrop-blur-sm focus:bg-background/70 focus:border-primary/50 transition-all duration-300 group-hover/input:border-white/30 resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
                  >
                    <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Or email us directly at hello@agentxautomation.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};