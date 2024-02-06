import dataHistory from '../data/history.json'
import SectionTitle from './SectionTitle.js';
import '../css/History.css';


function History() {
    return (
        <section id='History'>
            <div className='Noise' />
            <SectionTitle h='회사연혁' p={['퍼스트씨엔디가 걸어온 길을 소개드립니다.']} />
            <div className='container'>
                {dataHistory.map((item, index) => (
                    <div key={index} className={`year${index % 2 === 1 ? ' left' : ''}`}>
                        <i className='fa-solid fa-play animation fadeOut' />
                        <h2 className='animation fadeOut'>{item.yyyy}</h2>
                        <div>
                            {item.items.map((item2, index2) => (
                                <div key={index2} className='month'>
                                    <h5 className='animation fadeOut'>
                                        {item.yyyy}-{item2.mm}
                                    </h5>
                                    <div className='item'>
                                        <h5 className='animation fadeOut'>
                                            {item2.h}
                                        </h5>
                                        <p className='animation fadeOut'>
                                            {item2.p}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}

export default History;