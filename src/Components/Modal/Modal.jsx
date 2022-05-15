import React, { useState } from 'react'
import './modal.scss'
import Data from "../../Data";

function Modal({fileValue, setModalUse, theme}) {
    const [ loading ] = useState(true);

    let arr = Data.find(e => e.id === fileValue);

    const modalClick = () => {
        setModalUse(0);
    }

  return (
    <div 
        className={`modal ${theme}`} 
        onClick={modalClick}    
    >
        <span className='modal__arrow' onClick={() => modalClick()}>
        <i className='bx bx-arrow-back'></i>
        </span>
        <div className="modal__content">
            <div className="modal__img">
                <img src={arr.img} alt="" />
            </div>
            
            {loading && (
                <div className="modal__load">
                    <div className="spinner">
                        <div className="cube1" style={{backgroundColor: `${arr.color}`}}></div>
                        <div className="cube2" style={{backgroundColor: `${arr.color}`}}></div>
                    </div>
                </div>
            )}

            <a 
                href='#' 
                className="modal__btn" 
                style={{backgroundColor: `${arr.color}`}} 
                >
                <i className='bx bx-down-arrow-alt'></i>  Download file
            </a>
        </div>
    </div>
  )
}

export default Modal;