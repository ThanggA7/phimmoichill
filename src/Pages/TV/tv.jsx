import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function TV() {
    const [TV, setTV] = useState([]);
    const [title, setTitle] = useState(TV && '');
    const { tvId } = useParams();
    useEffect(() => {
        fetch(`https://phimapi.com/v1/api/danh-sach/${tvId}?limit=24`)
            .then((res) => res.json())
            .then((TV) => {
                setTV(TV.data.items);
                setTitle(TV.data.titlePage);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <span className="title">{title}</span>
                {TV.map((data, index) => (
                    <div key={index} className="col-lg-2 col-sm-4 col-6">
                        <div className="film">
                            <div className="card__film">
                                <a href={`/info/${data.slug}`}>
                                    <img
                                        className="image__card--film"
                                        src={`https://phimimg.com/${data.poster_url}`}
                                        alt={data.name || 'card__film'}
                                    />
                                </a>
                            </div>
                            <div className="card__info">
                                <a className="film__name" href={`/info/${data.slug}`}>
                                    {data.name}
                                </a>
                                <a className="film__name" href={`/info/${data.slug}`}>
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

export default TV;
