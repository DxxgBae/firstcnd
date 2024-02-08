import { useState, useEffect, useRef } from 'react';
import dataArticle from '../data/article.json';
import SectionTitle from './SectionTitle'
import '../css/Article.css';

function Article() {
    const swiperRef = useRef();
    const [isPortrait, setIsPortrait] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleOrientationChange = (e) => setIsPortrait(e.matches);

        const mediaQuery = window.matchMedia('(orientation: portrait)');
        handleOrientationChange(mediaQuery);
        mediaQuery.addEventListener('change', handleOrientationChange);
        return () => mediaQuery.removeEventListener('change', handleOrientationChange);
    }, []);

    useEffect(() => {
        const swiper = swiperRef.current;

        const handleSlideIndexChange = () => setActiveIndex(swiper.swiper.activeIndex);

        handleSlideIndexChange();
        swiper.addEventListener('swiperslidechange', handleSlideIndexChange);
        return () => swiper.removeEventListener('swiperslidechange', handleSlideIndexChange);
    }, []);

    return (
        <section id='Article' className='invert'>
            <div className='noise' />
            <SectionTitle h='보도자료' p={['퍼스트씨엔디의 소식을 전해드립니다.']} />
            <div className='container'>
                <swiper-container
                    ref={swiperRef}
                    slides-per-view={isPortrait ? 1 : 3}
                    speed={1000}
                >
                    {!isPortrait && <swiper-slide />}
                    {dataArticle.slice().reverse().map((item, index) => (
                        <swiper-slide key={index}>
                            <div
                                className={`item${activeIndex === index ? ' active' : ''}`}
                                onClick={() => { swiperRef.current && swiperRef.current.swiper.slideTo(index) }}
                            >
                                <h4>
                                    {item.title}
                                </h4>
                                <p>
                                    {item.date.yyyy}-{item.date.mm}-{item.date.dd}
                                </p>
                                <div className='text'>
                                    {item.p.map((item2, index2) => (
                                        <p key={index2}>
                                            {item2}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </swiper-slide>
                    ))}
                    {!isPortrait && <swiper-slide />}
                </swiper-container>
            </div>
        </section >
    );
}

export default Article;