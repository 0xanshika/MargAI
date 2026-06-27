import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import UseCases from "../components/UseCases/UseCases";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="stickyNavbar"><Navbar /></div>
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;