import React, { useState } from 'react';
import { generateInterviewPrep, generateApplicationTips } from '../lib/gemini';
import { Loader2, Briefcase, FileText, Send, Brain } from 'lucide-react';

export default function InterviewPrep() {
  const [jobDescription, setJobDescription] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(false);
  const [interviewTips, setInterviewTips] = useState('');
  const [applicationTips, setApplicationTips] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const [interviewResults, applicationResults] = await Promise.all([
        generateInterviewPrep(jobDescription, companyName),
        generateApplicationTips(jobDescription, companyName)
      ]);
      setInterviewTips(interviewResults);
      setApplicationTips(applicationResults);
    } catch (error) {
      console.error('Error generating tips:', error);
      setError('Failed to generate suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text animate-gradient">
            Interview Preparation Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized interview and application guidance based on the job description
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="mb-8">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none input-animated transition-all"
                  placeholder="Enter company name"
                  required
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Job Description
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <textarea
                  id="jobDescription"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={8}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none input-animated transition-all"
                  placeholder="Paste the job description here"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  <span>Generating Suggestions...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Generate Suggestions</span>
                </>
              )}
            </button>
          </form>

          {(interviewTips || applicationTips) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {interviewTips && (
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    Interview Preparation
                  </h2>
                  <div className="prose max-w-none">
                    {interviewTips.split('\n').map((line, index) => (
                      <p key={index} className="text-gray-600 mb-4">{line}</p>
                    ))}
                  </div>
                </div>
              )}
              
              {applicationTips && (
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    Application Tips
                  </h2>
                  <div className="prose max-w-none">
                    {applicationTips.split('\n').map((line, index) => (
                      <p key={index} className="text-gray-600 mb-4">{line}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}