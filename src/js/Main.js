import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import '../css/Main.css';

function Main() {
    return (
        <section id='Main' className='invert'>
            <div className='Noise' />
            <div className='text animation fadeOut'>
                <p className='animation fadeOut dropOut'>
                    First is Best! Best is First!
                </p>
                <h2 className='animation fadeOut dropOut'>
                    최고의 결과를 위해 과감히 퍼스트가 되고,
                </h2>
                <h2 className='animation fadeOut dropOut'>
                    베스트를 다해 최고임을 증명합니다.
                </h2>
                <p className='animation fadeOut dropOut'>
                    퍼스트는 개발기획부터 분양 및 마케팅까지 ​통합솔루션을 제공할 수 있는 준비된 전문가 집단입니다.
                </p>
            </div>
            <Swiper
                className='background'
                spaceBetween={0}
                slidesPerView={1}
                speed={1000}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 5000 }}
            >
                <SwiperSlide>
                    <video autoPlay loop muted playsInline>
                        <source src='https://vod-progressive.akamaized.net/exp=1707106475~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1453%2F6%2F157269912%2F489780566.mp4~hmac=eb1cc89a9f7f92145edafa743169f86af2fcff975873ee05893a2c9240a7a5b9/vimeo-prod-skyfire-std-us/01/1453/6/157269912/489780566.mp4?filename=file.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='img'
                        style={{
                            backgroundImage: `url(${require(`../img/main-1.jpg`)})`,
                            backgroundPositionX: 'right',
                            backgroundPositionY: 'top',
                        }}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Main;