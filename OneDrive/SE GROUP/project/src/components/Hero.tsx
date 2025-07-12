import React, { useEffect, useState } from 'react';
import { Download, MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['AI Builder', 'Cloud & DevOps Engineer', 'Automation Expert', 'Full Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Replace with actual resume URL
    const resumeUrl = '#';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Jayesh_Nikam_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="glow-text">Jayesh</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-6">
                <span className="text-red-500">{'{'}</span>
                <span className="rotating-text">{roles[currentRole]}</span>
                <span className="text-red-500">{'}'}</span>
              </div>
              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                Passionate about AI, Automation, and Cloud technologies. 
                B.E in Automation & Robotics Engineering with expertise in modern development practices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={downloadResume}
                className="glow-button flex items-center gap-2 px-8 py-4 rounded-full"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button 
                onClick={scrollToContact}
                className="glass-button flex items-center gap-2 px-8 py-4 rounded-full"
              >
                <MessageCircle size={20} />
                Contact Me
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="floating-ring"></div>
              <div className="profile-container">
                <div className="profile-glow"></div>
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Jayesh Nikam" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-red-500" />
      </div>
    </section>
  );
};

export default Hero;