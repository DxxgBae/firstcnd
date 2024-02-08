import dataHistory from '../data/history.json';
import SectionTitle from './SectionTitle'
import '../css/History.css';

function History() {
    return (
        <section id='History'>
            <div className='noise' />
            <SectionTitle h='회사연혁' p={['퍼스트씨엔디가 걸어온 길을 소개드립니다.']} />
            <div className='container'>
                {dataHistory.map((item, index) => (
                    <div key={index} className='year'>
                        <h2 className='handfont'>
                            {item.yyyy}
                        </h2>
                        <div className='items'>
                            {item.items.map((item2, index2) => (
                                <div key={index2} className='month'>
                                    <h5>
                                        {item.yyyy}.{item2.mm}
                                    </h5>
                                    <div>
                                        <h5>
                                            {item2.h}
                                        </h5>
                                        <p>
                                            {item2.p}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default History;