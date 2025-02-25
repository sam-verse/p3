{domains.map((domain) => (
  <div key={domain.id} className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      {/* Domain content */}
      
      {/* Direct link button */}
      <a
        href={domain.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Join Community
      </a>
    </div>
  </div>
))} 