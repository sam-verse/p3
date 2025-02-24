import React, { useState, useEffect, useRef } from 'react';
import { Send, Hash, Users } from 'lucide-react';

const groups = [
  { id: 1, name: 'Web Development', type: 'study' },
  { id: 2, name: 'AI/ML Discussion', type: 'study' },
  { id: 3, name: 'CSE Department', type: 'department' },
  { id: 4, name: 'Placement Prep', type: 'mentorship' },
];

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    content: 'Has anyone started working on the React project?',
    timestamp: '10:30 AM',
  },
  {
    id: 2,
    sender: 'Alice Smith',
    content: "Yes, I've begun setting up the development environment.",
    timestamp: '10:32 AM',
  },
];

export function ChatInterface() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState(messages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'You',
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Format timestamp
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when a new message is added
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  return (
    <div className="h-[calc(100vh-2rem)] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="font-semibold mb-4">Your Groups</h2>
          <div className="space-y-1">
            {groups.map((group) => (
              <button
                key={group.id}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center"
              >
                {group.type === 'department' ? (
                  <Users className="w-4 h-4 mr-2" />
                ) : (
                  <Hash className="w-4 h-4 mr-2" />
                )}
                {group.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {chatMessages.length === 0 ? (
            <p className="text-gray-500 text-center">No messages yet. Start the conversation!</p>
          ) : (
            chatMessages.map((msg) => (
              <div key={msg.id} className="mb-4">
                <div className="flex items-baseline">
                  <span className="font-medium">{msg.sender}</span>
                  <span className="ml-2 text-xs text-gray-500">{msg.timestamp}</span>
                </div>
                <p className="mt-1 text-gray-700">{msg.content}</p>
              </div>
            ))
          )}
          <div ref={messagesEndRef} /> {/* Reference for scrolling */}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}