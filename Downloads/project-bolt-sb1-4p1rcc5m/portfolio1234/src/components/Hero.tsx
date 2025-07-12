import React, { useEffect, useState } from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'AI Builder', 
    'Cloud Enthusiast',
    'DevOps Engineer',
    'Automation Expert'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">Hi, I'm </span>
                <span className="text-red-500 animate-pulse">Jayesh</span>
              </h1>
              
              <div className="h-16 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentRole * 4}rem)` }}
                >
                  {roles.map((role, index) => (
                    <h2 key={index} className="text-2xl md:text-3xl text-gray-300 h-16 flex items-center">
                      {role}
                    </h2>
                  ))}
                </div>
              </div>
              
              <p className="text-xl text-gray-400 max-w-2xl">
                B.E in Automation & Robotics | Passionate about AI, Cloud Engineering & DevOps
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 group"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Contact Me
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:bounce transition-transform" />
                Resume Download
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image with 3D Effect */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-red-700 animate-spin" 
                   style={{ animation: 'spin 8s linear infinite' }}>
              </div>
              <div className="absolute inset-2 rounded-full bg-black"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-red-500 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Jayesh Nikam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;