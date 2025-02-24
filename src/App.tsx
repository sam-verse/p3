import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { AuthForm } from './components/auth/AuthForm';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { AlumniConnect } from './components/alumni/AlumniConnect';
import { ChatInterface } from './components/chat/ChatInterface';
import { EventsCalendar } from './components/events/EventsCalendar';
import { WelcomeBanner } from './components/dashboard/WelcomeBanner';
import { RecommendedGroups } from './components/dashboard/RecommendedGroups';

function Dashboard() {
  return (
    <>
      <WelcomeBanner />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecommendedGroups />
        {/* Add more dashboard widgets here */}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="alumni" element={<AlumniConnect />} />
          <Route path="chat" element={<ChatInterface />} />
          <Route path="events" element={<EventsCalendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;