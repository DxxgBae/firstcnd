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

        const scroll = (bool) => {
            //bool: true = up, false = dn
            if (scrollTimer) return;
            app.scrollBy({
                top: bool ? -window.innerHeight : window.innerHeight,
                behavior: 'smooth'
            });
            scrollTimer = setTimeout(() => scrollTimer = null, 500);
        }

        window.addEventListener('wheel', (e) => scroll(e.deltaY < 0 ? true : false));
        return () => window.removeEventListener('wheel', (e) => scroll(e.deltaY < 0 ? true : false));
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
