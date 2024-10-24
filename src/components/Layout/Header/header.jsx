import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/" className="header__logo--text">
                    PhimChill
                </Link>
            </div>

            {!isMobile && (
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
                            <Link to="/api" className="navbar__link">
                                Noi nhiu qua, sao ma dau dau qua di
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}

            {isMobile && (
                <div className="mobile-menu">
                    <button className="mobile-menu__toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    <nav className={`mobile-menu__dropdown ${menuOpen ? 'show' : ''}`}>
                        <ul className="mobile-menu__list">
                            <li className="mobile-menu__li">
                                <Link to="/search" className="mobile-menu__link">
                                    Tìm Kiếm
                                </Link>
                            </li>
                            <li className="mobile-menu__li">
                                <Link to="/hot" className="mobile-menu__link">
                                    Phim Hot
                                </Link>
                            </li>
                            <li className="mobile-menu__li">
                                <Link to="/movie/phim-le" className="mobile-menu__link">
                                    Phim Lẻ
                                </Link>
                            </li>
                            <li className="mobile-menu__li">
                                <Link to="/tv/phim-bo" className="mobile-menu__link">
                                    Phim Bộ
                                </Link>
                            </li>
                            <li className="mobile-menu__li">
                                <Link to="/news" className="mobile-menu__link">
                                    Phim Mới
                                </Link>
                            </li>
                            <li className="mobile-menu__li">
                                <Link to="/api" className="mobile-menu__link">
                                    API
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default Header;
