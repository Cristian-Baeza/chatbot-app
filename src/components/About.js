import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100">
      <h2 className="text-3xl font-retro mb-4">About This ChatBot</h2>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        This Medical ChatBot is designed to provide assistance and information on a variety of health-related topics.
        It leverages advanced AI to understand and respond to your queries in a conversational manner.
        Please note that this is not a replacement for professional medical advice.
      </p>
    </div>
  );
};

export default About;
