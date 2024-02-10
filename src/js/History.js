import { useState, useEffect } from 'react';
import dataHistory from '../data/history.json';
import SectionTitle from './SectionTitle'
import Swipe from './Swipe';
import '../css/History.css';

function History() {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const handleOrientationChange = (e) => {
            setIsPortrait(e.matches);
        };

        const mediaQuery = window.matchMedia('(orientation: portrait)');
        handleOrientationChange(mediaQuery);
        mediaQuery.addEventListener('change', handleOrientationChange);
        return () => mediaQuery.removeEventListener('change', handleOrientationChange);
    }, [isPortrait]);

    return (
        <section id='History'>
            <div className='noise' />
            <SectionTitle h='회사연혁' p={['퍼스트씨엔디가 걸어온 길을 소개드립니다.']} />
            <Swipe
                perView={isPortrait ? 1 : 3}
                loop={true}
            >
                {!isPortrait && <div className='item' />}
                {dataHistory.map((item, index) => (
                    <div key={index} className='item'>
                        <i className='fa-solid fa-diamond' />
                        <h2 className='handfont'>
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
                    </div>
                ))}
            </Swipe>
        </section >
    );
}

export default History;