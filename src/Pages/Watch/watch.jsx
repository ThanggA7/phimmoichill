import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hls from 'hls.js';
import './watch.scss';

function Watch() {
    const [chap, setChap] = useState([]);
    const [active, setActive] = useState(0);
    const [film, setFilm] = useState('');
    const [activeFilm, setActiveFilm] = useState('');
    const [content, setContent] = useState([]);
    const { slug } = useParams();
    useEffect(() => {
        const WathFilm = async () => {
            try {
                const res = await fetch(`https://phimapi.com/phim/${slug}`);
                const watch = await res.json();
                setContent(watch.movie);
                console.log(watch);

                setChap(watch.episodes[0].server_data.length);
                setFilm(watch.episodes[0].server_data[0].link_m3u8);
                setActiveFilm(watch.episodes[0].server_data);
                document.title = watch.movie.name;
            } catch (error) {}
        };

        WathFilm();
    }, [slug]);

    useEffect(() => {
        const video = document.getElementById('my-hls-video');

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(`${film}`);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play();
            });
            return () => {
                hls.destroy();
            };
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = `${film}`;
            video.play();
        }
    }, [film]);

    return (
        <div className="watch">
            <div className="container">
                <div className="film__title">
                    <h1 className="film__name">{`${content.name} ~ Tập ${active + 1}`}</h1>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-12">
                        <video id="my-hls-video" controls />
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="list__chap">
                            <div className="list__chap--info">
                                <p className="list__chap--title"></p>
                                <p className="list__chap--desc">
                                    Chọn tập từ 1 đến <span className="chap__desc"> {chap}</span>
                                </p>
                            </div>
                            <ul className="list" id="list">
                                {Array.from({ length: chap }).map((_, i) => (
                                    <li
                                        style={{ backgroundColor: active === i ? 'green' : '#22252a' }}
                                        className="film__list--chap"
                                        key={i}
                                    >
                                        <a
                                            onClick={() => {
                                                setActive(i);
                                                setFilm(activeFilm[i].link_m3u8);
                                            }}
                                            href="#!"
                                        >
                                            {i + 1}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="film__info">
                    <div className="film__info--desc">
                        <p className="info__title">
                            Thời gian: <span className="film__time">{content.time}</span>
                        </p>
                        <p className="info__title">
                            Nội dung:
                            <span className="film__desc">{content.content}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watch;
