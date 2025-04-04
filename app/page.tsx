import JobExperience from './components/JobExperience';
import Intro from './components/Intro';
import Location from './components/Location';

export default function Home() {
  return (
    <main className="p-8">
      {/* Intro Section */}
      <Intro></Intro>
      <Location></Location>
    </main>
  );
}