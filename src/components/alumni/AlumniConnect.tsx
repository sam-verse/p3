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
    location: 'Downtown Conference Center',
    description: 'Join us for an evening of networking with industry professionals.',
    rsvpLink: 'https://example.com/rsvp1',
  },
  {
    id: 2,
    type: 'workshop',
    title: 'Career Development Workshop',
    date: '2024-04-20',
    time: '14:00',
    location: 'Online',
    description: 'Enhance your career skills with our expert-led workshop.',
    rsvpLink: 'https://example.com/rsvp2',
  },
  {
    id: 3,
    type: 'meetup',
    title: 'Alumni Reunion',
    date: '2024-05-10',
    time: '12:00',
    location: 'University Campus',
    description: 'Reconnect with your classmates and faculty at our annual reunion.',
    rsvpLink: 'https://example.com/rsvp3',
  },
  {
    id: 4,
    type: 'workshop',
    title: 'Resume Building Workshop',
    date: '2024-05-15',
    time: '10:00',
    location: 'Career Center',
    description: 'Learn how to create a standout resume that gets you noticed.',
    rsvpLink: 'https://example.com/rsvp4',
  },
  {
    id: 5,
    type: 'meetup',
    title: 'Industry Insights Panel',
    date: '2024-06-01',
    time: '16:00',
    location: 'Downtown Conference Center',
    description: 'Join industry leaders as they share insights and trends in the tech world.',
    rsvpLink: 'https://example.com/rsvp5',
  },
  {
    id: 6,
    type: 'workshop',
    title: 'Interview Preparation Bootcamp',
    date: '2024-06-10',
    time: '09:00',
    location: 'Online',
    description: 'Get ready for your next interview with our intensive bootcamp.',
    rsvpLink: 'https://example.com/rsvp6',
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
                <div key={event.id} className="bg-white rounded-lg p-4 shadow-sm border">
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
                <div key={event.id} className="bg-white rounded-lg p-4 shadow-sm border">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {alumni.map((person) => (
              <div key={person.id} className="relative group bg-white rounded-xl shadow-lg p-6">
                {/* Profile Image */}
                <div className="flex justify-center">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>

                {/* Profile Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{person.role} at {person.company}</p>
                </div>

                {/* Unique Icon Arrangement */}
                <div className="mt-6 flex justify-center space-x-4">
                  <button
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    title="Schedule Meeting"
                  >
                    <Calendar className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    title="Send Message"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </button>
                  <a
                    href={`https://linkedin.com/in/${person.name.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    title="Connect on LinkedIn"
                  >
                    <Users className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {alumni.map((person) => (
              <div key={person.id} className="group rounded-lg border p-4 hover:shadow-md transition-shadow">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                <p className="text-sm text-gray-600 flex items-center mb-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {person.role} at {person.company}
                </p>
                {/* Icon-only buttons arranged in a row with custom colors */}
                <div className="flex justify-center gap-3">
                  <button
                    className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    title="Schedule Meeting"
                  >
                    <Calendar className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    title="Send Message"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </button>
                  <a
                    href={`https://linkedin.com/in/${person.name.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                    title="Connect on LinkedIn"
                  >
                    <Users className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Alumni Network</h1>
        
        <div className="flex flex-wrap gap-2">
          <NavButton
            active={view === 'list'}
            onClick={() => setView('list')}
            icon={<Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />}
            label="Alumni List"
          />
          <NavButton
            active={view === 'meetups'}
            onClick={() => setView('meetups')}
            icon={<Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />}
            label="Meetups"
          />
          <NavButton
            active={view === 'workshops'}
            onClick={() => setView('workshops')}
            icon={<BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2" />}
            label="Workshops"
          />
          <NavButton
            active={view === 'guidance'}
            onClick={() => setView('guidance')}
            icon={<MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2" />}
            label="1:1 Guidance"
          />
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 md:p-6 shadow-sm">
        {view === 'guidance' ? (
          <GuidanceView alumni={alumni} />
        ) : view === 'list' ? (
          <AlumniGridView alumni={alumni} />
        ) : (
          <EventsView events={upcomingEvents} type={view} />
        )}
      </div>
    </div>
  );
}

const NavButton = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-3 py-2 text-sm md:text-base rounded-lg transition-colors ${
      active ? 'bg-primary text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
    }`}
  >
    {icon}
    {label}
  </button>
);

const AlumniGridView = ({ alumni }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
    {alumni.map((person) => (
      <div key={person.id} className="group rounded-lg border p-4 hover:shadow-md transition-shadow">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
        <p className="text-sm text-gray-600 flex items-center mb-2">
          <Briefcase className="w-4 h-4 mr-2" />
          {person.role} at {person.company}
        </p>
        <div className="flex flex-wrap gap-2">
          <ActionButton 
            icon={<Calendar className="w-4 h-4" />} 
            label="Schedule" 
            variant="primary"
          />
          <ActionButton
            icon={<MessageSquare className="w-4 h-4" />}
            label="Message"
            variant="secondary"
          />
          <ActionButton 
            icon={<Users className="w-4 h-4" />} 
            label="Connect" 
            variant="connect"
          />
        </div>
      </div>
    ))}
  </div>
);

const GuidanceView = ({ alumni }) => (
  <div className="grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
    {alumni.map((person) => (
      <div key={person.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-200">
          <div className="relative inline-block">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover object-top rounded-full border-4 border-white shadow-xl transition-transform duration-300 group-hover:rotate-2"
            />
            <div className="absolute -right-2 -bottom-2 flex gap-2">
              <button className="p-2 rounded-full bg-gradient-to-br from-pink-100 to-rose-50 text-rose-700 hover:bg-rose-100 transition-colors duration-300">
                <MessageSquare className="w-5 h-5" />
              </button>
              <a
                href={`https://www.linkedin.com/in/${person.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="p-2 rounded-full bg-gradient-to-br from-rose-400 to-red-500 text-white hover:from-rose-500 hover:to-red-600 transition-colors duration-300"
              >
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{person.role} at {person.company}</p>
          <div className="flex flex-col gap-2">
            <ActionButton 
              icon={<Calendar className="w-4 h-4" />} 
              label="Schedule Meeting" 
              variant="primary"
              fullWidth
            />
            <ActionButton
              icon={<MessageSquare className="w-4 h-4" />}
              label="Send Message"
              variant="secondary"
              fullWidth
            />
            <ActionButton 
              icon={<Users className="w-4 h-4" />} 
              label="LinkedIn Connect" 
              variant="connect"
              fullWidth
              href={`https://www.linkedin.com/in/${person.name.replace(/\s+/g, '-').toLowerCase()}`}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ActionButton = ({ icon, label, href, variant = 'primary', fullWidth = false }) => {
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: 'bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg hover:shadow-xl hover:from-red-600 hover:to-rose-700',
    secondary: 'bg-white text-rose-700 border-2 border-rose-100 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-800',
    connect: 'bg-gradient-to-br from-rose-400 to-red-500 text-white shadow-lg hover:shadow-xl hover:from-rose-500 hover:to-red-600',
    message: 'bg-gradient-to-br from-pink-100 to-rose-50 text-rose-700 hover:bg-rose-100 hover:text-rose-800'
  };

  const className = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`;

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {icon}
      {label}
    </a>
  ) : (
    <button className={className}>
      {icon}
      {label}
    </button>
  );
};

const EventsView = ({ events, type }) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {events.filter(e => e.type === type.slice(0, -1)).map(event => (
      <div key={event.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            {type === 'meetups' ? (
              <Users className="w-6 h-6 text-primary" />
            ) : (
              <BookOpen className="w-6 h-6 text-primary" />
            )}
          </div>
          <h3 className="text-lg font-semibold">{event.title}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">{event.description}</p>
        <div className="flex flex-wrap gap-2">
          <ActionButton label="RSVP Now" href={event.rsvpLink} />
          <ActionButton 
            label="Add to Calendar" 
            variant="secondary" 
            icon={<Calendar className="w-4 h-4" />}
          />
        </div>
      </div>
    ))}
  </div>
);