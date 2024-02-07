import { useState, useEffect, useRef } from 'react';
import dataProject from '../data/project.json';
import '../css/Project.css';

function Project() {
    const swiperRef = useRef();
    const [isPortrait, setIsPortrait] = useState(3);

    useEffect(() => {
        const handleOrientationChange = (e) => {
            e.matches ? setIsPortrait(1) : setIsPortrait(3);
        };

        handleOrientationChange(window.matchMedia('(orientation: portrait)'));
        window.matchMedia('(orientation: portrait)').addEventListener('change', handleOrientationChange);
        return () => window.matchMedia('(orientation: portrait)').removeEventListener('change', handleOrientationChange);
    }, []);

    return (
        <section id='Project' className='invert'>
            <div className='noise' />
            <i className='slideBtn prev fa-solid fa-angle-left fa-2xl' onClick={() => swiperRef && swiperRef.current.swiper.slidePrev()} />
            <i className='slideBtn next fa-solid fa-angle-right fa-2xl' onClick={() => swiperRef && swiperRef.current.swiper.slideNext()} />
            <swiper-container
                ref={swiperRef}
                slides-per-view={isPortrait}
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
        </section >
    );
}

export default Project;