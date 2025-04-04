"use client"; // if you're using Next.js App Router

import { useState } from "react";

export default function Intro() {
  const [activeTab, setActiveTab] = useState("Experience");

  const tabs = ["Experience", "Explorations", "About"];

  return (
    <section className="min-h-screen flex flex-col items-center p-8 space-y-8">
      {/* Intro Text */}
      <div className="max-w-2xl text-center space-y-4">
        <h1 className="text-md font-semibold">Armond Schneider</h1>
        <p>
          I'm a product design engineer passionate about people and products.
          Having started from anywhere but linear, I am fascinated by how other
          people think, feel, and behave.
        </p>
        <p>
          Currently at <a className="underline font-semibold">Paradox</a> designing career site solutions
          that make applying to jobs seamless.
        </p>
        <p>
          Also building <a className="underline font-semibold">Verse</a>, a camera app that uses AI to
          generate poetry based on what it sees.
        </p>
      </div>

      {/* Pills */}
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 rounded-2xl 
              ${
                activeTab === tab
                  ? "bg-gray-200 text-black"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

    </section>
  );
}