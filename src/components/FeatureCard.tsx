import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  route: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, route }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(route)}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
    >
      <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </button>
  );
};

export default FeatureCard;
