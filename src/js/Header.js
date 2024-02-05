import { useState, useEffect } from 'react';
import logo from '../img/logo.svg';
import '../css/Header.css'

function Header() {
    const [toggleTab, setToggleTab] = useState(false);
    const [headerInvert, setHeaderInvert] = useState(false);

    useEffect(() => {
        const app = document.getElementsByClassName('App')[0];

        const handleScroll = (e) => {
            var bool = false;
            var invertElements = document.getElementsByClassName('invert');
            for (var i of invertElements) {
                if (i.nodeName === 'HEADER') continue;
                var top = i.getBoundingClientRect().y;
                var bottom = top + i.getBoundingClientRect().height;
                if (top <= 0 && bottom > 0) bool = true;
            }
            setHeaderInvert(bool);
        };

        app.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => app.removeEventListener('scroll', handleScroll);
    }, []);

    const Menu = (
        <>
            <li className='item'><a href='#Company'>회사소개</a></li>
            <li className='item'><a href='#History'>회사연혁</a></li>
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
                    <i className={`fa-solid ${toggleTab ? 'fa-xmark' : 'fa-ellipsis-vertical'} fa-xl`} />
                    <ul
                        className={`menu${toggleTab ? ' active' : ''}`}
                        style={{ height: `${toggleTab ? `${Menu.props.children.length * 4}rem` : 0}` }}
                    >
                        {Menu}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;