import axios from 'axios';
import React, { useRef, useState } from 'react';
import './card.scss';


function Card({arr, Setvalue, setModalUse, theme}) {
  const [ btnTrue, setBtnTrue ] = useState(true);
  const inputFile = useRef();

  const labelChange = (e) => {
    setModalUse(true);
    Setvalue(
      {
        id: arr.id,
        name: e.target.files[0].name,
      }
    );

    // ===== axios dan fayl yuborilishi =====
    axios.post("https://jsonplaceholder.typicode.com/posts", {
        lastModified: e.target.files[0].lastModified,
        name: e.target.files[0].name,
        size: e.target.files[0].size,
        type: e.target.files[0].type  
    }).then(e => {
      console.log(e)
    })


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

      {arr.qiymat && <button 
        className="card__btn" 
        style={{border: `2px solid ${arr.color}`, color: `${arr.color}`}} 
        onClick={() => arr.qiymat ? setBtnTrue(!btnTrue) : null}
      >
        <i className={btnTrue ? `bx bx-transfer-alt i` : `bx bx-transfer-alt j`} ></i> { btnTrue ? arr.titleF : arr.titleT }
      </button>}

      <form action="#" className='hidden' encType='multipart/form-data'>
        <input 
          type="file" 
          ref={inputFile} 
          id={arr.label} 
          accept={btnTrue ? arr.file : arr.filePdf} 
          onChange={(e) => labelChange(e)} />
      </form>
    </li>
  )
}

export default Card