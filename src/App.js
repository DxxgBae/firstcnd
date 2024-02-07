import Header from './js/Header'
import Main from './js/Main'
import Service from './js/Service'
import History from './js/History'
import Project from './js/Project'
import Article from './js/Article'
import Contact from './js/Contact'
import Footer from './js/Footer'

function App() {
    return (
        <>
            <Header />
            <main id='main'>
                <Main />
                <Service />
                <History />
                <Project />
                <Article />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default App;
