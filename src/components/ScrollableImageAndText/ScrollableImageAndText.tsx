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
        <div className="relative flex flex-1 flex-col gap-7">
          <h1 className="regular-32 text-green-50">Set up your account<br/> in minutes</h1>
          <p className="regular-18 text-grey-60">Explain how to do this step clearly.</p>
          <Button type='button' title='Sign In' variant='btn_dark_green' href='/signin' />
        </div>
      </section>

      <section ref={(ref) => (sectionsRef.current[1] = ref)} className={`flex max-container padding-container items-center gap-25 m-10 ${isVisible[1] ? styles.show : ''} ${styles.cls}`}>
        <div className="relative z-20 flex flex-1 flex-col gap-7">
          <Image src="/baby_2.jpg" alt='image-2' width={400} height={1350}/>
        </div>
        <div className="relative flex flex-1 flex-col gap-7">
          <h1 className="regular-32 text-green-50">Step number 2<br/> in minutes</h1>
          <p className="regular-18 text-grey-60">Explain how to do this step clearly.</p>
          <Button type='button' title='Sign In' variant='btn_dark_green' href='/signin' />
        </div>
      </section>

      <section ref={(ref) => (sectionsRef.current[2] = ref)} className={`flex max-container padding-container items-center gap-25 m-10 ${isVisible[2] ? styles.show : ''} ${styles.cls}`}>
        <div className="relative z-20 flex flex-1 flex-col gap-7">
          <Image src="/Baby_3.jpg" alt='image-3' width={400} height={1350}/>
        </div>
        <div className="relative flex flex-1 flex-col gap-7">
          <h1 className="regular-32 text-green-50">Step number 3<br/> in minutes</h1>
          <p className="regular-18 text-grey-60">Explain how to do this step clearly.</p>
          <Button type='button' title='Sign In' variant='btn_dark_green' href='/signin' />
        </div>
      </section>
    </div>
  );
}

export default ScrollableImageAndText;











