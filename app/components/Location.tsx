"use client";
import React, { useEffect, useState } from "react";

export default function Location() {
  const [location, setLocation] = useState<string>("...");

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const city = data.city || "Unknown City";
        const region = data.region || "";
        setLocation(`${city}${region ? `, ${region}` : ""}`);
      } catch (error) {
        console.error("Error fetching location:", error);
        setLocation("Unknown location");
      }
    }

    fetchLocation();
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <p className="text-sm">Last visitor from {location}</p>
    </div>
  );
}
