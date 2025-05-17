
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end Development",
      skills: [
        { name: "JavaScript", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "React", level: 5 },
        { name: "HTML/CSS", level: 5 },
        { name: "Next.js", level: 4 },
      ],
    },
    {
      title: "Back-end Development",
      skills: [
        { name: "Node.js", level: 4 },
        { name: "Express", level: 4 },
        { name: "Python", level: 3 },
        { name: "MongoDB", level: 4 },
        { name: "SQL", level: 3 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Git", level: 5 },
        { name: "DevOps", level: 3 },
        { name: "UI/UX Design", level: 4 },
        { name: "Agile/Scrum", level: 5 },
        { name: "Testing", level: 4 },
      ],
    },
  ];

  const RatingStars = ({ level }: { level: number }) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < level ? "text-portfolio-teal fill-portfolio-teal" : "text-portfolio-slate"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 bg-portfolio-lightNavy/30">
      <div className="container">
        <h2 className="section-heading">
          <span className="text-portfolio-teal font-mono text-xl mr-2">02.</span> Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-portfolio-lightNavy border-portfolio-slate/20 overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
              <div className="bg-portfolio-teal/10 border-b border-portfolio-teal/20 p-4">
                <h3 className="text-xl font-semibold text-portfolio-teal">
                  {category.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <RatingStars level={skill.level} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
