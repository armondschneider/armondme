import Image from 'next/image';

interface JobExperienceProps {
  imageSrc: string; 
  title: string;
  description: string;
  dateRange: string;
}

export default function JobExperience({
  imageSrc,
  title,
  description,
  dateRange,
}: JobExperienceProps) {
  return (
    <div className="w-full max-w-[600px] overflow-hidden">
      {/* Image container */}
      <div className="relative w-full h-[240px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
        {/* Removed arrow buttons */}
      </div>
      {/* Text Content */}
      <div className="mt-6 space-y-2">
        <h2 className="text-sm font-medium text-gray-900">{title}</h2>
        <p className="text-sm text-gray-900">{description}</p>
        <p className="text-sm text-gray-400">{dateRange}</p>
      </div>
    </div>
  );
}