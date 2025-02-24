import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Tech Workshop: Advanced React Patterns',
    date: new Date(2024, 3, 15),
    time: '14:00 - 16:00',
    location: 'Virtual',
    type: 'Workshop',
  },
  {
    id: 2,
    title: 'Alumni Networking Night',
    date: new Date(2024, 3, 20),
    time: '18:00 - 20:00',
    location: 'Main Auditorium',
    type: 'Networking',
  },
  {
    id: 3,
    title: 'Hackathon 2024',
    date: new Date(2024, 4, 1),
    time: '09:00 - 21:00',
    location: 'Engineering Block',
    type: 'Competition',
  },
];

export function EventsCalendar() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>
      
      <div className="grid gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center text-primary">
              <CalendarIcon className="w-6 h-6 mb-1" />
              <span className="text-sm font-medium">
                {format(event.date, 'MMM d')}
              </span>
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
              </div>
            </div>
            
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}