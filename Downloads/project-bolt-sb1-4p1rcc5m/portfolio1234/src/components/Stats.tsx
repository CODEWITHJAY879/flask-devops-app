import React, { useState, useEffect } from 'react';
import { Code, Trophy, Briefcase, Clock } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    hackathons: 0,
    internships: 0,
    hours: 0
  });

  const finalValues = {
    projects: 10,
    hackathons: 4,
    internships: 3,
    hours: 1000
  };

  const stats = [
    {
      icon: Code,
      label: 'Projects',
      value: counters.projects,
      suffix: '+',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: Trophy,
      label: 'Hackathons',
      value: counters.hackathons,
      suffix: '',
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Briefcase,
      label: 'Internships',
      value: counters.internships,
      suffix: '',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Clock,
      label: 'Learning Hours',
      value: counters.hours,
      suffix: '+',
      color: 'from-red-700 to-red-900'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counter animation
            const duration = 2000; // 2 seconds
            const steps = 60;
            const interval = duration / steps;

            const counters = Object.keys(finalValues).map((key) => {
              const finalValue = finalValues[key as keyof typeof finalValues];
              const increment = finalValue / steps;
              let currentValue = 0;

              return setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                  currentValue = finalValue;
                  clearInterval();
                }
                setCounters(prev => ({
                  ...prev,
                  [key]: Math.floor(currentValue)
                }));
              }, interval);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fun <span className="text-red-500">Stats</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that tell my journey story
          </p>
        </div>

        <div id="stats-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-md border border-red-500/20 rounded-xl p-8 text-center hover:border-red-500/40 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Glowing background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-2xl text-red-400 font-bold">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-400 font-medium text-lg">
                  {stat.label}
                </p>

                {/* Animated line */}
                <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} transform origin-left transition-transform duration-1000 delay-500 scale-x-0 group-hover:scale-x-100`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;