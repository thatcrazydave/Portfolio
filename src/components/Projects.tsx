import { Github, ExternalLink, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, user authentication, and payment processing. Built with React, Node.js, MongoDB, and Stripe API.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubLink: "https://github.com/thatcrazydave",
      liveLink: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps teams organize their work with kanban boards, task assignment, due dates, and progress tracking. Built with TypeScript, Next.js, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "TailwindCSS"],
      githubLink: "https://github.com/thatcrazydave",
      liveLink: "#",
    },
  ];

  const otherProjects = [
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data using the OpenWeather API.",
      tags: ["JavaScript", "Html", "API", "CSS"],
      githubLink: "https://github.com/thatcrazydave",
      liveLink: "https://deweather.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills (this website).",
      tags: ["TypeScript", "React", "TailwindCSS"],
      githubLink: "https://github.com/thatcrazydave",
      liveLink: "#",
    },
    {
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support and user authentication.",
      tags: ["Node.js", "Express", "MongoDB", "React"],
      githubLink: "https://github.com/thatcrazydave",
      liveLink: "#",
    },
    {
      title: "Recipe Finder",
      description: "An application that helps users find recipes based on ingredients they have.",
      tags: ["JavaScript", "React", "API", "CSS"],
      githubLink: "https://github.com/thatcrazydave",
      liveLink: "#",
    },
    {
      title: "Budget Tracker",
      description: "A personal finance app that helps users track income, expenses, and savings goals.",
      tags: ["TypeScript", "React", "Chart.js", "Firebase"],
      githubLink: "https://github.com/thatcrazydave",
      liveLink: "#",
    },
    {
      title: "Movie Database",
      description: "A web application that displays information about movies using the TMDB API.",
      tags: ["JavaScript", "React", "API", "TailwindCSS"],
      githubLink: "https://github.com/thatcrazydave",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-portfolio-lightNavy/30">
      <div className="container">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono text-xl mr-2">04.</span> Projects
        </h2>

        {/* Featured Projects */}
        <div className="space-y-32 mb-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center animate-fade-in opacity-0`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className={`w-full lg:w-3/5 mb-6 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-portfolio-teal rounded-md blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <div className="relative overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-portfolio-navy/80 group-hover:bg-portfolio-navy/50 transition-all duration-300"></div>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full object-cover aspect-video"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className={`w-full lg:w-2/5 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                <p className="font-mono text-portfolio-teal mb-1">Featured Project</p>
                <h3 className="text-2xl font-semibold text-portfolio-lightest mb-4">{project.title}</h3>
                
                <div className="bg-portfolio-lightNavy p-5 rounded-md shadow-lg mb-4">
                  <p>{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-2 text-sm mb-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className="font-mono text-portfolio-lightSlate">
                      {tag}
                    </li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github className="text-portfolio-lightSlate hover:text-portfolio-teal" />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink className="text-portfolio-lightSlate hover:text-portfolio-teal" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Noteworthy Projects */}
        <div>
          <h3 className="text-xl text-center font-semibold text-portfolio-lightest mb-8">
            Other Noteworthy Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-portfolio-lightNavy border-portfolio-slate/10 hover:border-portfolio-teal/50 hover:-translate-y-2 transition-all duration-300 animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <Folder className="text-portfolio-teal" size={30} />
                    <div className="flex gap-3">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github className="text-portfolio-lightSlate hover:text-portfolio-teal" size={18} />
                      </a>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink className="text-portfolio-lightSlate hover:text-portfolio-teal" size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-portfolio-lightest mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  
                  <ul className="flex flex-wrap gap-2 text-xs mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <li key={tagIndex} className="font-mono text-portfolio-lightSlate">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="btn-primary">
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
