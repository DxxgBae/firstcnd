import '../css/SectionTitle.css';

function SectionTitle({ h, p = [] }) {
    return (
        <div className='SectionTitle'>
            <h1>
                {h}
            </h1>
            {p.map((item, index) => (
                <p key={index}>
                    {item}
                </p>
            ))}
        </div>
    );
}

export default SectionTitle;