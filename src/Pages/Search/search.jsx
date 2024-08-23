import React, { useEffect, useState } from 'react';
import './search.scss';

function Search() {
    const [valueSearch, setValueSearch] = useState('');
    const [search, setSearch] = useState([]);

    useEffect(() => {
        if (valueSearch.trim() !== '') {
            fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${valueSearch}&limit=${24}`)
                .then((res) => res.json())
                .then((dataSearch) => {
                    setSearch(dataSearch);
                })
                .catch((error) => console.error('Error fetching data:', error));
        } else {
            setSearch([]);
        }
    }, [valueSearch]);

    return (
        <div className="search">
            <div className="container">
                <div className="search__input">
                    <input
                        onChange={(e) => setValueSearch(e.target.value)}
                        value={valueSearch}
                        name="search"
                        type="text"
                        placeholder="Vui lòng nhập tên phim..."
                    />
                </div>
                <div className="row">
                    {valueSearch &&
                        search.data &&
                        search.data.items &&
                        search.data.items.length > 0 &&
                        search.data.items.map((ds, index) => (
                            <div key={index} className="col-lg-2 col-sm-4 col-6">
                                <div className="film">
                                    <div className="card__film">
                                        <a href={`/info/${ds.slug}`}>
                                            <img
                                                className="image__card--film"
                                                src={`https://phimimg.com/${ds.poster_url}`}
                                                alt={ds.title || 'card__film'}
                                            />
                                        </a>
                                    </div>
                                    <div className="card__info">
                                        <a className="film__name" href={`/info/${ds.slug}`}>
                                            {ds.name || 'Tên phim'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>{' '}
            </div>
        </div>
    );
}

export default Search;
