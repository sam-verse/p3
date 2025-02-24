import React from 'react';
import { Users } from 'lucide-react';

const groups = [
  {
    id: 1,
    name: 'Web Development',
    members: 128,
    description: 'Learn and collaborate on web development projects',
  },
  {
    id: 2,
    name: 'AI/ML Enthusiasts',
    members: 95,
    description: 'Explore artificial intelligence and machine learning',
  },
  {
    id: 3,
    name: 'Competitive Programming',
    members: 156,
    description: 'Practice algorithmic problem solving',
  },
];

export function RecommendedGroups() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Recommended Groups</h2>
      <div className="space-y-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">{group.name}</h3>
              <div className="flex items-center text-gray-600 text-sm">
                <Users className="w-4 h-4 mr-1" />
                {group.members}
              </div>
            </div>
            <p className="text-gray-600 text-sm">{group.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}