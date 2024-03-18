
import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import footer__logo from '../../assets/logo/Logo.png'

function Footer() {
  return (
    <footer className='Footer'>
      <div className="container Footer__wrapper">
        <div className="Footer__left">
          <Link><img src={footer__logo} alt="" /></Link>
          <p>Janubiy Koreyada tayyorlangan haqiqiy
            6 yillik qizil jenshen ekstrakti</p>
          <span className="footer__left__span">
            <i class='bx bxl-telegram Footer__left__i'>
              {/* <i class='bx bx-up-arrow-alt'></i> */}
            </i>
            <i class='bx bxl-instagram-alt Footer__left__i' ></i>
            <i class='bx bxl-facebook Footer__left__i' ></i>
            <i class='bx bxl-youtube Footer__left__i' ></i>
          </span>
        </div>
        <ul className="Footer__list">
          <li className="footer__list__item">
            <Link>Kompaniya haqida</Link>
          </li>
          <li className="footer__list__item">
            <Link>faktlar</Link>
          </li>
          <li className="footer__list__item">
            <Link>mahsulot</Link>
          </li>
        </ul>
        <form className='fooetr__form' action="#">
          <p className='form__text'>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</p>
          <input className='fooetr__form__inp1' type="text" name="" id="" placeholder='ismingiz' />
          <input className='fooetr__form__inp2' type="number" name="" id="" placeholder='+998' />
          <button className="foter__form__btn">BUYURTMA BERISH</button>
        </form>
      </div>
    </footer>
  )
}

export default Footer