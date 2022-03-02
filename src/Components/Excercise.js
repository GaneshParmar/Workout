import React from 'react'
import '../Css/excerciseBox.css';

function Excercise({day,img,detail,clsname}) {
  return (
        <div className={clsname}>
            <h2>{day}</h2>
            <img src={img} alt='abs-imag'/>
            <p>{detail}</p>
        </div>
  )
}

export default Excercise