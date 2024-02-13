import { useState, useEffect } from 'react';
import logo from '../img/logo.svg';
import '../css/Header.css'

function Header() {
    const [toggleTab, setToggleTab] = useState(false);
    const [scrollIndex, setScrollIndex] = useState(0);
    const [scrollElements, setScrollElements] = useState([]);

    useEffect(() => {
        setScrollElements([
            document.getElementById('Main'),
            document.getElementById('Service'),
            document.getElementById('History'),
            document.getElementById('Project'),
            document.getElementById('Article'),
            document.getElementById('Contact'),
            document.getElementById('Footer')
        ]);
    }, []);

    useEffect(() => {
        const main = document.getElementById('main');

        const scrollReset = () => {
            if (scrollElements[scrollIndex]) main.style.transform = `translateY(${-scrollElements[scrollIndex].offsetTop + (scrollIndex === scrollElements.length - 1 ? window.innerHeight - scrollElements[scrollIndex].clientHeight : 0)}px)`;
        };
        const scrollUp = () => {
            if (scrollIndex > 0) {
                setScrollIndex(scrollIndex - 1);
            }
            if (scrollElements[scrollIndex]) main.style.transform = `translateY(${-scrollElements[scrollIndex].offsetTop + (scrollIndex === scrollElements.length - 1 ? window.innerHeight - scrollElements[scrollIndex].clientHeight : 0)}px)`;
        };
        const scrollDn = () => {
            if (scrollIndex < main.getElementsByTagName('section').length) {
                setScrollIndex(scrollIndex + 1);
            }
            if (scrollElements[scrollIndex]) main.style.transform = `translateY(${-scrollElements[scrollIndex].offsetTop + (scrollIndex === scrollElements.length - 1 ? window.innerHeight - scrollElements[scrollIndex].clientHeight : 0)}px)`;
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
    }, [scrollIndex, scrollElements]);

    const Menu = (
        <>
            <li className='item'><h5 onClick={() => setScrollIndex(1)}>회사소개</h5></li>
            <li className='item'><h5 onClick={() => setScrollIndex(2)}>회사연혁</h5></li>
            <li className='item'><h5 onClick={() => setScrollIndex(3)}>프로젝트</h5></li>
            <li className='item'><h5 onClick={() => setScrollIndex(4)}>보도자료</h5></li>
            <li className='item'><h5 onClick={() => setScrollIndex(5)}>오시는길</h5></li>
        </>
    );

    return (
        <header
            id='Header'
            className={scrollElements[scrollIndex] && scrollElements[scrollIndex].className.toString().search('invert') ? '' : 'invert'}
            style={{ height: toggleTab ? `${(Menu.props.children.length + 1) * 4}rem` : '4rem' }}
        >
            <div className='noise' />
            <nav>
                <h4 className='home' onClick={() => setScrollIndex(0)}>
                    <img src={logo} alt='logo' />
                    FIRST C&D
                </h4>
                <ul className='menu'>
                    {Menu}
                </ul>
                <div className={`tab ${toggleTab ? 'active' : ''}`} onClick={() => setToggleTab(!toggleTab)}>
                    <i className={`fa-solid ${toggleTab ? 'fa-xmark' : 'fa-ellipsis-vertical'} fa-xl`} />
                    <ul className='menu'>
                        {Menu}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;