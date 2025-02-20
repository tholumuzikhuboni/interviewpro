import React from 'react';
import { Brain, Target, Sparkles, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text animate-gradient">
            Transform Your Interview Preparation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform revolutionizes the way you prepare for interviews and job applications
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600">
                  Our advanced AI analyzes job descriptions and your profile to provide tailored recommendations and insights.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Content</h3>
                <p className="text-gray-600">
                  Get customized interview questions, answers, and preparation strategies based on your experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 p-3 rounded-xl">
                <Sparkles className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Documents</h3>
                <p className="text-gray-600">
                  Generate polished cover letters and application emails that highlight your strengths.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Lightbulb className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
                <p className="text-gray-600">
                  Receive strategic advice on how to present your experience and skills effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Input Your Details</h3>
                  <p className="text-gray-600">
                    Provide information about your target role, experience, and the company you're applying to.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                  <p className="text-gray-600">
                    Our AI processes your information and generates personalized content and recommendations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Results</h3>
                  <p className="text-gray-600">
                    Receive tailored interview preparation materials, questions, and application documents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/interview-prep"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Start Preparing Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}