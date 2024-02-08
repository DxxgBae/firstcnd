import { useState, useEffect, useRef } from 'react';
import dataProject from '../data/project.json';
import '../css/Project.css';

function Project() {
    const swiperRef = useRef();
    const [isPortrait, setIsPortrait] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const handleOrientationChange = (e) => setIsPortrait(e.matches);

        const mediaQuery = window.matchMedia('(orientation: portrait)');
        handleOrientationChange(mediaQuery);
        mediaQuery.addEventListener('change', handleOrientationChange);
        return () => mediaQuery.removeEventListener('change', handleOrientationChange);
    }, []);

    useEffect(() => {
        const swiper = swiperRef.current;

        const handleSlideIndexChange = () => {
            setIsBeginning(swiper.swiper.isBeginning);
            setIsEnd(swiper.swiper.isEnd);
        };

        handleSlideIndexChange();
        swiper.addEventListener('swiperslidechange', handleSlideIndexChange);
        return () => swiper.removeEventListener('swiperslidechange', handleSlideIndexChange);
    }, []);

    return (
        <section id='Project' className='invert'>
            <div className='noise' />
            <div className='container'>
                <i
                    className={`fa-solid fa-angle-left fa-2xl slideBtn prev ${isBeginning ? 'disable' : ''}`}
                    onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()}
                />
                <i
                    className={`fa-solid fa-angle-right fa-2xl slideBtn next ${isEnd ? 'disable' : ''}`}
                    onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()}
                />
                <swiper-container
                    ref={swiperRef}
                    slides-per-view={isPortrait ? 1 : 3}
                    speed={1000}
                >
                    {dataProject.slice().reverse().map((item, index) => (
                        <swiper-slide key={index}>
                            <div className='item'>
                                <div className='img' style={{ backgroundImage: `url(${require(`../img/project-${item.index}-0.jpg`)})` }} />
                                <div className='text'>
                                    <h5>
                                        {item.name}
                                    </h5>
                                </div>
                            </div>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
        </section >
    );
}

export default Project;