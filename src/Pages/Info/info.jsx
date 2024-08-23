import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './info.scss';

function Info() {
    const { slug } = useParams();
    const [info, setInfo] = useState('');
    useEffect(() => {
        fetch(`https://phimapi.com/phim/${slug}`)
            .then((res) => res.json())
            .then((info_content) => {
                setInfo(info_content.movie);
                console.log(info_content.movie);
            });
    }, [slug]);

    // console.log(info.poster_url);

    return (
        <div className="container">
            {info && (
                <div className="banner">
                    <img className="info__image" src={info.thumb_url} alt="" />

                    <div className="info__card">
                        <img className="info__poster" src={info.poster_url} alt="" />

                        <div className="act_info">
                            <a href={`/watch/${info.slug}`} className="info__btn">
                                Xem Phim
                            </a>
                        </div>
                    </div>

                    <div className="content">
                        <p className="country_film">Phim: {info.name} </p>
                        <p className="time__film">Thời gian: {info.time}</p>
                        <p className="content_film">Nội dung: {info.content} </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Info;
