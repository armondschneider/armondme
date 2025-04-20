"use client";
import { useState } from "react";
import JobExperience from "./JobExperience";
import About from "./About";
import Explorations from "./Explorations";
import HoverEffect from "../modals/HoverEffect";
import LogoPopout from "../modals/LogoPopout";

export default function Intro() {
  const [activeTab, setActiveTab] = useState("Experience");
  const tabs = ["Experience", "Explorations", "About"];

  return (
    <section className="min-h-screen p-8">
      {/* Wrap text and tabs together */}
      <div className="max-w-2xl space-y-18">
        {/* Intro Text */}
        <div className="space-y-4">
          <h1 className="text-md font-semibold">
            <HoverEffect
              text="Armond Schneider"
              imageSrcs={[
                "/images/explorations/armond1.jpg",
                "/images/explorations/armond2.jpg",
              ]}
            />
          </h1>
          <p className="text-sm font-regular">
            I'm a product design engineer passionate about people and products.
            I design and build products that feel magical, yet simple and
            intuitive. I obsess over the smallest details and I like to make
            people feel something through my work.
          </p>
          <p className="text-sm font-regular">
            Currently at <a href="https://paradox.ai" target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              <LogoPopout text="Paradox" logoSrc="/images/paradox/paradoxLogo.png" />
            </a> designing career site solutions that make applying to jobs seamless.
          </p>
          <p className="text-sm font-regular">
            Also building <strong>Verse</strong>, a camera app that uses AI to
            generate poetry based on what it sees.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-regular px-4 py-3 rounded-2xl 
                ${
                  activeTab === tab
                    ? "bg-gray-200 text-black"
                    : "bg-white text-gray-500 hover:bg-gray-100 hover:cursor-pointer"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Conditional Content based on active tab */}
        {activeTab === "Experience" && (
          <div className="mx-auto max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <JobExperience
              imageSrc="/images/paradox/ParadoxThumbnail.jpg"
              title="Web UI Designer at Paradox"
              description="Reimagined career site solutions that seamlessly integrate design with functionality."
              dateRange="2024 - Present"
            />
            <JobExperience
              imageSrc="/images/hause/hauseThumbnail.jpg"
              title="UI Designer at Hause"
              description="Focused on redefining how digital and physical art is showcased and sold..."
              dateRange="2022 - 2023"
            />
          </div>
        )}

        {activeTab === "Explorations" && (
          <div className="mx-auto max-w-6xl mt-8 grid grid-cols-1">
            <Explorations />
          </div>
        )}

        {activeTab === "About" && (
          <div className="mx-auto max-w-6xl mt-8 grid grid-cols-1">
            <About />
          </div>
        )}
      </div>
    </section>
  );
}
