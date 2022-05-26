import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Files from '../../Data';
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import "./protect.scss"

function Protect({theme, fileVal}) {
  let arr = Files.find(e => e.id === fileVal.fileId);
  const [eye, setEye ] = useState(true);

   return (
    <div className={`protect ${theme}`}>
        <div className="container protect__block">
          <div className='modal__name'>
            <div></div>
            <h2>{fileVal.name}</h2>
          </div>

          <div className="protect__right">
            <form action="#" className='protect__form'>
                <div className='protect__form-control'>
                    <input type={eye ? "password" : "text"} />
                    <button type='button' onClick={() => setEye(!eye)}>
                    {eye ? <AiFillEye /> : <AiTwotoneEyeInvisible />}
                    </button>
                </div>
            </form>
            <Link to={"#"} className='merge__right-btn' style={{background: `${arr.color}`}}>
                Protect PDF
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Protect