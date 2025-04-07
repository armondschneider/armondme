"use client";
import React from "react";
import Location from "./Location";

export default function Footer() {
  return (
    <footer className="items-left text-left text-sm text-gray-500">
      <div className="mx-auto max-w-6xl px-8">
        {/* socials */}
        <div className="mb-4 flex space-x-6 space-y-2 flex-wrap text-sm text-gray-500">
          <a
            href="mailto:armondschneider@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/armondschneider/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/armondme"
            aria-label="X (formerly Twitter)"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://www.threads.net/@armondme"
            aria-label="Threads"
            target="_blank"
            rel="noopener noreferrer"
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