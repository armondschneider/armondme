"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Types
type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  fullDescription: string[];
  images?: string[];
  videos?: string[];
  link: string;
  caseStudy?: {
    text: string;
    url: string;
  };
  // For backward compatibility
  image?: string;
};

type ExperienceData = {
  [key: string]: Experience;
};

// Mock data - replace with your actual data fetching
const experienceData: ExperienceData = {
  paradox: {
    company: 'Paradox',
    role: 'Web UI Designer',
    period: 'Present',
    description: 'Designing career site components to increase design time. Improved job list user interface.',
    fullDescription: [
      'At Paradox, while working on designing career sites for clients I also focus on our UI component library, plug and play pieces that let designers spin up career-site sections in a flash while staying consistent and accessible. I also prototype micro-interactions so every job list or site section feels smooth, intuitive, and just a bit playful. When big ideas hit the table, I dive into proof-of-concepts with developers and stakeholders, tackling tricky UI puzzles and testing bold concepts to keep our product fresh and innovative.'
    ],
    images: [
      '/images/paradox/paradox1.jpg',
      '/images/paradox/paradox2.jpg',
      '/images/paradox/paradox3.jpg',
      '/images/paradox/paradox4.jpg',
      '/images/paradox/paradox5.jpg',
      '/images/paradox/paradox7.jpg'
    ],
    videos: [
      '/images/paradox/paradox6.mp4',
      '/images/paradox/paradox8.mp4'
    ],
    link: 'https://paradox.ai',
    caseStudy: {
      text: 'Read how I helped TruGreen save $1.8M with a new career site.',
      url: '#'
    }
  },
  dump: {
    company: 'Dump',
    role: 'Product Designer, Design Engineer',
    period: 'Present',
    description: 'Designed, explored, and assisted engineers in building a new social media platform.',
    fullDescription: [
      'Led the end-to-end design process for a new social media platform from concept to launch.',
      'Created interactive prototypes and conducted user testing to validate design decisions.',
      'Worked closely with engineering to implement responsive and performant UI components.',
      'Established design patterns and documentation to ensure consistency across the product.'
    ],
    images: ['/images/dump/dumpThumbnail.jpg'],
    link: '#'
  },
  hause: {
    company: 'Hause',
    role: 'Web UI Designer',
    period: 'Present',
    description: 'Designed and implemented user interfaces for real estate platform.',
    fullDescription: [
      'Created modern and intuitive interfaces for property listings and search functionality.',
      'Collaborated with the product team to define user flows and information architecture.',
      'Implemented responsive designs that work seamlessly across all device sizes.',
      'Worked with the development team to ensure pixel-perfect implementation of designs.'
    ],
    images: ['/images/hause/hauseThumbnail.jpg'],
    link: '#'
  }
};

export default function JobExperienceDetail() {
  const params = useParams();
  const experienceId = params?.id as string;
  const experience = experienceData[experienceId as keyof typeof experienceData];

  if (!experience) {
    return (
      <div className="min-h-screen p-2 sm:p-2 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-medium mb-2">Experience not found</h2>
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-2 sm:p-2 flex">
      <div className="mx-auto space-y-8 max-w-2xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">{experience.role}</h1>
            <Link 
              href="/" 
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              ← Back
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">{experience.company}</span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-600">{experience.period}</span>
          </div>

          <div className="pt-4">
            <p className="text-sm mb-6">{experience.description}</p>
            
            <div className="space-y-4">
              {experience.fullDescription.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-xs text-gray-500 mr-2 mt-1">•</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Images Grid */}
        {((experience.images && experience.images.length > 0) || (experience.videos && experience.videos.length > 0)) && (
          <div className="space-y-8 pt-8">
            {/* Images */}
            {experience.images?.map((img: string, index: number) => (
              <div key={`img-${index}`} className="overflow-hidden rounded-xl border border-gray-200">
                <img
                  src={img}
                  alt={`${experience.company} work ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
            
            {/* Videos */}
            {experience.videos?.map((video: string, index: number) => (
              <div key={`video-${index}`} className="overflow-hidden rounded-xl border border-gray-200">
                <video 
                  src={video} 
                  className="w-full h-auto" 
                  controls 
                  playsInline
                  muted
                  loop
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Link */}
        {experience.caseStudy && (
          <div className="pt-6">
            <a
              href={experience.caseStudy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              {experience.caseStudy.text} →
            </a>
          </div>
        )}

        {/* Company Link */}
        {experience.link && (
          <div className="pt-4">
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Visit {experience.company} →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
