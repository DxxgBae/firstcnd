import dateService from '../data/service.json'
import '../css/Service.css';

function Service() {
    return (
        <section id='Service' className='invert'>
            <div className='noise' />
            {dateService.map((item, index) => (
                <div key={index} className='item'>
                    <div className='img' style={{ backgroundImage: `url(${item.img})` }} />
                    <div className='text'>
                        <h4>
                            {item.h}
                        </h4>
                        <p>
                            {item.p}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Service;