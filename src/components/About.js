import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full p-4 text-center text-white mt-10">
      <h2 className="text-3xl font-retro mb-4 bg-black bg-opacity-90 rounded-lg border-2 border-red-500 p-2">About This ChatBot</h2>
      <br />
      <br />
      <p className="text-lg max-w-2xl font-retro bg-black bg-opacity-90 rounded-lg px-4 py-2 border-2 border-red-500">
        This chatbot was developed as part of an internal AI learning cohort at 8th Light,
        using a Retrieval-Augmented Generation (RAG) AI model that leverages a clinical
        trials database to provide insightful and relevant information. Built entirely
        by following step-by-step instructions from ChatGPT, the app’s frontend served
        as an immersive learning experience, leading developers through a rabbit hole
        of discovery in AI UI design and frontend implementation. This project embodies 8th
        Light’s commitment to continuous learning and innovation within the AI and
        software development fields.
      </p>
    </div>
  );
};

export default About;
