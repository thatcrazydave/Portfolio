
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "TechCorp",
      duration: "2021 - Present",
      description: [
        "Lead a team of 5 developers building a next-generation SaaS platform using React, Node.js, and GraphQL",
        "Improved application performance by 40% through code optimization and implementing efficient data structures",
        "Established coding standards, CI/CD pipelines, and testing protocols that reduced bugs in production by 25%",
        "Mentored junior developers through pair programming sessions and code reviews"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "InnovateTech",
      duration: "2018 - 2021",
      description: [
        "Developed and maintained multiple client-facing web applications using React and Express.js",
        "Implemented responsive UI components and interactive data visualizations",
        "Collaborated with UX designers to implement intuitive user interfaces",
        "Participated in daily standups and sprint planning in an Agile environment"
      ]
    },
    {
      role: "Frontend Developer",
      company: "WebSolutions Inc",
      duration: "2016 - 2018",
      description: [
        "Created responsive layouts and interactive UI components using HTML, CSS, and JavaScript",
        "Worked with designers to translate mockups into functional web pages",
        "Optimized sites for maximum speed and scalability across devices",
        "Maintained and updated existing client websites"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono text-xl mr-2">03.</span> Work Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-portfolio-slate/20 transform md:-translate-x-px"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-in opacity-0`} style={{ animationDelay: `${index * 100}ms` }}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-7 h-7 bg-portfolio-lightNavy border-2 border-portfolio-teal rounded-full transform -translate-x-3 md:-translate-x-3.5 flex items-center justify-center">
                  <Briefcase size={14} className="text-portfolio-teal" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-10 md:ml-0`}>
                  <div className="bg-portfolio-lightNavy p-6 rounded-md border border-portfolio-slate/10 hover:border-portfolio-teal/30 transition-all">
                    <div className="text-portfolio-teal font-mono mb-1">{experience.duration}</div>
                    <h3 className="text-xl font-semibold text-portfolio-lightest mb-1">{experience.role}</h3>
                    <div className="text-portfolio-lightSlate mb-4">{experience.company}</div>
                    <ul className={`space-y-2 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-portfolio-teal mr-2 mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for timeline alignment */}
                <div className={`hidden md:block w-1/2`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
