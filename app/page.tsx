import HeroSection from "./components/HeroSection";
import AcheivementsSection from "./components/AchievementsSection"
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AcheivementsSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
