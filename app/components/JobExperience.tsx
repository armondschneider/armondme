"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const experiences = [
  {
    id: 'paradox',
    company: 'Paradox',
    role: 'Web UI Designer',
    description: 'Currently designing career site components to increase design time. Improving job list user interface.',
    period: 'March 2024 - Present',
    image: '/images/paradox/paradoxThumbnail.jpg',
  },
  {
    id: 'dump',
    company: 'Dump',
    role: 'Product Designer, Design Engineer',
    description: 'Worked on a new social media platform, focusing on design and partnered with engineering',
    period: 'April 2023 – February 2024',
    image: '/images/dump/dumpThumbnail.jpg',
  },
  {
    id: 'hause',
    company: 'Hause',
    role: 'Web UI Designer',
    description: 'Co-led design and development of a digital art discovery platform, balancing early-stage exploration with hands-on implementation using React and Tailwind.',
    period: 'January 2022 – April 2023',
    image: '/images/hause/hauseThumbnail.jpg',
  },
  {
    id: 'personal',
    company: 'Personal Explorations',
    role: 'Personal Explorations',
    description: 'Side projects, explorations, and personal experiments in design and development.',
    period: 'Ongoing',
    image: '/images/explorations/ex8.jpg',
  }
];

export default function JobExperience() {
  return (
    <div className="space-y-18">
      {experiences.map((exp) => {
        const content = (
          <div className="space-y-2 mt-6">
            <p className="text-sm font-medium">
              {exp.id === 'personal' ? exp.role : `${exp.role} at ${exp.company}`}
            </p>
            <p className="text-sm text-slate-700">{exp.description}</p>
            <p className="text-sm text-slate-700">{exp.period}</p>
            <div className="mt-4 overflow-hidden w-full rounded-xl">
              <motion.div
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  className="w-full h-auto border border-gray-200 rounded-xl"
                  src={exp.image}
                  alt={`${exp.company} work`}
                />
              </motion.div>
            </div>
          </div>
        );

        if (exp.id === 'paradox') {
          return (
            <Link key={exp.id} href="/work/paradox" className="block cursor-pointer">
              {content}
            </Link>
          );
        }

        if (exp.id === 'dump') {
          return (
            <Link key={exp.id} href="/work/dump" className="block cursor-pointer">
              {content}
            </Link>
          );
        }

        if (exp.id === 'hause') {
          return (
            <Link key={exp.id} href="/work/hause" className="block cursor-pointer">
              {content}
            </Link>
          );
        }

        if (exp.id === 'personal') {
          return (
            <Link key={exp.id} href="/work/personal" className="block cursor-pointer">
              {content}
            </Link>
          );
        }

        return (
          <div key={exp.id}>
            {content}
          </div>
        );
      })}
    </div>
  );
}