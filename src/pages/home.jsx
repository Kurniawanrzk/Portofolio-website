import BackgroundAnimation from "../components/BackgroundAnimation";
import CertificateSection from "../components/certificateSection";
import HeroSection from "../components/heroSection";
import ProjectSection from "../components/projectSection";
import '../assets/style/home/heroSection.css'
import '../assets/style/home/projectSection.css'
import '../assets/style/home/certificateSection.css'
import '../assets/style/home/techSection.css'
import '../assets/style/home/animationBackground.css'
import '../assets/style/header.css'
import '../assets/style/home/socialSection.css'
import '../assets/style/home/mobile.css'
import TechSection from "../components/techSection";
import SocialSection from "../components/socialSection";
export default function Home() {
  return (
    <>
      <div 
      className="hero-section-container">
        <HeroSection />
      </div>
    
      <div
      id="project-sec"
      className="project-section-container">
        <BackgroundAnimation />
        <ProjectSection />
      </div>

      <div
      className="certificate-section-container">
        <BackgroundAnimation />
        <CertificateSection />
      </div>
      
      <div
      className="tech-section-container"
      >
        <BackgroundAnimation />
        <TechSection />
      </div>

      <div
      className="social-section-container"
      >
        <SocialSection />
      </div>

      <div
      className="footer"
      >
          <p>Created By Kurnaiwan Rizki Trinanta Sembiring Himself.</p>
      </div>
    </>
  );
}
