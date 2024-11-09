import  { useState } from "react";
import { GiNurseFemale } from "react-icons/gi";
import {  Shield, Brain, Calendar, MessageCircle } from "lucide-react";
import FeatureCard from "./FeatureCard";
import ChatInterface from "./ChatInterface";

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="bg-gradient-to-b from-pink-100 via-pink-200 to-white min-h-screen">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center mb-8">
          <GiNurseFemale className="w-16 h-16 text-rose-600" />
          <h1 className="text-5xl font-extrabold text-gray-800 ml-4 flex items-center gap-2">
            <span>Healthify</span>
            <span className="text-rose-600">AI</span>
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Your personal AI health companion, designed specifically for women's health and wellness journey.
        </p>
        <button
          onClick={() => setShowChat(true)}
          className="mt-6 bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors duration-300 shadow-lg"
        >
          Start Consultation
        </button>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 overflow-y-hidden overflow-x-hidden">
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-rose-600" />}
            title="AI-Powered Insights"
            description="Advanced AI technology to provide evidence-based health recommendations"
            route="/api/ai-powered-insights"
          />
          <FeatureCard
            icon={<Calendar className="w-8 h-8 text-rose-600" />}
            title="Period Tracking"
            description="Smart menstrual cycle tracking with predictive analytics"
            route="/period-tracker"
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-rose-600" />}
            title="Private & Secure"
            description="Your health data is encrypted and protected with enterprise-grade security"
            route="/private-secure"
          />
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8 text-rose-600" />}
            title="Provide Feedback"
            description="Share your experience and help us improve"
            route="/feedback"
          />
        </div>
      </section>

      {/* Chat Interface (Popup) */}
      {showChat && (
        <ChatInterface onClose={() => setShowChat(false)} />
      )}

      {/* Footer */}
      <footer className="bg-rose-600 py-8 text-center text-white">
        <div className="container mx-auto px-4">
          <p className="mb-2">Trusted by thousands of women worldwide</p>
          <div className="flex justify-center space-x-8 mt-4">
            <img
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=100&h=50&fit=crop&auto=format"
              alt="Medical certification"
              className="h-12 object-contain opacity-75 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100&h=50&fit=crop&auto=format"
              alt="Healthcare partner"
              className="h-12 object-contain opacity-75 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Healthify. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
