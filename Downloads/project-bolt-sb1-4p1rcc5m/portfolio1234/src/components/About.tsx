import React from 'react';
import { Code, Cpu, Cloud, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, text: 'B.E in Automation & Robotics (Final Year)' },
    { icon: Cpu, text: 'Passionate about AI, Automation, and DevOps' },
    { icon: Cloud, text: 'Cloud Engineer with hands-on experience' },
    { icon: Trophy, text: 'Created 10+ projects, participated in 2 hackathons' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-80 h-96 rounded-lg overflow-hidden bg-black border border-red-500/20">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Jayesh Nikam"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-md border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Get to know me!</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm a passionate B.E student specializing in Automation & Robotics with a deep interest in 
                AI, cloud technologies, and DevOps. I love building innovative solutions that bridge the gap 
                between automation and intelligent systems.
              </p>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg border border-red-500/10 hover:border-red-500/30 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                      <item.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;