import React from 'react';
import { Calendar, MapPin, Trophy, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Linux World Internship',
      company: 'Linux World',
      period: 'Jun 2025 - Aug 2025',
      location: 'Remote',
      type: 'Internship',
      icon: Briefcase,
      description: 'Worked on cloud infrastructure and automation projects using Linux systems.',
      achievements: [
        'Implemented CI/CD pipelines',
        'Automated deployment processes',
        'Learned advanced Linux administration'
      ]
    },
    {
      title: 'Software Development Intern',
      company: 'InternPe',
      period: '1 Month',
      location: 'Remote',
      type: 'Internship',
      icon: Briefcase,
      description: 'Developed web applications and gained hands-on experience in full-stack development.',
      achievements: [
        'Built responsive web applications',
        'Collaborated with development team',
        'Learned modern web technologies'
      ]
    },
    {
      title: 'Industry Skills Program',
      company: 'Internshala',
      period: 'Completed',
      location: 'Online',
      type: 'Training',
      icon: Briefcase,
      description: 'Comprehensive training program focusing on industry-relevant skills.',
      achievements: [
        'Completed multiple projects',
        'Gained practical experience',
        'Earned industry certification'
      ]
    },
    {
      title: 'Google Cloud Hackathon',
      company: 'Google Cloud',
      period: '2024',
      location: 'Online',
      type: 'Achievement',
      icon: Trophy,
      description: 'Secured Top 5 position in Google Cloud Hackathon with innovative cloud solution.',
      achievements: [
        'Top 5 position achieved',
        'Innovative cloud architecture',
        'Team collaboration excellence'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey and achievements in the tech industry
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-red-700 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-600 rounded-full items-center justify-center border-4 border-black shadow-lg">
                  <exp.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-gray-900/50 backdrop-blur-md border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <h4 className="text-red-400 font-semibold">{exp.company}</h4>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mt-2 sm:mt-0">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        exp.type === 'Achievement' 
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-gray-400">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline balance */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;