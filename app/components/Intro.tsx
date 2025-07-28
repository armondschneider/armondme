"use client";
import JobExperience from "./JobExperience";
import HoverEffect from "../modals/HoverEffect";

export default function Intro() {
  return (
    <section className="min-h-screen p-2 sm:p-2 flex">
      <div className="mx-auto space-y-18 text-left">
        {/* Intro Text */}
        <div className="space-y-4">
          <h1 className="text-md font-medium">
            <HoverEffect
              text="Armond Schneider"
              imageSrcs={["/images/armond1.jpg", "/images/armond2.jpg"]}
            />
          </h1>
          <p className="text-sm font-regular">
            I'm a software design engineer building intuitive, organic interfaces. I love crafting tools for designers and developers, and I obsess over how every interaction looks, feels, and behaves.
          </p>
          <p className="text-sm font-regular">
            Currently at{" "}
            <a
              href="https://paradox.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-gray-600"
            >
              Paradox
            </a>{" "}
            designing career site solutions that make applying to jobs seamless.
          </p>
          <p className="text-sm font-regular">
            Also building{" "}
            <a
              href="https://github.com/armondschneider/interactionkit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-gray-600"
            >
              InteractionKit
            </a>{" "}
            a React component library for designers and builders.
          </p>

          <section>
            <hr className="border-t border-gray-200 my-4" />
            <h2 className="pt-6 text-sm font-medium">Experience</h2>
            <div>
              
              <JobExperience />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
