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
    <div className="max-w-md mx-auto overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-66">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-md font-medium text-gray-900">{title}</h2>
        <p className="text-md font-regular text-gray-900">{description}</p>
        <p className="text-md font-regular text-gray-400">{dateRange}</p>
      </div>
    </div>
  );
}