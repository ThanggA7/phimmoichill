import React, { useEffect, useState } from 'react';

function News() {
    const [News, setNews] = useState([]);

    useEffect(() => {
        fetch('https://phimapi.com/danh-sach/phim-moi-cap-nhat')
            .then((res) => res.json())
            .then((News) => {
                setNews(News.items);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <span className="title">PHIM MỚI CẬP NHẬT</span>
                {News.map((data, index) => (
                    <div key={index} className="col-lg-2 col-sm-4 col-6">
                        <div className="film">
                            <div className="card__film">
                                <a href="#!">
                                    <img
                                        className="image__card--film"
                                        src={data.poster_url}
                                        alt={data.name || 'card__film'}
                                    />
                                </a>
                            </div>
                            <div className="card__info">
                                <a className="film__name" href="#!">
                                    {data.name}
                                </a>
                                <a className="film__name" href="#!">
                                    {data.origin_name}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="movie__page"></div>
        </div>
    );
}

export default News;
