import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../css/Main.css';

function Main() {
    return (
        <section id='Main' className='invert'>
            <div className='noise' />
            <div className='text'>
                <p>
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
                    <video playsInline muted autoPlay loop onPlay={(e) => e.target.playbackRate = .5}>
                        <source src={require(`../img/main-0.mp4`)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='img'
                        style={{ backgroundImage: `url(${require(`../img/main-1.jpg`)})`, backgroundPositionX: 'right', backgroundPositionY: 'top', }}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Main;