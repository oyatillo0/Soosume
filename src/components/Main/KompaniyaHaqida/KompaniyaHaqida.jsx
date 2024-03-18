import React from 'react'
import './KompaniyaHaqida.scss'
import KompaniyaHaqida__photo from '../../../assets/logo/KompaniyaHaqida__photo.png'

function KompaniyaHaqida() {
  return (
    <section className='KompaniyaHaqida'>
        <div className="container KompaniyaHaqida__wrapper">
            <div className="KompaniyaHaqida__hero">
                <h2>Kompaniya haqida</h2>
                <p>"Soosum" kompaniyasi 2021-yildan boshlab uzoq sharq o’simligi bo’lgan “Jenshen”ning ildizidan tayyorlangan ichimlikni ishlab chiqarib, O’zbekiston bo’ylab yetkazib berishni yo’lga qo’ydi. Kompaniyamiz Koreyaning "Chejun" ITD hamda Qizil Jenshen sharbati MChJ korxonalari bilan hamkorlikda ishlaydi. "Sunmee" qizil jenshen ildizi Janubiy Koreyada yetishtirilib O’zbekistonda qadoqlanadi</p>
            </div>
            <div className="KompaniyaHaqida__photo">
                <div className="img__photo">
                <img src={KompaniyaHaqida__photo} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default KompaniyaHaqida