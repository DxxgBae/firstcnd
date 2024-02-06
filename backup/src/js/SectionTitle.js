import '../css/SectionTitle.css';

function SectionTitle({ h, p = [] }) {
    return (
        <div className='SectionTitle'>
            <h1 className='animation fadeOut dropOut'>
                {h}
            </h1>
            {p.map((item, index) => (
                <p key={index} className='animation fadeOut dropOut'>
                    {item}
                </p>
            ))}
            <div className='background'></div>
        </div>
    );
}

export default SectionTitle;