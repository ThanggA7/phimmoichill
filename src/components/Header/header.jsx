import React from "react";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="#!" className="header__logo--text">
          PhimFox
        </a>
      </div>

      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__li">
            <a href="#!" className="navbar__link">
              Tìm Kiếm
            </a>
          </li>
          <li className="navbar__li">
            <a href="#!" className="navbar__link">
              Phim Hot
            </a>
          </li>
          <li className="navbar__li">
            <a href="#!" className="navbar__link">
              Phim Lẻ
            </a>
          </li>
          <li className="navbar__li">
            <a href="#!" className="navbar__link">
              Phim Bộ
            </a>
          </li>
          <li className="navbar__li">
            <a href="#!" className="navbar__link">
              Phim Mới
            </a>
          </li>
          <li className="navbar__li">
            <a href="#!" className="navbar__link">
              FAQ
            </a>
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
