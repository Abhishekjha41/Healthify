// PeriodTracker.tsx

import React, { useState } from 'react';
import axios from 'axios';
import { Calendar } from 'lucide-react';

const PeriodTracker: React.FC = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [nextPeriodDate, setNextPeriodDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNextPeriodDate(''); // Clear previous result

    try {
      const response = await axios.post('https://healthify-server.vercel.app/api/period-tracker', { lastPeriodDate, cycleLength });
      setNextPeriodDate(response.data.nextPeriodDate);
    } catch (error) {
      setNextPeriodDate('Unable to calculate your next period. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-100 to-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-300 opacity-20 rounded-2xl blur-2xl"></div>

        <header className="text-center relative z-10 mb-8">
          <div className="flex justify-center items-center gap-3 mb-4 text-red-500">
            <Calendar className="w-10 h-10 animate-spin-slow" />
            <h1 className="text-3xl font-bold text-red-600 tracking-wide">Period Tracker</h1>
          </div>
          <p className="text-gray-600 font-medium">
            Calculate your next cycle with precision and ease.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="relative z-10 mb-8 space-y-6">
          <div>
            <label htmlFor="lastPeriodDate" className="block text-gray-700 font-semibold mb-1">
              Last Period Date:
            </label>
            <input
              type="date"
              id="lastPeriodDate"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              required
              className="w-full p-3 bg-red-50 border border-red-300 rounded-md focus:outline-none focus:border-red-500 shadow-sm transition duration-200"
            />
          </div>

          <div>
            <label htmlFor="cycleLength" className="block text-gray-700 font-semibold mb-1">
              Cycle Length (days):
            </label>
            <input
              type="number"
              id="cycleLength"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              required
              min="20"
              max="45"
              className="w-full p-3 bg-red-50 border border-red-300 rounded-md focus:outline-none focus:border-red-500 shadow-sm transition duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={!lastPeriodDate || !cycleLength || loading}
            className={`w-full py-3 font-semibold text-white rounded-md 
            ${loading ? 'bg-red-300' : 'bg-red-500 hover:bg-red-600'} 
            transition-colors duration-300 shadow-lg`}
          >
            {loading ? 'Calculating...' : 'Calculate Next Period'}
          </button>
        </form>

        {nextPeriodDate && (
          <div className="text-center relative z-10 mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <h2 className="text-xl font-semibold text-red-600">Next Period Date</h2>
            <p className="text-gray-700 mt-2">{nextPeriodDate}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeriodTracker;
