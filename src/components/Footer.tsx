import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Agentx Automation
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with AI-driven automation solutions. 
              Transform your operations and scale with intelligent workflows.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>hello@agentxautomation.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Remote Team</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#integrations" className="block text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Agentx Automation. All rights reserved.
          </p>
        </div>
        
        {/* Large AgentX Text */}
        <div className="mt-16 mb-8 w-full overflow-hidden">
          <div className="font-black-ops select-none relative w-full">
            <div className="flex justify-center items-center w-full tracking-widest" style={{ fontSize: 'clamp(8rem, 25vw, 30rem)', letterSpacing: '0.1em' }}>
              {["A", "g", "e", "n", "t", "X"].map((letter, index) => (
                <span 
                  key={index}
                  className="relative inline-block bg-gradient-hero bg-clip-text text-transparent transition-opacity duration-300 hover:opacity-30 cursor-default flex-1 text-center"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};