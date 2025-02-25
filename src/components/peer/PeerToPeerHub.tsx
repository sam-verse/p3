import React, { useState } from 'react';
import { User, Users, MessageSquare, BookOpen, Plus, Info, X } from 'lucide-react';

const PeerToPeerHub: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  // WhatsApp community links with domains and detailed descriptions
  const communityDomains = [
    {
      id: 'design',
      name: 'Design',
      description: 'Connect with UI/UX designers and share creative ideas',
      link: 'https://chat.whatsapp.com/HWy3TCre3153YwMkm8rQWz',
      icon: '🎨',
      members: 128,
      detailedDescription: `
        <h3>Design Community</h3>
        <p>Our design community brings together UI/UX designers, graphic artists, and creative thinkers from all experience levels.</p>
        
        <h4>What we discuss:</h4>
        <ul>
          <li>User interface design principles and patterns</li>
          <li>User experience research and methodologies</li>
          <li>Design tools like Figma, Adobe XD, and Sketch</li>
          <li>Design systems and component libraries</li>
          <li>Latest design trends and innovations</li>
        </ul>
        
        <h4>Community activities:</h4>
        <ul>
          <li>Weekly design challenges and feedback sessions</li>
          <li>Portfolio reviews and career advice</li>
          <li>Resource sharing (templates, UI kits, icons)</li>
          <li>Design sprint collaborations</li>
        </ul>
        
        <p>Whether you're a beginner looking to learn the fundamentals or an experienced designer wanting to share knowledge, our community has something for everyone.</p>
      `
    },
    {
      id: 'gamedev',
      name: 'Game Development',
      description: 'Discuss game development techniques and collaborate on projects',
      link: 'https://chat.whatsapp.com/CHh5Mh8qJ7bHAPiLj2xwyd',
      icon: '🎮',
      members: 95,
      detailedDescription: `
        <h3>Game Development Community</h3>
        <p>Join fellow game developers, artists, designers, and enthusiasts in creating interactive experiences and games.</p>
        
        <h4>What we cover:</h4>
        <ul>
          <li>Game engines (Unity, Unreal, Godot)</li>
          <li>Game design principles and mechanics</li>
          <li>2D and 3D art creation for games</li>
          <li>Game programming and optimization</li>
          <li>Level design and world-building</li>
        </ul>
        
        <h4>Community activities:</h4>
        <ul>
          <li>Game jams and collaborative projects</li>
          <li>Code reviews and problem-solving sessions</li>
          <li>Asset sharing and resource recommendations</li>
          <li>Play-testing and feedback rounds</li>
        </ul>
        
        <p>From simple 2D games to complex 3D worlds, our community supports developers at all skill levels. Join us to turn your game ideas into reality!</p>
      `
    },
    {
      id: 'webdev',
      name: 'Web Development',
      description: 'Share web development resources and solve coding challenges',
      link: 'https://chat.whatsapp.com/CHh5Mh8qJ7bHAPiLj2xwyd', // Replace with actual link
      icon: '💻',
      members: 210,
      detailedDescription: `
        <h3>Web Development Community</h3>
        <p>A community of frontend and backend developers working with modern web technologies.</p>
        
        <h4>Technologies we discuss:</h4>
        <ul>
          <li>Frontend frameworks (React, Vue, Angular)</li>
          <li>Backend technologies (Node.js, Python, PHP)</li>
          <li>Databases (SQL, NoSQL, GraphQL)</li>
          <li>Web design and responsive layouts</li>
          <li>Performance optimization and accessibility</li>
        </ul>
        
        <h4>Community activities:</h4>
        <ul>
          <li>Code challenges and hackathons</li>
          <li>Project collaboration opportunities</li>
          <li>Mentorship programs for beginners</li>
          <li>Tech talk sessions and tutorials</li>
        </ul>
        
        <p>Whether you're building your first website or architecting complex web applications, our community provides support, resources, and collaboration opportunities.</p>
      `
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      description: 'Explore artificial intelligence and machine learning concepts',
      link: 'https://chat.whatsapp.com/HWy3TCre3153YwMkm8rQWz', // Replace with actual link
      icon: '🤖',
      members: 156,
      detailedDescription: `
        <h3>AI & Machine Learning Community</h3>
        <p>Connect with data scientists, ML engineers, and AI enthusiasts to explore the cutting edge of artificial intelligence.</p>
        
        <h4>Topics we cover:</h4>
        <ul>
          <li>Machine learning algorithms and models</li>
          <li>Deep learning and neural networks</li>
          <li>Natural language processing</li>
          <li>Computer vision and image processing</li>
          <li>Reinforcement learning and AI ethics</li>
        </ul>
        
        <h4>Community activities:</h4>
        <ul>
          <li>ML model implementation challenges</li>
          <li>Dataset sharing and analysis</li>
          <li>Research paper discussions</li>
          <li>AI project collaborations</li>
        </ul>
        
        <p>From theoretical concepts to practical implementations, our community helps members understand and apply AI & ML techniques to real-world problems.</p>
      `
    }
  ];

  const openDetailModal = (id: string) => {
    setOpenModal(id);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeDetailModal = () => {
    setOpenModal(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center sm:text-left">Peer-to-Peer Learning Hub</h1>
      
      {/* Hub Introduction */}
      <section className="mb-16">
        <div className="bg-blue-50 p-6 sm:p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Connect with Peers & Learn Together</h2>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl">
            Our peer-to-peer learning hub allows you to connect with fellow students,
            share knowledge, and grow together. Join domain-specific communities,
            find study partners, or participate in collaborative projects.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <User className="h-8 w-8 text-blue-500 mb-3" />
              <span className="text-sm font-medium text-center">Find Mentors</span>
            </div>
            <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-8 w-8 text-blue-500 mb-3" />
              <span className="text-sm font-medium text-center">Join Groups</span>
            </div>
            <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MessageSquare className="h-8 w-8 text-blue-500 mb-3" />
              <span className="text-sm font-medium text-center">Ask Questions</span>
            </div>
            <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <BookOpen className="h-8 w-8 text-blue-500 mb-3" />
              <span className="text-sm font-medium text-center">Share Resources</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Community Domains */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Join Our WhatsApp Communities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {communityDomains.map((domain) => (
            <div key={domain.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{domain.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{domain.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 flex-grow">{domain.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-5 w-5 mr-1" />
                  {domain.members} members
                </div>
                
                {/* Button Row */}
                <div className="flex gap-3 mt-auto">
                  {/* View More Button */}
                  <button
                    onClick={() => openDetailModal(domain.id)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <Info className="h-5 w-5 mr-2" />
                    <span>View More</span>
                  </button>
                  
                  {/* Join Community Button */}
                  <a
                    href={domain.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    <span>Join</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Other Sections with Consistent Styling */}
      <div className="grid gap-10 md:grid-cols-2 mb-16">
        {/* Study Partners Section */}
        <section className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Find Study Partners</h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 h-full flex flex-col">
            <p className="text-gray-700 mb-6 flex-grow">
              Looking for someone to study with? Connect with peers who are working on similar subjects or projects.
              Get help, share knowledge, and stay motivated together.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto self-start">
              Find Partners
            </button>
          </div>
        </section>
        
        {/* Peer Projects Section */}
        <section className="h-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Collaborative Projects</h2>
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 h-full flex flex-col">
            <p className="text-gray-700 mb-6 flex-grow">
              Join ongoing peer projects or start your own. Collaborate with others to build something amazing.
              Develop real-world skills while creating portfolio-worthy projects.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300 w-full sm:w-auto self-start">
              Explore Projects
            </button>
          </div>
        </section>
      </div>
      
      {/* Detail Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50" onClick={closeDetailModal}>
          <div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-3xl mr-3">
                  {communityDomains.find(d => d.id === openModal)?.icon}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {communityDomains.find(d => d.id === openModal)?.name}
                </h3>
              </div>
              <button 
                onClick={closeDetailModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full p-1"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="prose prose-sm sm:prose max-w-none" 
                dangerouslySetInnerHTML={{ 
                  __html: communityDomains.find(d => d.id === openModal)?.detailedDescription || ''
                }} 
              />
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={closeDetailModal}
                    className="sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2.5 px-4 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={communityDomains.find(d => d.id === openModal)?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeerToPeerHub;