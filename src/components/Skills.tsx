
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Network Technologies",
      skills: ["Cisco IOS", "Juniper JunOS", "BGP", "OSPF", "EIGRP", "MPLS", "VPN", "VLAN"]
    },
    {
      title: "Network Security",
      skills: ["Firewalls", "IDS/IPS", "VPN", "Network Access Control", "SSL/TLS", "IPSec", "Network Segmentation"]
    },
    {
      title: "Infrastructure & Hardware",
      skills: ["Cisco Switches", "Juniper Routers", "Load Balancers", "WAN Optimization", "Network Monitoring", "Cabling Systems"]
    },
    {
      title: "Cloud & Virtualization",
      skills: ["AWS Networking", "Azure Network", "VMware NSX", "Software-Defined Networking", "Container Networking", "Hybrid Cloud"]
    },
    {
      title: "Tools & Protocols",
      skills: ["Wireshark", "SolarWinds", "SNMP", "NetFlow", "Syslog", "Network Automation", "Python Scripting"]
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
            A comprehensive toolkit built through years of hands-on network engineering experience
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
