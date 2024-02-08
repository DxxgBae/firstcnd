import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
import '../css/Contact.css';

function Contact() {
    const mapElement = useRef(null);
    const { naver } = window;

    useEffect(() => {
        if (!mapElement.current || !naver) return;

        const mapOption = {
            center: new naver.maps.LatLng(37.51740, 127.02262),
            zoom: 15,
            //draggable: false,
            //pinchZoom: false,
            //scrollWheel: false,
            //keyboardShortcuts: false,
            //disableDoubleTapZoom: true,
            //disableDoubleClickZoom: true,
            //disableTwoFingerTapZoom: true
        };

        const map = new naver.maps.Map(mapElement.current, mapOption);

        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.51540, 127.02262),
            map: map,
            icon: {
                url: require(`../img/logo.png`),
                size: new naver.maps.Size(32, 32),
                anchor: new naver.maps.Point(16, 16)
            }
        });

        var infowindow = new naver.maps.InfoWindow({
            content: '<h5 class="name">FIRST C&D</h5>',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            disableAnchor: true,
        });
        infowindow.open(map, marker);

        naver.maps.Event.addListener(marker, 'click', (e) => window.open('https://map.naver.com/p/entry/place/1746759810', '_blank'));
    }, [naver]);

    return (
        <section id='Contact'>
            <div className='noise' />
            <SectionTitle h='오시는길' p={['퍼스트씨엔디로 오시는 길을 안내드립니다.']} />
            <div ref={mapElement} id='mapDiv' />
            <div className='text'>
                <a
                    className='item'
                    href='https://map.naver.com/p/entry/place/1746759810'
                    target='_blank'
                    rel='noreferrer'
                >
                    <i className='fa-solid fa-location-dot' />
                    <p>서울특별시 강남구 도산대로8길 23, 2~3F (06039)</p>
                </a>
                <a
                    className='item'
                    href='https://map.naver.com/p/entry/place/1746759810'
                    target='_blank'
                    rel='noreferrer'
                >
                    <i />
                    <p>서울특별시 강남구 논현동 15-12, 2~3F (06039)</p>
                </a>
                <a
                    className='item'
                    href='mailto:admin@firstcnd.com'
                >
                    <i className='fa-solid fa-envelope' />
                    <p>admin@firstcnd.com</p>
                </a>
                <a
                    className='item'
                    href='tel:+8227820304'
                >
                    <i className='fa-solid fa-phone' />
                    <p>02-782-0304</p>
                </a>
                <a
                    className='item'
                    href='tel:+8227820394'
                >
                    <i className='fa-solid fa-fax' />
                    <p>02-782-0394</p>
                </a>
            </div>
        </section>
    );
}

export default Contact;