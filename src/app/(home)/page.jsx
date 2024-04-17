'use client'
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import Hero from "../../components/Hero/Hero";
import InfoSection from "../../components/InfoSection/InfoSection";
import VaxScedule from "../../components/VaxScedule/VaxScedule";
import Quote from "../../components/Quotes/Quote";
import styles from './page.module.css'

export default function Home() {
  const [isVisible, setIsVisible] = useState([true, false, false]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerSctBtm = window.innerHeight / 5 * 4;

      const newVisible = sectionsRef.current.map((sectionRef) => {
        const sctTop = sectionRef?.getBoundingClientRect().top || 0;
        return sctTop < triggerSctBtm;
      });

      setIsVisible(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <Hero />
    <section ref={(ref) => (sectionsRef.current[0] = ref)} className={`${isVisible[0] ? styles.show : ''} ${styles.cls}`}>
      <InfoSection />
    </section>
    <section ref={(ref) => (sectionsRef.current[1] = ref)} className={`${isVisible[1] ? styles.show : ''} ${styles.cls}`}>
      <VaxScedule />
    </section>
    <section ref={(ref) => (sectionsRef.current[2] = ref)} className={`${isVisible[2] ? styles.show : ''} ${styles.cls}`}>
      <Quote image="/playing.jpg" quote="Vaccines save lives; fear endangers them. it's a simple message parents need to keep hearing." owner="Jeffrey Kluger" />
    </section>
    </>
  );
}
