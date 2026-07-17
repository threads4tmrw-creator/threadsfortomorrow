import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Volunteer from "@/components/Volunteer";
import StartChapter from "@/components/StartChapter";
import Newsletter from "@/components/Newsletter";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Events />
        <Volunteer />
        <StartChapter />
        <Newsletter />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
