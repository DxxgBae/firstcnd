import { useEffect } from 'react'
import Header from './js/Header'
import Main from './js/Main'
import Company from './js/Company'
import History from './js/History'
import Project from './js/Project'
import Article from './js/Article'
import Contact from './js/Contact'
import Footer from './js/Footer'

function App() {
    useEffect(() => {
        const root = document.getElementById('root');
        let scrollTimer;

        const scrollUp = () => {
            root.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
            scrollTimer = setTimeout(() => scrollTimer = null, 500);
        };
        const scrollDn = () => {
            root.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
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

    return (
        <>
            <Header />
            <Main />
            <Company />
            <History />
            <Project />
            <Article />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
