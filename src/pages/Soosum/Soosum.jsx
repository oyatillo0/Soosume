import React from 'react'
import './Soosum.scss'
import Chegirma from '../../components/Main/Chegirma/Chegirma'
import Jen from '../../components/Main/Jen/Jen'
import Information from '../../components/Main/Information/Information'
import KompaniyaHaqida from '../../components/Main/KompaniyaHaqida/KompaniyaHaqida'
import Ichimligi from '../../components/Main/Ichimligi/Ichimligi'
import Faktlar from '../../components/Main/Faktlar/Faktlar'
import Koreya from '../../components/Main/Koriya/Koreya'
import Buyurtma from '../../components/Main/Buyurtma/Buyurtma'

function Soosum() {
  return (
    <div className='Soosum'>
      <Buyurtma />
      <Chegirma />
      <Jen />
      <Information />
      <KompaniyaHaqida />
      <Koreya/>
      <Ichimligi />
      <Faktlar />
    </div>
  )
}

export default Soosum