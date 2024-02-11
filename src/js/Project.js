import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import dataProject from '../data/project.json';
import '../css/Project.css';

function Project() {
    const [clickIndex, setClickIndex] = useState(null);
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const handleOrientationChange = (e) => {
            setIsPortrait(e.matches);
            if (e.matches) setClickIndex(null);
        };

        const mediaQuery = window.matchMedia('(orientation: portrait)');
        handleOrientationChange(mediaQuery);
        mediaQuery.addEventListener('change', handleOrientationChange);
        return () => mediaQuery.removeEventListener('change', handleOrientationChange);
    }, [setClickIndex]);

    return (
        <section id='Project' className='invert'>
            <div className='noise' />
            <Swiper
                modules={[Navigation]}
                slidesPerView={isPortrait ? 1 : 3}
                speed={1000}
                navigation={true}
                onSlideChange={() => setClickIndex(null)}
            >
                {dataProject.slice().reverse().map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className={index === clickIndex ? 'clicked' : ''}
                        onClick={() => index === clickIndex ? setClickIndex(null) : !isPortrait && setClickIndex(index)}
                    >
                        <div className='item'>
                            <div className='img' style={{ backgroundImage: `url(${require(`../img/project-${item.index}-0.jpg`)})` }} />
                            <div className='text'>
                                <h4>
                                    {item.name}
                                </h4>
                                {(isPortrait || (!isPortrait && index === clickIndex)) && <>
                                    <p>
                                        {item.address}
                                    </p>
                                    <p>
                                        연면적 {item.area}m² / 지하{item.floor.dn}층 지상{item.floor.up}층
                                    </p>
                                    <p>
                                        {item.type} / {item.owner}
                                    </p>
                                </>}
                                {index === clickIndex && <p>Click to Close</p>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
}

export default Project;
/*

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
*/