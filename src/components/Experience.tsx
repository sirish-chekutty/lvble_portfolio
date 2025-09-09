import { Building, Calendar, MapPin, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const achievements = [
    "Managed Salesforce environments across Development, UAT, and Production instances",
    "Implemented CI/CD pipelines using Jenkins and GitHub Actions for automated deployments",
    "Maintained metadata integrity using SFDX CLI and Git-based version control",
    "Developed automated workflows with Flow Builder, streamlining approval processes",
    "Configured REST/SOAP API integrations with middleware tools like Zapier and Mulesoft",
    "Monitored platform performance through API limits and debug logs analysis",
    "Managed user provisioning, role hierarchies, and security policies organization-wide"
  ];

  const technologies = [
    "Salesforce Platform", "SFDX CLI", "Git", "Jenkins", "GitHub Actions",
    "Flow Builder", "Apex", "Lightning", "REST/SOAP APIs", "Zapier", "Mulesoft"
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building robust Salesforce solutions and driving digital transformation 
            in enterprise environments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Role */}
          <div className="tech-card mb-8 animate-slide-up">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Systems Engineer
                </h3>
                <div className="flex items-center text-primary mb-2">
                  <Building className="h-5 w-5 mr-2" />
                  <span className="text-lg font-semibold">Tata Consultancy Services</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>March 2022 - Present</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
              
              <div className="mt-4 lg:mt-0">
                <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                  Current Position
                </Badge>
              </div>
            </div>

            {/* Project Section */}
            <div className="mb-6 p-4 bg-surface rounded-lg">
              <h4 className="text-lg font-semibold text-accent mb-2">
                Key Project: Sunrise MI
              </h4>
              <p className="text-muted-foreground mb-2">
                <span className="text-secondary font-semibold">Client:</span> S&P Global
              </p>
              <p className="text-foreground">
                Led Salesforce platform management and automation initiatives for a major 
                financial services client, focusing on environment management and CI/CD implementation.
              </p>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Key Achievements & Responsibilities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 p-3 rounded-lg bg-surface-hover transition-all duration-300 hover:bg-muted"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Recognition */}
          <div className="tech-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-xl font-bold text-foreground">Recognition</h3>
            </div>
            <p className="text-muted-foreground">
              <span className="text-accent font-semibold">Recognized by the OTC team</span> for 
              exceptional contributions and performance in Salesforce platform optimization and 
              team collaboration initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};