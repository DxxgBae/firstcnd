import { useEffect, useRef } from 'react';
import dataHistory from '../data/history.json';
import SectionTitle from './SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import '../css/History.css';

function History() {
    const swiperRef = useRef();

    useEffect(() => {
        const handleOrientationChange = (e) => {
            const swiper = swiperRef.current.swiper;
            swiper.params.slidesPerView = e.matches ? 1 : 3;
        }

        const mediaQuery = window.matchMedia('(orientation: portrait)');
        handleOrientationChange(mediaQuery);
        mediaQuery.addEventListener('change', handleOrientationChange);
        return () => mediaQuery.removeEventListener('change', handleOrientationChange);
    }, []);

    return (
        <section id='History'>
            <div className='noise' />
            <SectionTitle h='회사연혁' p={['퍼스트씨엔디가 걸어온 길을 소개드립니다.']} />
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                slidesPerView={window.matchMedia('(orientation: portrait)').matches ? 1 : 3}
                centeredSlides={true}
                speed={2000}
                autoplay={{ delay: 1000 }}
            >
                {dataHistory.map((item, index) => (
                    <SwiperSlide key={index}>
                        <i className='fa-solid fa-diamond' />
                        <h2>
                            {item.yyyy}
                        </h2>
                        <div className='year'>
                            {item.items.map((item2, index2) => (
                                <div key={index2} className='month'>
                                    <h5>
                                        {item.yyyy}.{item2.mm}
                                    </h5>
                                    <div>
                                        <h5>
                                            {item2.h}
                                        </h5>
                                        <p>
                                            {item2.p}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
}

export default History;