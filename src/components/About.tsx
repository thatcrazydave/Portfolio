
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono text-xl mr-2">01.</span> About Me
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-3/5 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
            <p className="mb-4">
              Hello! I'm John, a software engineer passionate about creating software that makes a difference. My journey in coding started back in 2015 when I decided to try customizing a WordPress theme — turns out hacking together a custom theme taught me a lot about HTML & CSS!
            </p>
            <p className="mb-4">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a large corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p className="mb-4">
              I am currently pursuing a Master's degree in Computer Science while working as a Full-Stack Developer at TechCorp, where I'm applying my knowledge to solve real-world problems with elegant solutions.
            </p>
            <p className="mb-4">
              When I'm not at the computer, I'm usually rock climbing, hiking, or exploring new coffee shops in the city.
            </p>
          </div>
          
          <div className="lg:w-2/5 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-portfolio-teal rounded-md blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative">
                <div className="bg-portfolio-lightNavy p-2 rounded-md">
                  <div className="bg-portfolio-navy border-2 border-portfolio-teal rounded-md overflow-hidden aspect-square w-full max-w-xs mx-auto">
                    <div className="h-full w-full flex items-center justify-center text-portfolio-teal">
                      <User size={64} />
                      <span className="sr-only">Profile Photo</span>
                    </div>
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

export default About;
