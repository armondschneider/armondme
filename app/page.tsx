import JobExperience from './components/JobExperience';
import Intro from './components/Intro';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="p-8 px-8 max-w-6xl mx-auto">
      <Intro />
      <Footer />
    </main>
  );
}