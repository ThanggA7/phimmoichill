import React, { useEffect, useState } from "react";

function Movie() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://phimapi.com/v1/api/danh-sach/phim-le?limit=24")
      .then((res) => res.json())
      .then((phimle) => {
        setMovie(phimle.data.items);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <span className="title">PHIM LẺ ĐỀ CỬ</span>
        {movie.map((data, index) => (
          <div key={index} className="col-lg-2 col-sm-4 col-6">
            <div className="film">
              <div className="card__film">
                <a href="#!">
                  <img
                    className="image__card--film"
                    src={`https://phimimg.com/${data.poster_url}`}
                    alt={data.name || "card__film"}
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
    </div>
  );
}

export default Movie;
