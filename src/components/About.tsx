import { Code, Database, Workflow, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Salesforce Development",
      description: "Expert in SFDX CLI, Apex, and Lightning components with focus on enterprise solutions."
    },
    {
      icon: <Database className="h-8 w-8 text-secondary" />,
      title: "Platform Management",
      description: "Managing Dev, UAT, and Production environments with metadata integrity and CI/CD automation."
    },
    {
      icon: <Workflow className="h-8 w-8 text-accent" />,
      title: "Process Automation",
      description: "Creating automated workflows using Flow Builder and Record-Triggered Flows for efficiency."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-glow" />,
      title: "Team Collaboration",
      description: "Strong experience in Agile methodologies and cross-functional team coordination."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Systems Engineer dedicated to optimizing Salesforce platforms and 
            delivering innovative solutions that drive business growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="tech-card text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              My Journey in Technology
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                With over <span className="text-primary font-semibold">3 years</span> of experience at 
                <span className="text-accent font-semibold"> Tata Consultancy Services</span>, I specialize in 
                Salesforce system engineering, focusing on enterprise-level platform optimization and automation.
              </p>
              
              <p className="leading-relaxed">
                My expertise spans across managing complex Salesforce environments for 
                <span className="text-secondary font-semibold"> S&P Global</span>, where I've successfully 
                implemented CI/CD pipelines, maintained metadata integrity, and developed automated workflows 
                that enhanced operational efficiency by significant margins.
              </p>
              
              <p className="leading-relaxed">
                Beyond my professional work, I'm passionate about entrepreneurship, running a small hardware business 
                that allows me to explore customer service and hands-on problem-solving. I also maintain an active 
                lifestyle through cricket and fitness, which helps me bring discipline and strategic thinking to my work.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="tech-card">
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium">Hyderabad, India</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="text-primary font-semibold">3+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Role</span>
                  <span className="text-foreground font-medium">Systems Engineer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Education</span>
                  <span className="text-foreground font-medium">B.Tech IT, JNTU</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="text-foreground font-medium">English, Telugu, Hindi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};