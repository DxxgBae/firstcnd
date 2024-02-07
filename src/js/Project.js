import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SwiperSlideBtn from './SwiperSlideBtn.js';
import dataProject from '../data/project.json';
import '../css/Project.css';

function Project() {
    const [isPortrait, setIsPortrait] = useState(3);

    useEffect(() => {
        const handleOrientationChange = (e) => {
            e.matches ? setIsPortrait(1) : setIsPortrait(3);
        };

        window.matchMedia('(orientation: portrait)').addEventListener('change', handleOrientationChange);
        return () => window.matchMedia('(orientation: portrait)').removeEventListener('change', handleOrientationChange);
    }, []);

    return (
        <section id='Project' className='invert'>
            <div className='noise' />
            Project
        </section>
    );
}

export default Project;