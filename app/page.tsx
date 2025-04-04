import JobExperience from './components/JobExperience';
import Intro from './components/Intro';

export default function Home() {
  return (
    <main className="p-8">
      {/* Intro Section */}
      <Intro></Intro>
      <JobExperience
        imageSrc="/images/paradox/ParadoxThumbnail.jpg"
        title="Web UI Designer at Paradox"
        description="Reimagined and led the creation of seamless, reusable components for career sites used by millions of users."
        dateRange="2024 - Present"
      />
    </main>
  );
}