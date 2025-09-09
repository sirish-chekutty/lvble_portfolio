import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "sumanthyadav@example.com",
      link: "mailto:sumanthyadav@example.com"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-secondary" />,
      title: "LinkedIn", 
      value: "linkedin.com/in/sumanthyadav",
      link: "https://www.linkedin.com/in/sumanthyadav"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Location",
      value: "Hyderabad, India",
      link: null
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-glow" />,
      title: "Reference",
      value: "Nithin Kumar - 7207758506",
      link: "tel:+917207758506"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next Salesforce project or explore collaboration opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="tech-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-surface border-card-border focus:border-primary"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-surface border-card-border focus:border-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-surface border-card-border focus:border-primary"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-surface border-card-border focus:border-primary"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-tech w-full"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              <div className="tech-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in hearing about new opportunities, 
                  interesting projects, or just connecting with fellow tech enthusiasts. 
                  Whether you're looking for Salesforce expertise or want to discuss 
                  the latest in automation and CI/CD, feel free to reach out!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-surface hover:bg-surface-hover transition-all duration-300">
                      {item.icon}
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="tech-card">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Current Status
                </h4>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                  <span className="text-foreground font-medium">Available for new opportunities</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Open to discussing Salesforce consulting, full-time positions, 
                  and exciting project collaborations.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="tech-card">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Quick Response
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">100%</div>
                    <div className="text-sm text-muted-foreground">Reply Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};