
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import VaxScedule from "../components/VaxScedule/VaxScedule";

export default function Home() {
  return (
    <>
    <Hero />
    <InfoSection />
    <VaxScedule />
    </>
  );
}
