import React from 'react';
import { ExternalLink, Github, Cpu, Heart, Phone, Mail, MessageSquare, Instagram } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Farming with AI',
      description: 'AI-powered crop prediction system using machine learning algorithms to optimize farming decisions.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'Machine Learning', 'AI', 'Data Analysis'],
      icon: Cpu,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Medical Assistant',
      description: 'Intelligent healthcare assistant for patient diagnosis and treatment recommendations.',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'AI', 'Healthcare'],
      icon: Heart,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Docker Menu-Based Project',
      description: 'Containerized application with automated deployment and orchestration using Docker.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Docker', 'DevOps', 'Automation', 'CI/CD'],
      icon: Cpu,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'WhatsApp Automation',
      description: 'Python-based WhatsApp message automation system for bulk messaging.',
      image: 'https://images.pexels.com/photos/5710166/pexels-photo-5710166.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'Automation', 'API', 'Messaging'],
      icon: MessageSquare,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Email Automation System',
      description: 'Automated email sending system with templates and scheduling capabilities.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'SMTP', 'Automation', 'Scheduling'],
      icon: Mail,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Instagram Auto-Post',
      description: 'Automated Instagram posting system using Python for social media management.',
      image: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'Instagram API', 'Social Media', 'Automation'],
      icon: Instagram,
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-md border border-red-500/20 rounded-xl overflow-hidden hover:border-red-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Project Icon */}
                <div className="absolute top-4 right-4 p-2 bg-red-500 rounded-lg">
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 flex items-center justify-center px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300 group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;