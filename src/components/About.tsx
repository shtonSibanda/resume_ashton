
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Cloud, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies and frameworks"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS and Azure certified with scalable solutions"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimized data structures and query performance"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams and mentoring developers"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate IT professional with a strong background in software engineering, 
            system architecture, and team leadership. I thrive on solving complex problems 
            and building scalable solutions that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
