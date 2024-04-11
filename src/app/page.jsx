
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import VaxScedule from "../components/VaxScedule/VaxScedule";
import Quote from "../components/Quotes/Quote";

export default function Home() {
  return (
    <>
    <Hero />
    <InfoSection />
    <VaxScedule />
    <Quote image="/playing.jpg" quote="Vaccines save lives; fear endangers them. it's a simple message parents need to keep hearing." owner="Jeffrey Kluger" />
    </>
  );
}
