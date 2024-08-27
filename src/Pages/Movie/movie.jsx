import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Movie() {
    const [movie, setMovie] = useState([]);
    const [title, setTitle] = useState(movie && '');

    const { movieId } = useParams();
    useEffect(() => {
        fetch(`https://phimapi.com/v1/api/danh-sach/${movieId}?limit=24`)
            .then((res) => res.json())
            .then((phimle) => {
                setMovie(phimle.data.items);
                setTitle(phimle.data.titlePage);
                document.title = phimle.data.seoOnPage.titleHead;
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <span className="title">{title} </span>

                {movie.map((data, index) => (
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

export default Movie;
