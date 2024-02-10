import React, { useState, useRef } from 'react';

const Swipe = ({ children, perView = 1, speed = 1000, loop = false, auto = false, btn = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsRef = useRef();

    const prev = () => {
        const count = itemsRef.current.childElementCount;
        currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : loop && setCurrentIndex(count - 1);
    };

    const next = () => {
        const count = itemsRef.current.childElementCount;
        currentIndex < count - 1 ? setCurrentIndex(currentIndex + 1) : loop && setCurrentIndex(0);
    };

    return (
        <div
            className='swipe'
            style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}
        >
            {btn && (
                <div
                    className='btn prev'
                    style={{ zIndex: 1, cursor: 'pointer', position: 'absolute', left: 0, width: '4rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => prev()}
                >
                    <i className='fa-solid fa-angle-left fa-xl' />
                </div>
            )}
            {btn && (
                <div
                    className='btn next'
                    style={{ zIndex: 1, cursor: 'pointer', position: 'absolute', right: 0, width: '4rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => next()}
                >
                    <i className='fa-solid fa-angle-right fa-xl' />
                </div>
            )}
            <div
                ref={itemsRef}
                className='container'
                style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'row' }}
            >
                {React.Children.map(children, (child, index) => {
                    let isHidden = true;
                    if (index >= currentIndex && index < currentIndex + perView) isHidden = false;
                    return React.cloneElement(child, {
                        style: {
                            width: `calc(100% / ${perView})`,
                            height: '100%',
                            display: isHidden ? 'none' : 'block',
                            transitionDuration: `${speed}ms`
                        }
                    });
                })}
            </div>
        </div>
    );
};

export default Swipe;