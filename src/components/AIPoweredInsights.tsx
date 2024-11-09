// AIInsights.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { Brain } from 'lucide-react';

const AIInsights: React.FC = () => {
  const [query, setQuery] = useState('');
  const [insights, setInsights] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setInsights(''); // Clear previous results

    try {
      const response = await axios.post('https://healthify-server.vercel.app/api/ai-powered-insights', { healthQuery: query });
      setInsights(response.data.insights);
    } catch (error) {
      setInsights('An error occurred while fetching insights. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-white p-8">
      <div className="container mx-auto max-w-2xl bg-white shadow-lg rounded-xl p-6">
        <header className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4 text-purple-700">
            <Brain className="w-10 h-10" />
            <h1 className="text-3xl font-semibold">AI-Powered Health Insights</h1>
          </div>
          <p className="text-gray-600">
            Get evidence-based insights tailored for women’s health, supported by the latest in AI technology.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
            Ask a health question:
          </label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={4}
            placeholder="Enter your health-related question..."
            className="w-full p-4 text-gray-700 bg-purple-50 rounded-md border border-purple-200 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            disabled={!query || loading}
            className={`mt-4 w-full p-3 text-white font-semibold rounded-md 
              ${loading ? 'bg-purple-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 transition-all duration-300'}
            `}
          >
            {loading ? 'Generating insights...' : 'Get Insights'}
          </button>
        </form>

        <section
          className={`${
            insights ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 ease-in-out`}
        >
          <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">Your Insights:</h2>
          <p className="bg-purple-50 text-purple-800 p-4 rounded-md border border-purple-200 whitespace-pre-line">
            {insights || 'Your insights will appear here once generated.'}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AIInsights;
