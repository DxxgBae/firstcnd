import { useState, useEffect } from 'react';
import logo from '../img/logo.svg';
import '../css/Header.css'

function Header() {
    const [scrollIndex, setScrollIndex] = useState(0);

    useEffect(() => {
        const header = document.getElementById('Header');
        const main = document.getElementById('main');
        const scrollElements = [
            document.getElementById('Main'),
            document.getElementById('Service'),
            document.getElementById('History'),
            document.getElementById('Project'),
            document.getElementById('Article'),
            document.getElementById('Contact'),
            document.getElementById('Footer')
        ];

        const scrollReset = () => {
            if (scrollElements[scrollIndex]) {
                main.style.transform = `translateY(${-scrollElements[scrollIndex].offsetTop + (scrollIndex === scrollElements.length - 1 ? window.innerHeight - scrollElements[scrollIndex].clientHeight : 0)}px)`;
                header.className = scrollElements[scrollIndex].className.search('invert') < 0 ? '' : 'invert';
            }
        };
        const scrollUp = () => {
            if (scrollIndex > 0) {
                setScrollIndex(scrollIndex - 1);
            }
            scrollReset();
        };
        const scrollDn = () => {
            if (scrollIndex < main.getElementsByTagName('section').length) {
                setScrollIndex(scrollIndex + 1);
            }
            scrollReset();
        };

        const wheel = (e) => {
            if (e.deltaY < 0) scrollUp();
            else if (e.deltaY > 0) scrollDn();
        };

        let startX, startY;
        const touchstart = (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
        const touchend = (e) => {
            if (!startY) return startY = null;
            let deltaX = startX - e.changedTouches[0].clientX;
            let deltaY = startY - e.changedTouches[0].clientY;
            if (Math.abs(deltaX) > Math.abs(deltaY) || Math.abs(deltaY) < 50) return startY = null;
            if (deltaY < 0) scrollUp();
            else if (deltaY > 0) scrollDn();
            startX = null;
            startY = null;
        };

        main.scrollTop = 0;
        scrollReset();
        window.addEventListener('resize', scrollReset);
        window.addEventListener('wheel', wheel);
        window.addEventListener('touchstart', touchstart);
        window.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
        window.addEventListener('touchend', touchend);
        return () => {
            window.removeEventListener('resize', scrollReset);
            window.removeEventListener('wheel', wheel);
            window.removeEventListener('touchstart', touchstart);
            window.removeEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
            window.removeEventListener('touchend', touchend);
        };
    }, [scrollIndex]);

    const Menu = (
        <>
            <li className='item'><h5 onClick={() => setScrollIndex(1)}>회사소개</h5></li>
            <li className='item'><h5 onClick={() => setScrollIndex(2)}>회사연혁</h5></li>
            <li className='item'><h5 onClick={() => setScrollIndex(3)}>프로젝트</h5></li>
            <li className='item'><h5 onClick={() => setScrollIndex(4)}>회사소식</h5></li>
            <li className='item'><h5 onClick={() => setScrollIndex(5)}>오시는길</h5></li>
        </>
    );

    return (
        <header id='Header'>
            <div className='noise' />
            <nav>
                <h4 className='home' onClick={() => setScrollIndex(0)}>
                    <img src={logo} alt='logo' />
                    FIRST C&D
                </h4>
                <ul className='menu'>
                    {Menu}
                </ul>
                <div
                    className='tab'
                    onClick={(e) => { if (e.target.className) e.target.className = e.target.className === 'tab' ? 'tab active' : 'tab'; }}
                >
                    <i className='fa-solid fa-xl' />
                    <ul className='menu'>
                        {Menu}
                    </ul>
                </div>
            </nav>
        </header >
    );
}

export default Header;