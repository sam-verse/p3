import React from 'react';

export function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-primary via-primary-orange to-primary-yellow p-8 rounded-xl text-white mb-8">
      <h1 className="text-4xl font-bold mb-2">Welcome to REConnect!</h1>
      <p className="text-lg opacity-90">
        Your hub for academic collaboration and networking
      </p>
    </div>
  );
}