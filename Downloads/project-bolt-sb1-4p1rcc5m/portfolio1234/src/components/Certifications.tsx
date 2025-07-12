import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      year: '2024',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=300',
      url: '#'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300',
      url: '#'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      year: '2023',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300',
      url: '#'
    },
    {
      title: 'DevOps Foundation',
      issuer: 'Simplilearn',
      year: '2023',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300',
      url: '#'
    },
    {
      title: 'Red Hat Certified',
      issuer: 'Red Hat',
      year: '2023',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300',
      url: '#'
    },
    {
      title: 'AI & ML Certification',
      issuer: 'Agentick AI',
      year: '2024',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300',
      url: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-md border border-red-500/20 rounded-xl overflow-hidden hover:border-red-500/40 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Award Icon */}
                <div className="absolute top-4 right-4 p-2 bg-red-500 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-red-400 text-sm font-semibold mb-4">{cert.year}</p>

                {/* View Certificate Button */}
                <a
                  href={cert.url}
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-all duration-300 transform hover:scale-105 group/btn"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                  View Certificate
                </a>
              </div>

              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:via-red-500/5 group-hover:to-red-500/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;