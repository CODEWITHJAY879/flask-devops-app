import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black to-gray-900 border-t border-red-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 mb-8 group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Copyright */}
          <div className="space-y-4">
            <p className="text-gray-300 text-lg flex items-center justify-center">
              Designed & Built with{' '}
              <Heart className="w-5 h-5 text-red-500 mx-2 animate-pulse" />
              by{' '}
              <span className="text-red-500 font-semibold ml-1">Jayesh Nikam</span>
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <span>© 2024 All rights reserved</span>
              <span>•</span>
              <span>Made with React & Tailwind CSS</span>
            </div>
          </div>

          {/* Animated decorative line */}
          <div className="mt-8 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;