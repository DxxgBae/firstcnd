import '../css/Company.css';

function Company() {
    const service = [
        { h: '부동산개발', p: '기업 보유 부동산, 대형판매시설, 구도심 토지 등 매입을 통한 부동산 복합개발' },
        { h: '부동산 컨설팅 및 PM', p: '사업기획 및 MD전략 수립' },
        { h: '부동산 유동화', p: '기업 보유 부동산 및 대형판매시설 등 유동화 매각 자문' }
    ];

    return (
        <section id='Company' className='invert'>
            {service.map((item, index) => (
                <div key={index} className='item'>
                    <div className='text animation fadeOut dropOut'>
                        <h4>
                            {item.h}
                        </h4>
                        <p>
                            {item.p}
                        </p>
                    </div>
                    <div className='img' style={{ backgroundImage: `url(${require(`../img/service-${index}.jpg`)})` }} />
                </div>
            ))}
        </section>
    );
}

export default Company;