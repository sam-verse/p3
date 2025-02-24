import React, { useState } from 'react';

// Domain data with images and descriptions
const domains = [
  { 
    id: 1, 
    name: 'Web Development', 
    description: 'Build websites and applications.', // Short description for card
    detailedDescription: 'Web development is the process of creating and maintaining websites and web applications, involving front-end (UI/UX design using HTML, CSS, JavaScript), back-end (server-side logic using Python, PHP, Node.js), and full-stack development. With businesses and individuals increasingly shifting to digital platforms, the demand for web developers is growing rapidly. Emerging trends such as Progressive Web Apps (PWAs), Artificial Intelligence (AI) integration, blockchain, voice search optimization, and cloud computing are revolutionizing the field. The scope of web development is vast, offering opportunities in e-commerce, SaaS platforms, cybersecurity, and interactive web experiences. The rise of low-code/no-code platforms, IoT integration, and the metaverse is further expanding possibilities, making web development an ever-evolving and high-demand career.', // Detailed description
    image: 'https://img.freepik.com/free-vector/web-site-development-programming-coding_107791-2187.jpg?t=st=1740395959~exp=1740399559~hmac=2d52704d74ed953e0b59264811848fbcac90dc62df00a18bbbed302a65472d7b&w=1380' 
  },
  { 
    id: 2, 
    name: 'App Development', 
    description: 'Create mobile applications.', 
    detailedDescription: 'App development is the process of designing and building mobile and web applications for various platforms, including Android, iOS, and cross-platform environments using technologies like Kotlin, Swift, Flutter, and React Native. With the increasing reliance on smartphones and digital services, the demand for mobile apps is higher than ever, spanning industries such as e-commerce, healthcare, finance, and entertainment. Emerging trends like AI-powered apps, 5G integration, augmented reality (AR), blockchain-based security, and cloud computing are shaping the future of app development. The rise of low-code/no-code platforms is also making app creation more accessible. With continuous advancements in technology, app development remains a highly lucrative and evolving field, offering endless career and business opportunities.', 
    image: 'https://img.freepik.com/free-vector/mobile-application-tupography-banner-with-mobile-device-symbols-flat-illustration_1284-29498.jpg?t=st=1740395986~exp=1740399586~hmac=6648124d48f2efe509c2cbf7f22e541c3f452b6e24a7ceb9c9f6d9290f5a58d5&w=1380' 
  },
  { 
    id: 3, 
    name: 'Graphic Design', 
    description: 'Design and Creativity.', 
    detailedDescription: 'Graphic design is the art of visually communicating ideas through typography, imagery, and layout using tools like Adobe Photoshop, Illustrator, and Figma. It plays a crucial role in branding, marketing, web design, and digital content creation across industries such as advertising, media, and e-commerce. With the rise of digitalization, the demand for graphic designers is growing in UI/UX design, motion graphics, and social media content. Emerging trends like AI-driven design, 3D graphics, augmented reality (AR), and generative design are revolutionizing the field. As businesses increasingly focus on visual storytelling and user experience, graphic design continues to be a dynamic and highly sought-after profession with vast career opportunities.', 
    image: 'https://img.freepik.com/free-vector/graphic-designer-typographic-header-artist-creating-modern-advertisment-digital-drawing-product-design-concept-flat-illustration-vector_613284-2651.jpg?t=st=1740396411~exp=1740400011~hmac=e251a627d9168e6544ae778fc7ba132091d0ace8f10e25845c7e30cd0cc07653&w=1380' 
  },
  { 
    id: 4, 
    name: 'Machine Learning', 
    description: 'Explore algorithms.', 
    detailedDescription: 'Machine Learning (ML) is a branch of artificial intelligence (AI) that enables systems to learn from data and make predictions without explicit programming. It is widely used in various domains, including healthcare, finance, e-commerce, and autonomous systems, leveraging algorithms like deep learning, natural language processing (NLP), and computer vision. With advancements in big data, cloud computing, and AI-driven automation, the demand for ML professionals is rapidly increasing. Emerging trends such as explainable AI, federated learning, edge AI, and generative models are shaping the future of ML. As industries continue to adopt AI-powered solutions, machine learning remains a highly promising field with vast career opportunities and transformative potential.', 
    image: 'https://img.freepik.com/free-vector/difital-face-artificial-intelligence-concept-background_1017-18162.jpg?t=st=1740396059~exp=1740399659~hmac=9a5bd76cb7768f2c114ec63cc15ef0b6dfa9e5301eaf158592f2ba4b70508c6b&w=1800' 
  },
  { 
    id: 5, 
    name: 'Cybersecurity', 
    description: 'Protect systems from attacks.', 
    detailedDescription: 'Cybersecurity is the practice of protecting systems, networks, and data from cyber threats, ensuring confidentiality, integrity, and availability. With the rise of digital transformation, cybersecurity has become crucial in industries like finance, healthcare, and e-commerce to safeguard sensitive information from cyberattacks such as phishing, ransomware, and data breaches. Emerging trends like artificial intelligence (AI) in threat detection, zero-trust security models, blockchain for secure transactions, and quantum cryptography are reshaping the field. As cyber threats evolve, the demand for cybersecurity professionals continues to grow, making it a high-demand and future-proof career with vast opportunities in ethical hacking, cloud security, digital forensics, and risk management.', 
    image: 'https://img.freepik.com/free-vector/personal-data-protection-banner_107791-5275.jpg?t=st=1740396110~exp=1740399710~hmac=d65708f0dbd2ae0ffe3982a064c096dcf3f90f01f1d0c756970c084821d9a679&w=1800' 
  },
 
  { 
    id: 6, 
    name: 'Game Development', 
    description: 'Design and create games.', 
    detailedDescription: 'Game development is the process of designing, programming, and creating video games for various platforms, including PC, consoles, and mobile devices, using engines like Unity, Unreal Engine, and Godot. It combines elements of coding, 3D modeling, animation, and storytelling to deliver immersive gaming experiences. With the rise of augmented reality (AR), virtual reality (VR), cloud gaming, and AI-driven game mechanics, the industry is evolving rapidly. The demand for skilled game developers is increasing in areas like indie game development, AAA gaming, and metaverse experiences. As gaming technology advances and player engagement grows, game development remains a dynamic and lucrative career with limitless creative possibilities.', 
    image: 'https://img.freepik.com/free-vector/gamer-typographic-header-person-play-computer-video-game-esports-team-pro-streamer-virtual-championship-vector-illustration-cartoon-style_613284-2695.jpg?t=st=1740396603~exp=1740400203~hmac=dfadb3b974ee2975e623dd87dd719d2c5b44ad0438f49c10f50ba9c3cd959c81&w=1380' 
  },
];

export function PeerToPeerHub() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleCardClick = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Peer to Peer Hub</h1>
      <p className="mb-4">Welcome to the Peer to Peer Hub! Here you can connect with your peers.</p>

      {selectedDomain ? (
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-2xl font-semibold">{selectedDomain.name}</h2>
          <img src={selectedDomain.image} alt={selectedDomain.name} className="mt-4 rounded-lg w-full h-48 object-cover" />
          <p className="mt-2 text-gray-700">{selectedDomain.detailedDescription}</p>
          <div className="flex justify-between mt-4">
            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              Join P2P Community
            </button>
            <button 
              onClick={() => setSelectedDomain(null)} 
              className="text-gray-500 underline"
            >
              Back to Domains
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleCardClick(domain)}
            >
              <img src={domain.image} alt={domain.name} className="w-full h-32 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{domain.name}</h3>
              <p className="mt-2 text-gray-600">{domain.description}</p> {/* Short description for card */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 