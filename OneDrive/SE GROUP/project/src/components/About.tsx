import React from 'react';
import { Code, Zap, Trophy, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, text: 'B.E in Automation & Robotics Engineering' },
    { icon: Zap, text: 'Passionate about AI & Cloud Technologies' },
    { icon: Trophy, text: 'Participated in 4+ Hackathons' },
    { icon: Users, text: 'Created 10+ Projects' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate <span className="text-red-500 font-semibold">Automation & Robotics Engineer</span> 
                with a deep love for cutting-edge technology. My journey in tech has been driven by curiosity 
                and a desire to build solutions that make a real impact.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From AI-powered applications to cloud infrastructure, I enjoy tackling complex challenges 
                and turning innovative ideas into reality. I'm always eager to learn new technologies 
                and collaborate on exciting projects.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover-glow group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-colors">
                    <highlight.icon size={24} className="text-red-500" />
                  </div>
                  <p className="text-gray-300 font-medium">{highlight.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;