import React from 'react'
import './Buyurtma.scss'
import buyurtma__hero from '../../../assets/bg/Head Photo.png'
function Buyurtma() {
    return (
        <section className='buyurtma'>
            <div className="container buyurtma__wrapper">
                <div className="buyurtma__main">
                    <p>100% tabiiy</p>
                    <h2>Koreya qizil jenshen
                        ichimligi</h2>
                        <button>BUYURTMA BERISH</button>
                </div>
                <div className="buyurtma__hero">
                    <img src={buyurtma__hero} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Buyurtma
