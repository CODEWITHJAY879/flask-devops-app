import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jayeshni2020@gmail.com', href: 'mailto:jayeshni2020@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9579346760', href: 'tel:+919579346760' },
    { icon: Github, label: 'GitHub', value: 'CODEWITHJAY879', href: 'https://github.com/CODEWITHJAY879' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Jayesh Nikam', href: 'https://www.linkedin.com/in/jayesh-nikam-b48a48289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="glow-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's connect and build something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                target={item.label === 'GitHub' || item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'GitHub' || item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="contact-card group"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-red-500/20 rounded-xl group-hover:bg-red-500/30 transition-colors">
                    <item.icon size={28} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.label}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin size={20} className="text-red-500" />
                <span className="text-gray-300">Based in India</span>
              </div>
              <p className="text-gray-400 mb-6">
                Available for freelance projects, collaborations, and full-time opportunities.
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/CODEWITHJAY879" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jayesh-nikam-b48a48289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;