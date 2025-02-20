import React from 'react';
import { Github, Linkedin, Twitter, Heart, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                InterviewPro
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your AI-powered interview preparation assistant
            </p>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-indigo-100">
              <span className="text-gray-600">Powered by</span>
              <img 
                src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" 
                alt="Gemini AI" 
                className="w-6 h-6"
              />
              <span className="font-medium text-indigo-600">Gemini AI</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link></li>
              <li><Link to="/interview-prep" className="text-gray-600 hover:text-indigo-600 transition-colors">Interview Prep</Link></li>
              <li><Link to="/learn-more" className="text-gray-600 hover:text-indigo-600 transition-colors">Learn More</Link></li>
              <li><Link to="/interview-questions" className="text-gray-600 hover:text-indigo-600 transition-colors">Practice Questions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Connect
            </h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <div className="text-sm text-gray-600">
                <p>Questions? Reach out at:</p>
                <a href="mailto:support@interviewpro.ai" className="text-indigo-600 hover:text-indigo-700">
                  support@interviewpro.ai
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} InterviewPro. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span className="text-gray-600">in</span>
                <div className="flex items-center space-x-1">
                  <span className="font-medium">ZA</span>
                  <img 
                    src="https://flagcdn.com/za.svg" 
                    alt="South African Flag" 
                    className="w-6 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}