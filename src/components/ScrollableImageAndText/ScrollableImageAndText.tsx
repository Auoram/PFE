import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './ScrollableImageAndText.module.css';
import Button from '../Button/Button';

function ScrollableImageAndText() {
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
    <div className="bg-green-5 bg-opacity-25 xl:mx-28 my-auto px-4 justify-center gap-y-20 sm:py-12 lg:px-8 pb-32 lg:py-16">
      <section ref={(ref) => (sectionsRef.current[0] = ref)} className={`flex max-container padding-container items-center gap-25 m-10 ${isVisible[0] ? styles.show : ''} ${styles.cls}`}>
        <div className="relative z-20 flex flex-1 flex-col gap-7">
          <Image src="/baby_1.jpg" alt='image-1' width={400} height={1350}/>
        </div>
        <div className="relative flex flex-1 flex-col gap-7 sm:ml-20">
          <h1 className="lg:regular-32 text-green-50 regular-24">Set up your account<br/> in minutes</h1>
          <p className="lg:regular-18 text-grey-60 sm:regular-16">Begin by providing basic information about yourself and your child. KidVax guides you through the process step by step, making it easy to create an account for your family's needs.</p>
          <Button type='button' title='Sign Up' variant='btn_dark_green' href='/signin' />
        </div>
      </section>

      <section ref={(ref) => (sectionsRef.current[1] = ref)} className={`flex max-container padding-container items-center gap-25 m-10 ${isVisible[1] ? styles.show : ''} ${styles.cls}`}>
        <div className="relative z-20 flex flex-1 flex-col gap-7">
          <Image src="/baby_2.jpg" alt='image-2' width={400} height={1350}/>
        </div>
        <div className="relative flex flex-1 flex-col gap-7 sm:ml-20">
          <h1 className="lg:regular-32 text-green-50 regular-24">Choose Your Child's <br/> Vaccination Schedule</h1>
          <p className="lg:regular-18 text-grey-60 regular-16">Once you finish the first two steps, you'll have the flexibility to select and customize your child's vaccination schedule.</p>
          <Button type='button' title='Log In' variant='btn_dark_green' href='/login' />
        </div>
      </section>

      <section ref={(ref) => (sectionsRef.current[2] = ref)} className={`flex max-container padding-container items-center gap-25 m-10 ${isVisible[2] ? styles.show : ''} ${styles.cls}`}>
        <div className="relative z-20 flex flex-1 flex-col gap-7">
          <Image src="/Baby_3.jpg" alt='image-3' width={400} height={1350}/>
        </div>
        <div className="relative flex flex-1 flex-col gap-7 sm:ml-20">
          <h1 className="lg:regular-32 text-green-50 sm:regular-24">Access Personalized <br/> Reminders and Resources</h1>
          <p className="lg:regular-18 text-grey-60 sm:regular-16">Stay on top of your child's immunization schedule with personalized reminders. Additionally, unlock a wealth of educational resources.</p>
          <Button type='button' title='Log In' variant='btn_dark_green' href='/login' />
        </div>
      </section>
    </div>
  );
}

export default ScrollableImageAndText;











