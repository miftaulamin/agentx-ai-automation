import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";

export const About = () => {
  const team = [
    {
      name: "Torikul Islam",
      role: "CEO",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Fahim Ahmed", 
      role: "Co-Founder",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "Miftaul Amin",
      role: "Co-Founder",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Our Agency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a dedicated 3-member team specializing in cutting-edge AI automation solutions. 
            Our mission is to transform businesses through intelligent automation and AI-powered workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={member.name} className="bg-card border-border shadow-card-dark animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  {member.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we bring years of experience in AI development, business automation, 
            and workflow optimization to help your business reach new heights.
          </p>
        </div>
      </div>
    </section>
  );
};