import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, GitFork, BookOpen, Mail, FileText, MessageSquare, Bot, Sparkles, Lightbulb, Target, Users, Shield, Zap, CheckCircle2, Clock, Award } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "Interview Preparation",
      description: "Get comprehensive interview preparation tips and strategies based on job description",
      icon: Brain,
      link: "/interview-prep",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      title: "Interview Questions",
      description: "Generate personalized interview questions and answers tailored to your profile",
      icon: MessageSquare,
      link: "/interview-questions",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Application Email",
      description: "Create professional job application emails customized for your target role",
      icon: Mail,
      link: "/email-writer",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Cover Letter",
      description: "Generate compelling cover letters that highlight your unique value proposition",
      icon: FileText,
      link: "/cover-letter",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Our AI analyzes job requirements to help you focus on what matters most"
    },
    {
      icon: Users,
      title: "Industry Insights",
      description: "Get advice based on real-world interview experiences and industry standards"
    },
    {
      icon: Shield,
      title: "Confidence Builder",
      description: "Practice with realistic scenarios to boost your interview confidence"
    },
    {
      icon: Zap,
      title: "Time Saver",
      description: "Reduce preparation time while improving the quality of your responses"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50" />
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-indigo-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text animate-gradient">
              Your AI Interview Success Partner
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get personalized interview preparation and job application guidance powered by AI
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/interview-prep"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Start Preparing Now
              </Link>
              <Link
                to="/learn-more"
                className="px-8 py-4 bg-white text-indigo-600 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why We Created This Tool */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text animate-gradient">
              Why We Created InterviewPro
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our mission is to democratize interview preparation and empower job seekers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
              <CheckCircle2 className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Equal Access</h3>
              <p className="text-gray-600">
                We believe everyone deserves access to high-quality interview preparation resources, regardless of their background.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <Award className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                Our AI-powered platform ensures consistent, professional-grade preparation materials for every user.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
              <Users className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Built with input from job seekers and hiring managers to address real interview challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Prepare for Interviews */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text animate-gradient">
              Why Prepare for Interviews?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proper preparation is the key to interview success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beat Competition</h3>
              <p className="text-gray-600">
                Stand out from other candidates by being well-prepared and confident in your responses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Build Confidence</h3>
              <p className="text-gray-600">
                Practice with realistic scenarios to reduce anxiety and improve your performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Target className="h-8 w-8 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Showcase Skills</h3>
              <p className="text-gray-600">
                Learn how to effectively communicate your experience and abilities to interviewers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Use AI */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text animate-gradient">
              Why Use AI for Interview Prep?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leverage cutting-edge technology to enhance your preparation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
              <Brain className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Analysis</h3>
              <p className="text-gray-600">
                AI analyzes job descriptions to identify key requirements and tailor preparation accordingly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
              <Sparkles className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalization</h3>
              <p className="text-gray-600">
                Get customized advice and practice questions based on your unique experience and goals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <Zap className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p className="text-gray-600">
                Save time with instant, relevant feedback and suggestions for improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text animate-gradient">
              Choose Your Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our suite of AI-powered tools to enhance your job application journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-br ${feature.gradient} p-8 h-full transition-all duration-300 group-hover:scale-[1.02]`}>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/90 text-lg mb-4">{feature.description}</p>
                      <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                        <span>Get Started</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contribution Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text animate-gradient">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us improve and expand our interview preparation tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Read our comprehensive documentation to understand how InterviewPro works and how you can contribute.
              </p>
              <a
                href="https://github.com/yourusername/interviewpro/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                View Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Code className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600 mb-4">
                Contribute to our GitHub repository by submitting pull requests or reporting issues.
              </p>
              <a
                href="https://github.com/yourusername/interviewpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 flex items-center"
              >
                View Repository
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
