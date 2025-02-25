import CommunityDomains from '../components/community/CommunityDomains';

const CommunityPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 px-4">Community Hub</h1>
        <CommunityDomains />
        {/* Other community sections */}
      </div>
    </div>
  );
};

export default CommunityPage; 