import React from 'react'
import './Faktlar.scss'

function Faktlar() {
    return (
        <section className='Faktlar'>
            <div className="container ">
                <h2 className='Faktlar__title'>Faktlar sonlarda</h2>
                <div className="Faktlar__wrapper">
                    <div className="Faktlar__wrapper__card">
                        <div>
                            <h2>100</h2>
                            <p>100 ga yaqin kasalliklarni
                                oldini olish va  <br /> davolashda <br />
                                qollaniladi</p>

                        </div>
                    </div>
                    <div className="Faktlar__wrapper__card">
                        <div>
                            <h2>1.3mlrd</h2>
                            <p> 1.3mlrd xitoyliklar <br />jenshenni inson uchun <br />
                                eng foydali mahsulot <br />
                                deb hisoblashadi</p>

                        </div>
                    </div>
                    <div className="Faktlar__wrapper__card">
                        <div>
                            <h2>100</h2>
                            <p>Jenshen o'simligi <br />
                                100 yilgacha <br />
                                umr ko'radi</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faktlar