import React, { useState } from 'react'
import './content.scss'
import Data from "../../Data";
import { Link } from 'react-router-dom';

function Content({theme, fileVal}) {
  const [ loading ] = useState(true);

  let arr = Data.find(e => e.id === fileVal.fileId);

   return (
    <div className={`modal ${theme}`}>
      <div className="modal__content">
          <div className="modal__img">
              <img src={arr.img} alt="" />
          </div>


          <div className='modal__name'>
          <div></div>
          <h2>{fileVal.name}</h2>
          </div>
          
          {loading && (
              <div className="modal__load">
                  <div className="spinner">
                      <div className="cube1" style={{backgroundColor: `${arr.color}`}}></div>
                      <div className="cube2" style={{backgroundColor: `${arr.color}`}}></div>
                  </div>
              </div>
          )}
          {!loading && (
              <Link 
                  to={'#'} 
                  className="modal__btn" 
                  style={{backgroundColor: `${arr.color}`}} 
              >
                  <i className='bx bx-down-arrow-alt'></i>  Download file
              </Link>
          )}
      </div>
    </div>
  )
}

export default Content