import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StrategicAlignment } from "@/components/sections/StrategicAlignment";
import { Timeline } from "@/components/sections/Timeline";
import { Requirements } from "@/components/sections/Requirements";
import { Benefits } from "@/components/sections/Benefits";
import { FAQ } from "@/components/sections/FAQ";
import { Ticker } from "@/components/sections/Ticker";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Ticker />
        <StrategicAlignment />
        <Timeline />
        <Requirements />
        <Benefits />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
