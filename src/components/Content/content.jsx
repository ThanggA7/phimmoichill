import React, { useEffect, useState } from "react";
import "./content.scss";

function Content() {
  const [films, setFilms] = useState({
    hoatHinh: [],
    phimle: [],
    phimbo: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hoatHinhRes, phimleRes, phimboRes] = await Promise.all([
          fetch(`https://phimapi.com/v1/api/danh-sach/hoat-hinh?limit=6`),
          fetch(`https://phimapi.com/v1/api/danh-sach/phim-le?limit=12`),
          fetch(`https://phimapi.com/v1/api/danh-sach/phim-bo?limit=12`),
        ]);

        const hoatHinhData = await hoatHinhRes.json();
        const phimleData = await phimleRes.json();
        const phimboData = await phimboRes.json();

        setFilms({
          hoatHinh: hoatHinhData.data.items,
          phimle: phimleData.data.items,
          phimbo: phimboData.data.items,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {films.hoatHinh.length > 0 && (
        <div className="form_card">
          <span className="title">PHIM HOẠT HÌNH ĐỀ CỬ</span>
          <div className="row">
            {films.hoatHinh.map((data, index) => (
              <div key={index} className="col-lg-2 col-sm-4 col-6">
                <div className="film">
                  <div className="card__film">
                    <a href="#!">
                      <img
                        className="image__card--film"
                        src={`https://phimimg.com/${data.poster_url}`}
                        alt="card__film"
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
      )}

      {films.phimle.length > 0 && (
        <div className="form_card">
          <span className="title">PHIM HÀNH ĐỘNG ĐỀ CỬ</span>
          <div className="row">
            {films.phimle.map((data, index) => (
              <div key={index} className="col-lg-2 col-sm-4 col-6">
                <div className="film">
                  <div className="card__film">
                    <a href="#!">
                      <img
                        className="image__card--film"
                        src={`https://phimimg.com/${data.poster_url}`}
                        alt="card__film"
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
      )}

      {films.phimbo.length > 0 && (
        <div className="form_card">
          <span className="title">PHIM VIỄN TƯỞNG ĐỀ CỬ</span>
          <div className="row">
            {films.phimbo.map((data, index) => (
              <div key={index} className="col-lg-2 col-sm-4 col-6">
                <div className="film">
                  <div className="card__film">
                    <a href="#!">
                      <img
                        className="image__card--film"
                        src={`https://phimimg.com/${data.poster_url}`}
                        alt="card__film"
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
      )}
    </div>
  );
}

export default Content;
