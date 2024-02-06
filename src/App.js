import { useEffect } from 'react'
import Header from './js/Header'
import Main from './js/Main'
import Company from './js/Company'
import History from './js/History'
import Project from './js/Project'
import Article from './js/Article'
import Contact from './js/Contact'
import Footer from './js/Footer'
import './App.css';

function App() {
    useEffect(() => {
        const app = document.querySelector('.App');
        let scrollTimer;

        const scrollUp = () => {
            app.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
            scrollTimer = setTimeout(() => scrollTimer = null, 500);
        };
        const scrollDn = () => {
            app.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            scrollTimer = setTimeout(() => scrollTimer = null, 500);
        };

        const wheel = (e) => {
            if (scrollTimer) return;
            e.deltaY < 0 ? scrollUp() : scrollDn();
        };

        let startX, startY;
        const touchstart = (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
        const touchend = (e) => {
            if (scrollTimer || !startY) return startY = null;
            let deltaX = startX - e.changedTouches[0].clientX;
            let deltaY = startY - e.changedTouches[0].clientY;
            if (Math.abs(deltaX) > Math.abs(deltaY)) return startY = null;
            deltaY < 0 ? scrollUp() : scrollDn();
            startX = null;
            startY = null;
        };

        window.addEventListener('wheel', wheel);
        window.addEventListener('touchstart', touchstart);
        window.addEventListener('touchend', touchend);
        return () => {
            window.removeEventListener('wheel', wheel);
            window.removeEventListener('touchstart', touchstart);
            window.removeEventListener('touchend', touchend);
        };
    }, []);

    const observer = new IntersectionObserver((e) => {
        e.forEach((target) => {
            if (target.isIntersecting) {
                target.target.className = target.target.className.replace('fadeOut', 'fadeIn');
                target.target.className = target.target.className.replace('dropOut', 'dropIn');
            } else {
                target.target.className = target.target.className.replace('fadeIn', 'fadeOut');
                target.target.className = target.target.className.replace('dropIn', 'dropOut');
            }
        });
    });

    window.addEventListener('load', (e) => {
        const inter = document.getElementsByClassName('animation');
        for (var i of inter) observer.observe(i);
    });

    return (
        <div className="App">
            <Header />
            <Main />
            <Company />
            <History />
            <Project />
            <Article />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
