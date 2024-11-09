import { useEffect, useState } from 'react';
import axios from 'axios';

const PersonalizedCare = () => {
  const [insights, setInsights] = useState('');

  useEffect(() => {
    axios.post('/api/personalized-care', { userPreferences: { diet: 'vegan', exercise: 'daily' } })
      .then(response => setInsights(response.data.insights))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="container mx-auto text-center py-16">
      <h2 className="text-3xl font-bold mb-4">Personalized Care</h2>
      <p className="text-gray-700">{insights}</p>
    </div>
  );
};

export default PersonalizedCare;
