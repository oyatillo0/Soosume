import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/Logo.png'

function Header() {
    return (
        <header className='Header'>
            <div className="container">
                <nav className="header__nav">
                    <Link>
                        <img src={logo} alt="" />
                    </Link>
                    <ul className="heder__list">
                        <li className="header__item">
                            <Link>KOMPANIYA HAQIDA</Link>
                        </li>
                        <li className="header__item">
                            <Link>FAKTLAR</Link>
                        </li>
                        <li className="header__item">
                            <Link>MAXSULOT</Link>
                        </li>
                        <li className="header__item">
                            <Link>UZ</Link>
                        </li>
                        <li className="header__item">
                            <Link>BUYURTMA BERISH</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header