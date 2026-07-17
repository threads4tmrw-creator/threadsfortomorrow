import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Events from "@/components/Events";
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
        <Impact />
        <Events />
        <StartChapter />
        <Newsletter />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
