import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Users, MessageSquare, Calendar, LogOut } from 'lucide-react';

export function DashboardLayout() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">REConnect</h1>
        </div>
        <nav className="mt-6">
          <Link
            to="/dashboard"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              location.pathname === '/dashboard' ? 'bg-gray-100' : ''
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/chat"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive('/chat') ? 'bg-gray-100' : ''
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-3" />
            Chats
          </Link>
          <Link
            to="/events"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive('/events') ? 'bg-gray-100' : ''
            }`}
          >
            <Calendar className="w-5 h-5 mr-3" />
            Events
          </Link><Link
            to="/alumni"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive('/alumni') ? 'bg-gray-100' : ''
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            Alumni
          </Link>
          <Link
            to="/peer"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive('/peer') ? 'bg-gray-100' : ''
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            P2P HUB
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <button className="flex items-center text-gray-700 hover:text-primary">
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}