import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo--text">
          PhimFox
        </Link>
      </div>

      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__li">
            <Link to="/search" className="navbar__link">
              Tìm Kiếm
            </Link>
          </li>
          <li className="navbar__li">
            <Link to="/hot" className="navbar__link">
              Phim Hot
            </Link>
          </li>
          <li className="navbar__li">
            <Link to="/movie/phim-le" className="navbar__link">
              Phim Lẻ
            </Link>
          </li>
          <li className="navbar__li">
            <Link to="/tv/phim-bo" className="navbar__link">
              Phim Bộ
            </Link>
          </li>
          <li className="navbar__li">
            <Link to="/news" className="navbar__link">
              Phim Mới
            </Link>
          </li>
          <li className="navbar__li">
            <Link to="/faq" className="navbar__link">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header__author">
        <span className="header__author--avatar">QA</span>
      </div>
    </div>
  );
}

export default Header;
