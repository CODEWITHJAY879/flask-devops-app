import React from 'react';
import { Code, Server, Cloud, Brain, Wrench, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Java', 'Python', 'Shell Scripting', 'RESTful APIs', 'Express.js'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Docker', 'Jenkins', 'Linux', 'GCP', 'AWS', 'Kubernetes', 'CI/CD'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'AI & ML',
      icon: Brain,
      skills: ['Machine Learning', 'AgentIQ AI', 'Data Analysis', 'Python ML Libraries', 'TensorFlow'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Automation',
      icon: Wrench,
      skills: ['Robotics', 'IoT', 'Process Automation', 'Control Systems', 'Arduino', 'Raspberry Pi'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Database Design'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="glow-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card group">
              <div className="skill-card-inner">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} skill-icon`}>
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="text-gray-300 font-medium">{skill}</span>
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