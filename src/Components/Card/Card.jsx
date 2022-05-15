import React, { useRef, useState } from 'react';
import './card.scss';


function Card({arr, Setvalue, setModalUse, theme}) {
  const [ btnTrue, setBtnTrue ] = useState(true);
  const inputFile = useRef();

  const labelChange = (e) => {
    setModalUse(1);
    Setvalue(arr.id);
  }

  return (
    <li className={`card ${theme}`}>
      <img className='card__img' src={arr.img} width={120} alt="word" />
      <h3 className="card__title">
        { btnTrue ? arr.titleT : arr.titleF }
      </h3>
      <label className='card__btn' style={{backgroundColor: `${arr.color}`, color: "#fff"}} htmlFor={arr.label} >
        + choose file
      </label>
      <button className="card__btn" style={{border: `2px solid ${arr.color}`, color: `${arr.color}`}} onClick={() => setBtnTrue(!btnTrue)}>
        <i className={btnTrue ? `bx bx-transfer-alt i` : `bx bx-transfer-alt j`} ></i> { btnTrue ? arr.titleF : arr.titleT }
      </button>
      <form action="#" className='hidden' encType='multipart/form-data'>
        <input type="file" ref={inputFile} id={arr.label} accept={btnTrue ? arr.file : arr.filePdf} onInput={(e) => labelChange(e)} />
      </form>
    </li>
  )
}

export default Card