
import React, { useState } from 'react';
import { Star} from 'lucide-react';

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    if (rating === 0 || comments.trim() === '') {
      setResponse('Please provide a rating and comments.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://healthify-server.vercel.app/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, comments, suggestions }),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse('Sorry, we encountered an error while processing your feedback.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-300 opacity-20 rounded-3xl blur-2xl"></div>

        <header className="text-center relative z-10 mb-8">
          <div className="flex justify-center items-center gap-3 mb-4 text-pink-500">
            <Star className="w-12 h-12 animate-pulse" />
            <h1 className="text-4xl font-bold text-pink-600 tracking-wide">We Value Your Feedback</h1>
          </div>
          <p className="text-gray-600 font-medium text-lg">
            Share your experience using our app and help us improve!
          </p>
        </header>

        <section className="relative z-10 space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Your feedback is essential to help us enhance our services and make your experience even better.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-pink-600">Rate Your Experience:</h3>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  className={`cursor-pointer w-8 h-8 ${value <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  onClick={() => setRating(value)}
                />
              ))}
            </div>
          </div>

          <div>
            <textarea
              placeholder="Tell us about your experience..."
              className="w-full p-4 rounded-lg border-2 border-pink-300 focus:ring-2 focus:ring-pink-400 outline-none"
              rows={4}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          <div>
            <textarea
              placeholder="Any suggestions for us?"
              className="w-full p-4 rounded-lg border-2 border-pink-300 focus:ring-2 focus:ring-pink-400 outline-none"
              rows={4}
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
            />
          </div>

          <div className="text-center mt-4">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            >
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>

          {response && (
            <div className="mt-6 p-4 bg-pink-50 rounded-xl text-gray-700">
              <strong className="text-pink-600">Response:</strong>
              <p className="mt-2">{response}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Feedback;
