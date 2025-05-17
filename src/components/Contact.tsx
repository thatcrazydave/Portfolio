
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container max-w-4xl">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono text-xl mr-2">05.</span> Get In Touch
        </h2>
        
        <div className="text-center mb-12 animate-fade-in opacity-0">
          <p className="text-lg mb-6">
            I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-portfolio-lightNavy rounded-lg p-6 border border-portfolio-slate/10 animate-fade-in opacity-0" style={{ animationDelay: "100ms" }}>
            <h3 className="text-xl font-semibold text-portfolio-lightest mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-portfolio-navy border-portfolio-slate/20 focus:border-portfolio-teal"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-portfolio-navy border-portfolio-slate/20 focus:border-portfolio-teal"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-portfolio-navy border-portfolio-slate/20 focus:border-portfolio-teal resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-semibold text-portfolio-lightest mb-6">Contact Details</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <Mail size={20} className="text-portfolio-teal mr-3" />
                  <span className="font-medium text-portfolio-lightest">Email</span>
                </div>
                <a 
                  href="mailto:johndoe@example.com" 
                  className="text-portfolio-lightSlate hover:text-portfolio-teal"
                >
                  johndoe@example.com
                </a>
              </div>
              
              <div>
                <div className="font-medium text-portfolio-lightest mb-4">Social Links</div>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-portfolio-navy rounded-full hover:text-portfolio-teal hover:bg-portfolio-teal/10 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-portfolio-navy rounded-full hover:text-portfolio-teal hover:bg-portfolio-teal/10 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="font-medium text-portfolio-lightest mb-4">Location</h4>
                <p>San Francisco, California</p>
                <p className="mt-2 text-sm text-portfolio-slate">Available for remote work worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
