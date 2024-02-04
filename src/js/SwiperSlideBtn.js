import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import '../css/SwiperSlideBtn.css';

function SwiperSlideBtn() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        const checkSwiper = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };

        swiper.on('slideChange', checkSwiper);

        return () => swiper.off('slideChange', checkSwiper);
    }, [swiper]);

    return (
        <>
            <i
                className={`fa-solid fa-angle-left fa-2xl slideBtn prev ${isBeginning ? 'disabled' : undefined}`}
                onClick={() => swiper.slidePrev()}
            />
            <i
                className={`fa-solid fa-angle-right fa-2xl slideBtn next ${isEnd ? 'disabled' : undefined}`}
                onClick={() => swiper.slideNext()}
            />
        </>
    );
}

export default SwiperSlideBtn;