import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PrivateSecure from './components/PrivateSecure';
import AIPoweredInsights from './components/AIPoweredInsights';
import PeriodTracker from './components/PeriodTracker';
import Feedback from './components/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private-secure" element={<PrivateSecure />} />
        <Route path="/api/ai-powered-insights" element={<AIPoweredInsights />} />
        <Route path="/period-tracker" element={<PeriodTracker />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
