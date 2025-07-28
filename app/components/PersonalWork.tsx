"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PersonalWork() {
  return (
    <section className="min-h-screen p-8 sm:p-8 flex">
      <motion.div
        className="mx-auto space-y-8 text-left max-w-2xl"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Back
            </Link>
          </div>

          <h1 className="text-md font-medium">Personal Explorations</h1>

          <p className="text-sm font-regular">
            A collection of side projects, design explorations, and personal
            experiments. These projects allow me to explore new ideas, test
            emerging technologies, and push creative boundaries without
            constraints. From interactive prototypes to design systems, these
            pieces represent my passion for continuous learning and innovation
            in design and development.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-4 pt-8">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex1.jpg"
              alt="Job application interface design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex2.jpg"
              alt="Career portal interface"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex3.jpg"
              alt="Job filter interface"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <video
              src="/images/explorations/ex4.mp4"
              className="w-full h-auto"
              autoPlay
              playsInline
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex5.jpg"
              alt="Personal exploration design"
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex6.jpg"
              alt="Personal exploration design"
              className="w-full h-auto"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <video
              src="/images/explorations/ex7.mp4"
              className="w-full h-auto"
              autoPlay
              playsInline
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex9.jpg"
              alt="Personal exploration design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex10.jpg"
              alt="Personal exploration design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex11.jpg"
              alt="Personal exploration design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex12.jpg"
              alt="Personal exploration design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/explorations/ex13.jpg"
              alt="Personal exploration design"
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
