'use client'
import React, { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';
import Button from '../../../components/Button/Button'
import Image from 'next/image'

function appointment() {
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
    <div>      
      <section className="max-container padding-container flex items-center gap-25 py-16 pb-32 md:gap-28 lg:py-28">
        <div className="relative z-20 flex flex-1 flex-col gap-8 xl:-1/2">
          <h1 className="bold-34 text-blue-40 lg:bold-46">Take appointment right now</h1>
          <p className="regular-18 mt-6 text-grey-60 xl:maw-w-[520]">
            The way to manage your appointment is written right bellow.
          </p>
         </div>
        <div className="relative flex flex-1 flex-col gap-7">
        <Image src="/child-visiting-the-pediatrician.png" alt='hero-img' height={592} width={457}/>
        </div>
      </section>
      <section ref={(ref) => (sectionsRef.current[0] = ref)} className={`bg-blue-25 justify-items-center items-center p-16 gap-25 ${isVisible[0] ? styles.show : ''} ${styles.cls}`}>
        <div className="flex flex-col gap-8 text-center sm:ml-20">
          <h1 className="text-green-50 regular-32">To take an appointment</h1>
          <p className="lg:regular-18 text-grey-60 sm:regular-16">click the button book now and fill the form.</p>
          <div className="flex justify-center">
            <Button type='button' title='Book Now' variant='btn_dark_green' href='/signin' />
          </div>
        </div>
      </section>
      <section ref={(ref) => (sectionsRef.current[1] = ref)} className={`justify-items-center items-center p-16 gap-25 ${isVisible[1] ? styles.show : ''} ${styles.cls}`}>
        <div className="flex flex-col gap-8 text-center sm:ml-20">
          <h1 className="text-green-50 regular-32">To cancel an appointment</h1>
          <p className="lg:regular-18 text-grey-60 sm:regular-16">click the button Cancel It and fill the form.</p>
          <div className="flex justify-center">
            <Button type='button' title='Cancel It' variant='btn_dark_green' href='/signin' />
          </div>
        </div>
      </section>
      <section ref={(ref) => (sectionsRef.current[2] = ref)} className={`bg-blue-25 justify-items-center items-center p-16 gap-25 ${isVisible[2] ? styles.show : ''} ${styles.cls}`}>
        <div className="flex flex-col gap-8 text-center sm:ml-20">
          <h1 className="text-green-50 regular-32">To reschedule an appointment</h1>
          <p className="lg:regular-18 text-grey-60 sm:regular-16">click the button Reschedule It and fill the form.</p>
          <div className="flex justify-center">
            <Button type='button' title='Reschedule It' variant='btn_dark_green' href='/signin' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default appointment