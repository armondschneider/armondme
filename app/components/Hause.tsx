"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hause() {
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

          <h1 className="text-sm font-medium">
            User Interface Designer at Hause
          </h1>

          <p className="text-sm font-regular">
            Hause was all about mixing creativity with hands-on building. I
            co-led the design and dev of a digital art discovery platform, so I
            got to flex both early-stage brainstorming and actual
            implementation—mostly with React and Tailwind. I was in the code a
            lot, focusing on front-end and working super closely with engineers
            to make sure handoffs were smooth and nothing got lost in
            translation.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-4 pt-8">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/hause/hause1.jpg"
              alt="Hause digital art platform design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/hause/hause2.jpg"
              alt="Hause user interface design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/hause/hause3.jpg"
              alt="Hause platform interface"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/hause/hause4.jpg"
              alt="Hause design system"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/hause/hause5.jpg"
              alt="Hause final implementation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
