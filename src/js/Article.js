import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import dataArticle from '../data/article.json';
import SectionTitle from './SectionTitle'
import '../css/Article.css';

function Article() {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const handleOrientationChange = (e) => setIsPortrait(e.matches);

        const mediaQuery = window.matchMedia('(orientation: portrait)');
        handleOrientationChange(mediaQuery);
        mediaQuery.addEventListener('change', handleOrientationChange);
        return () => mediaQuery.removeEventListener('change', handleOrientationChange);
    }, []);

    return (
        <section id='Article'>
            <div className='noise' />
            <SectionTitle h='보도자료' p={['퍼스트씨엔디의 소식을 전해드립니다.']} />
            <Swiper
                modules={[Navigation]}
                slidesPerView={isPortrait ? 1 : 4}
                centeredSlides={true}
                speed={1000}
                navigation={true}
            >
                {dataArticle.slice().reverse().map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='item'>
                            <h4>
                                {item.title}
                            </h4>
                            <p>
                                <small>
                                    {item.date.yyyy}-{item.date.mm}-{item.date.dd}
                                </small>
                            </p>
                            <div className='text'>
                                {item.p.map((item2, index2) => (
                                    <p key={index2}>
                                        {item2}
                                    </p>
                                ))}
                                {item.url &&
                                    <a
                                        href={item.url}
                                        target='_blank'
                                        rel='noreferrer'
                                        style={{ fontWeight: 600 }}
                                    >
                                        기사 바로가기 <i className='fa-solid fa-arrow-up-right-from-square' />
                                    </a>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
}

export default Article;