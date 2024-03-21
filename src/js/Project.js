import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import dataProject from '../data/project.json';
import '../css/Project.css';

function Project() {
    const swiperRef = useRef();

    useEffect(() => {
        const handleOrientationChange = (e) => {
            const swiper = swiperRef.current.swiper;
            swiper.params.slidesPerView = e.matches ? 1 : 3;
        };

        const mediaQuery = window.matchMedia('(orientation: portrait)');
        handleOrientationChange(mediaQuery);
        mediaQuery.addEventListener('change', handleOrientationChange);
        return () => mediaQuery.removeEventListener('change', handleOrientationChange);
    }, []);

    return (
        <section id='Project' className='invert'>
            <div className='noise' />
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                slidesPerView={window.matchMedia('(orientation: portrait)').matches ? 1 : 3}
                speed={1000}
                navigation={true}
            >
                {dataProject.slice().reverse().map((item, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={(e) => {
                            if (e.target.className.search('clicked') < 0) e.target.className += ' clicked';
                            else e.target.className = e.target.className.replace(' clicked', '');
                        }}
                    >
                        <div className='item'>
                            <div className='img' style={{ backgroundImage: `url(${require(`../img/project-${item.index}-0.jpg`)})` }} />
                            <div className='text'>
                                <h4>
                                    {item.name}
                                </h4>
                                <p>
                                    {item.address}
                                </p>
                                <p>
                                    연면적 {item.area.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}m² / 지하{item.floor.dn}층 지상{item.floor.up}층
                                </p>
                                <p>
                                    {item.type} / {item.owner}
                                </p>
                                <p className='clickedShow'>Click to Close</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
}

export default Project;