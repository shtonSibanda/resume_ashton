
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "SASS", "JavaScript ES6+"]
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Python", "Java", "C#", ".NET Core", "Express.js", "Django", "Spring Boot"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "SQLite", "DynamoDB"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "Terraform", "Nginx"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "Agile/Scrum", "Microservices", "REST APIs", "GraphQL", "Testing", "Code Review"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 text-blue-300 border-blue-500/30 hover:from-blue-600/30 hover:to-teal-600/30 transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
