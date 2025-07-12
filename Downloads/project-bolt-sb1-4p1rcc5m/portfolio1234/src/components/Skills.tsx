import React from 'react';
import { Code, Server, Cloud, BarChart, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Java', 'Shell Scripting', 'Python'],
      color: 'from-red-600 to-red-800'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Docker', 'Jenkins', 'Linux', 'GCP', 'CI/CD', 'AWS'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['Python ML', 'AI Models', 'Data Analysis', 'Automation'],
      color: 'from-red-700 to-red-900'
    },
    {
      title: 'Visualization',
      icon: BarChart,
      skills: ['Power BI', 'Data Visualization', 'Analytics'],
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'Problem Solving',
      icon: Wrench,
      skills: ['DSA', 'Algorithms', 'System Design', 'Debugging'],
      color: 'from-red-600 to-red-800'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to build amazing projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-md border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Glowing effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-red-500/10 hover:border-red-500/30 transition-all duration-300"
                    >
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;