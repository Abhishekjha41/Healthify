// PrivacyAndSecure.tsx

import React from 'react';
import { Shield } from 'lucide-react';

const PrivateSecure: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-300 opacity-20 rounded-3xl blur-2xl"></div>

        <header className="text-center relative z-10 mb-8">
          <div className="flex justify-center items-center gap-3 mb-4 text-blue-500">
            <Shield className="w-12 h-12 animate-pulse" />
            <h1 className="text-4xl font-bold text-blue-600 tracking-wide">Privacy & Security</h1>
          </div>
          <p className="text-gray-600 font-medium text-lg">
            Your health information is safe and secure with us.
          </p>
        </header>

        <section className="relative z-10 mb-8 space-y-6 text-gray-700">
          <p className="leading-relaxed">
            <strong className="text-blue-600">Encryption:</strong> Your data is encrypted using advanced algorithms, ensuring that your personal information remains confidential and secure at all times.
          </p>
          <p className="leading-relaxed">
            <strong className="text-blue-600">Data Anonymization:</strong> We anonymize your data to protect your identity, so that only you can access your sensitive information.
          </p>
          <p className="leading-relaxed">
            <strong className="text-blue-600">Compliance:</strong> We comply with all major healthcare regulations to safeguard your privacy and provide a trusted experience.
          </p>
        </section>

        <div className="relative z-10 text-center mt-8">
          <button
            onClick={() => alert('Your data is protected with enterprise-grade security.')}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Learn More About Our Security
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateSecure;
