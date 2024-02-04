import { useState, useEffect } from 'react';
import logo from '../img/logo.svg';
import '../css/Header.css'

function Header() {
    const [toggleTab, setToggleTab] = useState(false);
    const [headerInvert, setHeaderInvert] = useState(false);

    useEffect(() => {
        const appElement = document.getElementsByClassName('App')[0];

        const handleScroll = () => {
            var invertElements = document.getElementsByClassName('invert');

            var bool = false;
            for (var j of invertElements) {
                if (j.nodeName === 'HEADER') continue;
                var top = j.getBoundingClientRect().y;
                var bottom = top + j.getBoundingClientRect().height;
                if (top <= 0 && bottom > 0) bool = true;
            }
            setHeaderInvert(bool);
        };

        appElement.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => appElement.removeEventListener('scroll', handleScroll);
    }, []);

    const Menu = (
        <>
            <li className='item'><a href='#Company'>회사소개</a></li>
            <li className='item'><a href='#Project'>프로젝트</a></li>
            <li className='item'><a href='#Article'>보도자료</a></li>
            <li className='item'><a href='#Contact'>오시는길</a></li>
        </>
    );

    return (
        <header id='Header' className={headerInvert ? 'invert' : undefined}>
            <nav>
                <a href='#Main' className='home'>
                    <img src={logo} alt='logo' />
                    <h4>FIRST C&D</h4>
                </a>
                <ul className='menu'>
                    {Menu}
                </ul>
                <div className='tab' onClick={() => setToggleTab(!toggleTab)}>
                    <i className={toggleTab ? 'fa-solid fa-xmark fa-xl' : 'fa-solid fa-ellipsis-vertical fa-xl'} />
                    <ul className={toggleTab ? 'menu active' : 'menu'}>
                        {Menu}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;