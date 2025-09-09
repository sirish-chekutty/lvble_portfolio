import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center animate-slide-up">
          {/* Animated greeting */}
          <div className="mb-6">
            <span className="text-primary font-mono text-lg">Hello, I'm</span>
          </div>
          
          {/* Main name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">CHEKUTTY</span>
            <br />
            <span className="text-foreground">SUMANTH YADAV</span>
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-mono">
            &lt; Systems Engineer /&gt;
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-muted-foreground">
            Salesforce Systems Engineer with <span className="text-primary font-semibold">3+ years</span> of experience 
            in managing enterprise environments, automating workflows, and optimizing platform performance. 
            Specialized in <span className="text-accent font-semibold">SFDX CLI</span> and 
            <span className="text-secondary font-semibold"> CI/CD pipelines</span>.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="btn-tech text-lg px-8 py-4"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/sumanthyadav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:sumanthyadav@example.com"
              className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/sumanthyadav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          {/* Floating tech elements */}
          <div className="absolute top-1/2 left-10 animate-float opacity-20">
            <div className="text-6xl font-mono text-primary">{"{"}</div>
          </div>
          <div className="absolute top-1/3 right-10 animate-float opacity-20" style={{ animationDelay: "2s" }}>
            <div className="text-6xl font-mono text-secondary">{"}"}</div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-float opacity-20" style={{ animationDelay: "4s" }}>
            <div className="text-4xl font-mono text-accent">&lt;/&gt;</div>
          </div>
        </div>
      </div>
    </section>
  );
};