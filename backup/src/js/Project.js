import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSlideBtn from './SwiperSlideBtn.js';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import dataProject from '../data/project.json';
import '../css/Project.css';


function Project() {
    const [isPortrait, setIsPortrait] = useState(3);
    const [selectItem, setSelectItem] = useState(null);

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
                slidesPerView={selectItem !== null ? 1 : isPortrait}
                speed={500}
                onSlideChange={(swiper) => selectItem !== null && setSelectItem(swiper.activeIndex)}
                onClick={(swiper) => {
                    var option = 0;
                    if (selectItem === swiper.clickedIndex) {
                        setSelectItem(null);
                        if (!window.matchMedia('(orientation: portrait)').matches) option = 1;
                    } else setSelectItem(swiper.clickedIndex);
                    setTimeout(() => swiper.slideTo(swiper.clickedIndex - option), 1);
                }}
            >
                {dataProject.slice().reverse().map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className={`item${selectItem === index ? ' active' : ''}`}
                    >
                        <Swiper
                            className='background'
                            spaceBetween={0}
                            slidesPerView={1}
                            speed={1000}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{ delay: 5000 }}
                        >
                            {selectItem === null ?
                                Array.from({ length: 1 }).map((item2, index2) => (
                                    <SwiperSlide key={index2}>
                                        <div className='img' style={{ backgroundImage: `url(${require(`../img/project-${item.index}-${index2}.jpg`)})` }} />
                                    </SwiperSlide>
                                )) :
                                Array.from({ length: item.imgCount }).map((item2, index2) => (
                                    <SwiperSlide key={index2}>
                                        <div className='img' style={{ backgroundImage: `url(${require(`../img/project-${item.index}-${index2}.jpg`)})` }} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className='text animation fadeOut'>
                            {selectItem === index ? (
                                <>
                                    <h3>
                                        {item.name}
                                    </h3>
                                    <p>
                                        {item.address}
                                    </p>
                                    <p>
                                        연면적 {item.area} m²({item.area * 0.3025} 평)
                                    </p>
                                    <p>
                                        지하 {item.floor.dn}층 지상 {item.floor.up}층
                                    </p>
                                    <p>
                                        {item.type}
                                    </p>
                                    <p>
                                        {item.owner}
                                    </p>
                                </>
                            ) : (
                                <h5>
                                    {item.name}
                                </h5>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlideBtn />
            </Swiper>
        </section >
    );
}

export default Project;