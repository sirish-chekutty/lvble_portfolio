import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Code, 
  Database, 
  GitBranch, 
  Settings, 
  Users, 
  FileText, 
  Zap,
  Monitor,
  Workflow
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Salesforce Platform",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: [
        "Salesforce Platform Admin",
        "Custom Objects & Fields",
        "Validation Rules",
        "Record Types & Page Layouts",
        "User Provisioning",
        "Permission Sets & Profiles"
      ]
    },
    {
      title: "Development & Automation",
      icon: <Code className="h-6 w-6 text-secondary" />,
      skills: [
        "SFDX CLI",
        "Apex Development",
        "Lightning Components",
        "Flow Builder",
        "Record-Triggered Flows",
        "Scheduled Flows"
      ]
    },
    {
      title: "DevOps & Integration",
      icon: <GitBranch className="h-6 w-6 text-accent" />,
      skills: [
        "Git Version Control",
        "Jenkins CI/CD",
        "GitHub Actions",
        "Change Sets",
        "Unlocked Packages",
        "REST/SOAP APIs"
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="h-6 w-6 text-primary-glow" />,
      skills: [
        "Salesforce Reports",
        "Dashboards",
        "Event Monitoring",
        "Debug Logs",
        "Data Management",
        "Platform Analytics"
      ]
    },
    {
      title: "Project Management",
      icon: <Users className="h-6 w-6 text-secondary-glow" />,
      skills: [
        "Agile/Scrum",
        "Stakeholder Communication",
        "Team Collaboration",
        "Technical Documentation",
        "Problem Solving",
        "Platform Governance"
      ]
    },
    {
      title: "Integration & Middleware",
      icon: <Workflow className="h-6 w-6 text-accent-glow" />,
      skills: [
        "Named Credentials",
        "Zapier Integration",
        "Mulesoft",
        "API Management",
        "Middleware Tools",
        "System Integration"
      ]
    }
  ];

  const proficiencyLevels = [
    {
      category: "Salesforce Administration",
      level: 95,
      color: "bg-primary"
    },
    {
      category: "SFDX & Development Tools",
      level: 90,
      color: "bg-secondary"
    },
    {
      category: "CI/CD & DevOps",
      level: 85,
      color: "bg-accent"
    },
    {
      category: "API Integration",
      level: 88,
      color: "bg-primary-glow"
    },
    {
      category: "Process Automation",
      level: 92,
      color: "bg-secondary-glow"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in Salesforce ecosystem, development tools, 
            and enterprise integration solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="tech-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-foreground ml-3">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary" 
                    className="mr-2 mb-2 bg-surface text-foreground hover:bg-muted transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {proficiencyLevels.map((item, index) => (
              <div 
                key={index} 
                className="tech-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">{item.category}</span>
                  <span className="text-primary font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${item.color} transition-all duration-1000 animate-pulse-glow`}
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.2 + 1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="tech-card text-center animate-slide-up" style={{ animationDelay: "1.2s" }}>
            <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Platform Monitoring
            </h4>
            <p className="text-muted-foreground text-sm">
              Expert in API limits monitoring, debug logs analysis, and performance optimization
            </p>
          </div>

          <div className="tech-card text-center animate-slide-up" style={{ animationDelay: "1.4s" }}>
            <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Documentation
            </h4>
            <p className="text-muted-foreground text-sm">
              Comprehensive technical documentation and system architecture planning
            </p>
          </div>

          <div className="tech-card text-center animate-slide-up" style={{ animationDelay: "1.6s" }}>
            <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Optimization
            </h4>
            <p className="text-muted-foreground text-sm">
              Performance tuning and workflow optimization for enterprise scalability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};