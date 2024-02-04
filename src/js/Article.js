import { useState, useEffect, useRef } from 'react';
import dataArticle from '../data/article.json'
import SectionTitle from './SectionTitle.js';
import '../css/Article.css';


function Article() {
    const [selectIndex, setSelectIndex] = useState(null);
    const [textHeight, setTextHeight] = useState(0);
    const textRef = useRef();

    useEffect(() => {
        const checkTitleHeight = () => {
            if (textRef.current) setTextHeight(textRef.current.scrollHeight);
        };

        checkTitleHeight();
        window.addEventListener('resize', checkTitleHeight);

        return () => window.removeEventListener('resize', checkTitleHeight);
    }, [selectIndex]);

    return (
        <section id='Article'>
            <SectionTitle h='보도자료' p={['퍼스트씨엔디의 소식을 전해드립니다.']} />
            <div className='container'>
                {dataArticle.slice().reverse().map((item, index) => (
                    <div
                        key={index}
                        className='item animation fadeOut dropOut'
                        onClick={() => index === selectIndex ? setSelectIndex(null) : setSelectIndex(index)}
                    >
                        <h4 className='title'>
                            {item.title}
                        </h4>
                        <p>
                            {item.date.yyyy}-{item.date.mm}-{item.date.dd}
                        </p>
                        <div
                            ref={index === selectIndex ? textRef : undefined}
                            className='text'
                            style={{ height: index === selectIndex ? `${textHeight}px` : 0 }}
                        >
                            {index === selectIndex && (
                                item.p.map((item2, index2) => (
                                    <p key={index2}>
                                        {item2}
                                    </p>
                                ))
                            )}
                        </div>
                        <i className={`more fa-solid fa-angle-down fa-xl${index === selectIndex ? ' active' : ''}`} />
                    </div>
                ))}
            </div>
        </section >
    );
}

export default Article;