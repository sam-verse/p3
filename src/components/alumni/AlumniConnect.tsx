import React, { useState } from 'react';
import { Briefcase, Calendar, MessageSquare, Users, BookOpen } from 'lucide-react';

const alumni = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Software Engineer',
    company: 'Google',
    department: 'Computer Science',
    graduationYear: '2019',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Microsoft',
    department: 'Information Technology',
    graduationYear: '2018',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    company: 'Amazon',
    department: 'Computer Science',
    graduationYear: '2020',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400',
  },
];

const upcomingEvents = [
  {
    id: 1,
    type: 'meetup',
    title: 'Tech Industry Networking Night',
    date: '2024-04-15',
    time: '18:00',
  },
  {
    id: 2,
    type: 'workshop',
    title: 'Career Development Workshop',
    date: '2024-04-20',
    time: '14:00',
  },
];

type View = 'list' | 'meetups' | 'workshops' | 'guidance';

export function AlumniConnect() {
  const [view, setView] = useState<View>('list');

  const renderView = () => {
    switch (view) {
      case 'meetups':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Upcoming Alumni Meetups</h2>
            {upcomingEvents
              .filter((event) => event.type === 'meetup')
              .map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg p-4 shadow-sm border"
                >
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {event.date} at {event.time}
                  </p>
                  <button className="mt-3 bg-primary text-white px-4 py-2 rounded-lg text-sm">
                    Register
                  </button>
                </div>
              ))}
          </div>
        );

      case 'workshops':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Alumni Workshops</h2>
            {upcomingEvents
              .filter((event) => event.type === 'workshop')
              .map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg p-4 shadow-sm border"
                >
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {event.date} at {event.time}
                  </p>
                  <button className="mt-3 bg-primary text-white px-4 py-2 rounded-lg text-sm">
                    Register
                  </button>
                </div>
              ))}
          </div>
        );

      case 'guidance':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">1:1 Guidance Booking</h2>
            <div className="grid gap-6">
              {alumni.map((person) => (
                <div
                  key={person.id}
                  className="bg-white rounded-lg p-4 shadow-sm border flex items-center gap-4"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{person.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {person.role} at {person.company}
                    </p>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                    Book Session
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{person.name}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {person.role} at {person.company}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {person.department} ({person.graduationYear})
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-white py-2 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Meeting
                    </button>
                    <button className="flex-1 border border-gray-200 text-gray-700 py-2 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Alumni Network</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              view === 'list'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Users className="w-4 h-4 mr-2" />
            Alumni List
          </button>
          <button
            onClick={() => setView('meetups')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              view === 'meetups'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Meetups
          </button>
          <button
            onClick={() => setView('workshops')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              view === 'workshops'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Workshops
          </button>
          <button
            onClick={() => setView('guidance')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              view === 'guidance'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            1:1 Guidance
          </button>
        </div>
      </div>
      
      {renderView()}
    </div>
  );
}