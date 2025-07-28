"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Paradox() {
  return (
    <section className="min-h-screen p-8 sm:p-8 flex">
      <motion.div 
        className="mx-auto space-y-8 text-left max-w-2xl"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4, exase: "easeOut" }}
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
          
          <h1 className="text-sm font-medium">Web UI Designer at Paradox</h1>
          
          <p className="text-sm font-regular">
            At Paradox, while working on designing career sites for clients I also focus on our ui component library, plug and play pieces that let 
            designers spin up career-site sections in a flash while staying consistent and accessible. I also prototype micro-interactions so every job 
            list or site section feels smooth, intuitive, and just a bit playful. When big ideas hit the table, I dive into proof-of-concepts with developers 
            and stakeholders, tackling tricky ui puzzles and testing bold concepts to keep our product fresh and innovative.
          </p>
          
          <p className="text-sm font-regular">
            Read how I helped{" "}
            <a
              href="https://www.paradox.ai/case-studies/trugreen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline hover:text-gray-600"
            >
              TruGreen save $1.8M with a new career site
            </a>
            .
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-4 pt-8">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/images/paradox/paradox1.jpg"
                alt="Job application interface design"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Career Portal */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/images/paradox/paradox2.jpg"
                alt="Career portal interface"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Filter Interface */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/images/paradox/paradox3.jpg"
                alt="Job filter interface"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/images/paradox/paradox4.jpg"
                alt="Job listings interface"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Additional Designs */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/images/paradox/paradox5.jpg"
                alt="Additional interface design"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Interactive Demo Video */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <video 
                src="/images/paradox/paradox6.mp4"
                className="w-full h-auto" 
                autoPlay
                playsInline
                muted
                loop
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* More Designs */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <img
                src="/images/paradox/paradox7.jpg"
                alt="More interface designs"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Final Video Demo */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <video 
                src="/images/paradox/paradox8.mp4"
                className="w-full h-auto" 
                autoPlay
                playsInline
                muted
                loop
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}