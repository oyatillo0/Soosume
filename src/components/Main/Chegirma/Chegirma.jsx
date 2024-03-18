import React from 'react'
import './Chegirma.scss'
import chegirma__photo from '../../../assets/logo/+4987464.png'

function Chegirma() {
  return (
    <section className='Chegirma'>
      <div className="container">
        <nav className="Chegirma__nav">
          <form action="#" className="Chegirma__form">
            <h2 className="Chegirma__form__title">Buyurtma berish</h2>
            <p className="Chegirma__form__text">Formatni to'ldiring mutaxascislardan bepul konsultantsiya oling va chegirmaga ega bo'ling</p>
            <input className='Chegirma__form__inp1' type="text" name="" id="" placeholder='ismingiz'/>
            <input className='Chegirma__form__inp2' type="number" name="" id="" placeholder='+998'/>
            <button className="Chegirma__Form__btn">BUYURTMA BERING</button>
          </form>
          <div className="Chegirma__price">
           <div className="chegirma__card">
           <div className="Chegirma__chegirma">
              <p>Chegirma</p>
            </div>
            <div className="Chegirma__1399000">
              <b>1 399 000</b>
            </div>
            <div className="Chegirma__1199000">
              <p>
              1 199 000
              </p>
            </div>
            <div className="Chegirma__foyda">
              <b>foyda</b>
              <p>200 000</p>
            </div>
           
           </div>
           <div className="chegirma__photo">
              <img src={chegirma__photo} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Chegirma