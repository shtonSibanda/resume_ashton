
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient animation with lovely colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/40 via-purple-100/40 to-emerald-100/40 animate-pulse"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-rose-400 to-emerald-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img 
                  src="src/components/pictures/WhatsApp Image 2025-07-01 at 17.45.46_c2b9537d.jpg"
                  alt="Professional headshot"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Sibanda Ashton
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light">
              Network Engineer & IT Professional
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about designing and maintaining robust network infrastructures. Recent graduate with hands-on experience in 
              network configuration, security, and infrastructure management.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="icon" className="bg-white/80 border-gray-300 hover:bg-gray-50 text-gray-700">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/80 border-gray-300 hover:bg-gray-50 text-gray-700">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white/80 border-gray-300 hover:bg-gray-50 text-gray-700">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-rose-500 to-emerald-500 hover:from-rose-600 hover:to-emerald-600 text-white px-8 py-3 text-lg shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg bg-white/80"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
