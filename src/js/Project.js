import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideBtn from './SwiperSlideBtn.js';
import 'swiper/css';
import dataProject from '../data/project.json';
import '../css/Project.css';


function Project() {
    const [isPortrait, setIsPortrait] = useState(3);

    useEffect(() => {
        const handleOrientationChange = (e) => {
            if (e.matches) setIsPortrait(1);
            else setIsPortrait(3);
        };

        handleOrientationChange(window.matchMedia('(orientation: portrait)'));
        window.matchMedia('(orientation: portrait)').addEventListener('change', handleOrientationChange);

        return () => window.matchMedia('(orientation: portrait)').removeEventListener('change', handleOrientationChange);
    }, []);

    return (
        <section id='Project' className='invert'>
            <div className='Noise' />
            <Swiper
                spaceBetween={0}
                slidesPerView={isPortrait}
                speed={500}
            >
                {dataProject.slice().reverse().map((item, index) => (
                    <SwiperSlide key={index} className='item'>
                        <div className='img' style={{ backgroundImage: `url(${require(`../img/project-${item.index}-0.jpg`)})` }} />
                        <h5 className='animation fadeOut'>{item.name}</h5>
                    </SwiperSlide>
                ))}
                <SwiperSlideBtn />
            </Swiper>
        </section >
    );
}

export default Project;