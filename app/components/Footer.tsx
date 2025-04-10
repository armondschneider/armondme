"use client";
import React from "react";
import Location from "./Location";

export default function Footer() {
  return (
    <footer className="pb-8 pt-8 px-8 max-w-6xl mx-auto text-left text-sm text-gray-500">
      <div>
        {/* socials */}
        <div className="mb-4 flex space-x-6 space-y-2 flex-wrap text-sm text-gray-500">
          <a
            href="mailto:armondschneider@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/armondschneider/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/armondme"
            aria-label="X (formerly Twitter)"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 hover:underline"
          >
            X
          </a>
          <a
            href="https://www.threads.net/@armondme"
            aria-label="Threads"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 hover:underline"
          >
            Threads
          </a>
        </div>
        <Location />
        <p className="mt-4">
          © {new Date().getFullYear()} Armond Schneider. All rights reserved.
        </p>
      </div>
    </footer>
  );
}