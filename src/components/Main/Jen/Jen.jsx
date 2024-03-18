import React from 'react'
import './Jen.scss'
import jen__icon from '../../../assets/logo/jen__price__icon.png'

function Jen() {
    return (
        <section className='Jen'>
            <div className="container jen__wrapper">
                <div className="jen__wrapper__main">
                    <img src={jen__icon} alt="" />
                    <span>
                        <p>Qizil jen shen</p>
                        <p>1 119 000</p>
                    </span>
                </div>
                <div className="jen__wrapper__mainn">
                    <img src={jen__icon} alt="" />
                    <span>
                        <p>Oddiy jen shen</p>
                        <p>1 119 000</p>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Jen