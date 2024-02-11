import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules'
import '../css/Main.css';

function Main() {
    return (
        <section id='Main' className='invert'>
            <div className='noise' />
            <Swiper
                modules={[Autoplay, EffectFade]}
                speed={1000}
                loop={true}
                autoplay={{ delay: 5000 }}
                effect={'fade'}
            >
                <SwiperSlide>
                    <video
                        playsInline
                        muted
                        autoPlay
                        loop
                        onPlay={(e) => e.target.playbackRate = .5}>
                        <source src={require(`../img/main-0.mp4`)} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='img'
                        style={{
                            backgroundImage: `url(${require(`../img/main-1.jpg`)})`,
                            backgroundPositionX: 'right',
                            backgroundPositionY: 'top'
                        }}
                    />
                </SwiperSlide>
            </Swiper>
            <div className='text'>
                <p className='handfont'>
                    First is Best! Best is First!
                </p>
                <h2>
                    최고의 결과를 위해 과감히 퍼스트가 되고,
                </h2>
                <h2>
                    베스트를 다해 최고임을 증명합니다.
                </h2>
                <p>
                    퍼스트는 개발기획부터 분양 및 마케팅까지 ​통합솔루션을 제공할 수 있는 준비된 전문가 집단입니다.
                </p>
            </div>
        </section >
    );
}

export default Main;
/*
            <swiper-container
                slides-per-view={1}
                speed={1000}
                loop={true}
                autoplay-delay={5000}
            >
                <swiper-slide>
                    <video
                        playsInline
                        muted
                        autoPlay
                        loop
                        onPlay={(e) => e.target.playbackRate = .5}>
                        <source src={require(`../img/main-0.mp4`)} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </swiper-slide>
                <swiper-slide>
                    <div
                        className='img'
                        style={{
                            backgroundImage: `url(${require(`../img/main-1.jpg`)})`,
                            backgroundPositionX: 'right',
                            backgroundPositionY: 'top'
                        }}
                    />
                </swiper-slide>
            </swiper-container>
*/