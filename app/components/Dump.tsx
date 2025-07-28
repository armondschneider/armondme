"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Dump() {
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
            Product Design, Design Engineer at Dump
          </h1>

          <p className="text-sm font-regular">
            At Dump, I wore a ton of hats as the founding product
            designer. I owned everything about the product’s UX and visuals,
            from the first sketch to launch. I focused hard on smoothing out the
            onboarding so people didn’t bounce right away. I worked hand-in-hand
            with engineers, making sure the interface felt fun but still clear,
            and we pulled off launching both mobile and desktop in under three
            months. I also jumped into product architecture and wrote up
            front-end handoffs that shaved about 30% off dev time. Basically, I
            was in the thick of it from start to finish.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-4 pt-8">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/dump/dump1.jpg"
              alt="Dump social media platform design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/dump/dump2.jpg"
              alt="Dump user interface design"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/dump/dump3.jpg"
              alt="Dump mobile interface"
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <img
              src="/images/dump/dump4.jpg"
              alt="Dump final product design"
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
