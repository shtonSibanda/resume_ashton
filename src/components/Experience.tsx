
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: " Junior Network Engineer",
      company: "Ashtech Systems",
      location: "Harare, Zimbabwe",
      period: "2025 - Present",
      description: [
        "Configure and maintain network infrastructure for small-to-medium businesses",
        "Assist with network security implementation and monitoring",
        "Troubleshoot connectivity issues and perform network diagnostics",
        "Document network configurations and create technical reports"
      ],
      technologies: ["Cisco IOS", "BGP", "VLAN", "Firewalls", "Network Monitoring"]
    },
    {
      title: "Intern System Administrator",
      company: "Municipality of Beitbridge (MOB)",
      location: "Beitbridge, Zimbabwe",
      period: "2023 - 2024",
      description: [
        "Managed Windows and Linux server environments for 100+ users",
        "Assisted with backup and disaster recovery procedures",
        "Maintained Active Directory and user access management",
        "Supported virtualization infrastructure using VMware"
      ],
      technologies: ["Windows Server", "Linux", "VMware", "Active Directory", "PowerShell", "Bash"]
    },
    {
      title: " Network Technician",
      company: "Heinsky Investments(Pvt) Ltd",
      location: "Beitbridge, Zimbabwe",
      period: "2023 - 2025",
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
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in IT infrastructure, network management, and technical support
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                    <p className="text-xl text-rose-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-gray-700">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-2 text-xs">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
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
