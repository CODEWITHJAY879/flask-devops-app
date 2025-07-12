import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Automation and Robotics',
      institution: 'Engineering College',
      year: '2022 - 2026',
      location: 'India',
      grade: 'Final Year',
      description: 'Specializing in automation systems, robotics, AI integration, and industrial automation with hands-on project experience.'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and learning journey
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-md border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Education Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl text-red-400 font-semibold mb-2">
                          {edu.field}
                        </h4>
                        <p className="text-gray-300 font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400 mt-4 lg:mt-0">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.year}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-sm font-semibold rounded-full border border-red-500/30">
                        {edu.grade}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Key Subjects */}
                    <div className="mt-6">
                      <h5 className="text-white font-semibold mb-3">Key Focus Areas:</h5>
                      <div className="flex flex-wrap gap-2">
                        {['Automation Systems', 'Robotics', 'AI Integration', 'Industrial Control', 'Machine Learning', 'IoT'].map((subject, subIndex) => (
                          <span
                            key={subIndex}
                            className="px-3 py-1 bg-black/30 text-gray-300 text-sm rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;