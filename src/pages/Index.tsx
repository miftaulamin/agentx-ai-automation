import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Integrations } from "@/components/Integrations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Integrations />
      <Footer />
    </div>
  );
};

export default Index;