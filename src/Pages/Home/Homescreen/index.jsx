import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
// import MySkills from "../MySkills";s
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <MySkills /> */}
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
