import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle.js';
import '../css/Contact.css';

function Contact() {
    const mapElement = useRef(null);
    const { naver } = window;

    useEffect(() => {
        if (!mapElement.current || !naver) return;

        const mapOption = {
            center: new naver.maps.LatLng(37.51540, 127.02262),
            zoom: 16,
        };

        const map = new naver.maps.Map(mapElement.current, mapOption);

        const marker = new naver.maps.Marker({
            position: mapOption.center,
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
            <div className='Noise' />
            <SectionTitle h='오시는길' p={['퍼스트씨엔디로 오시는 길을 안내드립니다.']} />
            <div ref={mapElement} id='mapDiv' />
            <table className='animation fadeOut dropOut'>
                <tbody>
                    <tr>
                        <td>
                            <a href='https://map.naver.com/p/entry/place/1746759810' target='_blank' rel='noreferrer'>
                                <i className='fa-solid fa-location-dot' />
                            </a>
                        </td>
                        <td>
                            <a href='https://map.naver.com/p/entry/place/1746759810' target='_blank' rel='noreferrer'>
                                서울특별시 강남구 도산대로8길 23, 2~3F (06039)
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <a href='https://map.naver.com/p/entry/place/1746759810' target='_blank' rel='noreferrer'>
                                서울특별시 강남구 논현동 15-12, 2~3F (06039)
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='mailto:admin@firstcnd.com'>
                                <i className='fa-solid fa-envelope' />
                            </a>
                        </td>
                        <td>
                            <a href='mailto:admin@firstcnd.com'>
                                admin@firstcnd.com
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='tel:+8227820304'>
                                <i className='fa-solid fa-phone' />
                            </a>
                        </td>
                        <td>
                            <a href='tel:+8227820304'>
                                02-782-0304
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='tel:+8227820394'>
                                <i className='fa-solid fa-fax' />
                            </a>
                        </td>
                        <td>
                            <a href='tel:+8227820394'>
                                02-782-0394
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Contact;