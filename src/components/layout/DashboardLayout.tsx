import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Users, MessageSquare, Calendar, LogOut, ChevronDown, Menu, X } from 'lucide-react';

export function DashboardLayout() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname.startsWith(path);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className={`w-full md:w-64 bg-white shadow-lg md:shadow-none md:h-screen ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">REConnect</h1>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive('/chat') ? 'bg-gray-100' : ''
              }`}
            >
              <span className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-3" />
                Chats
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 w-full bg-white shadow-md transition-opacity duration-300 ease-in-out opacity-100">
                <Link
                  to="/chat"
                  className={`block px-6 py-2 text-gray-700 hover:bg-gray-100 ${
                    isActive('/chat') ? 'bg-gray-100' : ''
                  }`}
                >
                  Chat List
                </Link>
                <Link
                  to="/chat/new"
                  className={`block px-6 py-2 text-gray-700 hover:bg-gray-100`}
                >
                  New Chat
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/events"
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              isActive('/events') ? 'bg-gray-100' : ''
            }`}
          >
            <Calendar className="w-5 h-5 mr-3" />
            Events
          </Link>
          <Link
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
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="flex items-center text-gray-700 hover:text-primary">
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}