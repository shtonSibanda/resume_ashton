
import { Card, CardContent } from "@/components/ui/card";
import { Network, Shield, Server, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Network,
      title: "Network Architecture",
      description: "Expert in designing scalable and reliable network infrastructures"
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Certified in cybersecurity with focus on network protection"
    },
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Optimized network performance and server configurations"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading network operations teams and mentoring engineers"
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
            I'm a passionate IT professional with a strong background in network engineering, 
            infrastructure design, and team leadership. I thrive on solving complex network 
            challenges and building reliable systems that ensure seamless connectivity.
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
