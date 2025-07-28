import JobExperienceDetail from '../../components/JobExperienceDetail';

// Generate static params for all work pages
export function generateStaticParams() {
  return [
    { id: 'paradox' },
    { id: 'dump' },
    { id: 'hause' },
    { id: 'personal' }
  ];
}

export default function WorkDetailPage() {
  return <JobExperienceDetail />;
}
