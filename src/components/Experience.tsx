
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Network Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: [
        "Configure and maintain network infrastructure for small-to-medium businesses",
        "Assist with network security implementation and monitoring",
        "Troubleshoot connectivity issues and perform network diagnostics",
        "Document network configurations and create technical reports"
      ],
      technologies: ["Cisco IOS", "BGP", "VLAN", "Firewalls", "Network Monitoring"]
    },
    {
      title: "System Administrator",
      company: "DataFlow Systems",
      location: "Seattle, WA",
      period: "2022 - 2023",
      description: [
        "Managed Windows and Linux server environments for 100+ users",
        "Assisted with backup and disaster recovery procedures",
        "Maintained Active Directory and user access management",
        "Supported virtualization infrastructure using VMware"
      ],
      technologies: ["Windows Server", "Linux", "VMware", "Active Directory", "PowerShell", "Bash"]
    },
    {
      title: "Junior Network Technician",
      company: "Innovation Labs",
      location: "New York, NY",
      period: "2021 - 2022",
      description: [
        "Assisted with network infrastructure configuration and maintenance",
        "Supported network security policy implementation",
        "Performed basic network troubleshooting and diagnostics",
        "Collaborated with senior engineers on network projects"
      ],
      technologies: ["Juniper", "OSPF", "VPN", "Network Security", "VLAN", "Wireshark"]
    },
    {
      title: "IT Support Specialist",
      company: "TechStart Inc",
      location: "Austin, TX",
      period: "2020 - 2021",
      description: [
        "Provided technical support for 150+ employees across multiple departments",
        "Resolved hardware and software issues for desktop and mobile devices",
        "Maintained IT inventory and asset management systems",
        "Created documentation and training materials for end users"
      ],
      technologies: ["Help Desk", "Windows 10", "Office 365", "Mobile Device Management", "Ticketing Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My professional journey in IT infrastructure, network management, and technical support
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-slate-300">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-2 text-xs">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                    >
                      {tech}
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

export default Experience;
