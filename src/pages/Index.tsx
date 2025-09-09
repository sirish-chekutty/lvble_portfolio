import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;