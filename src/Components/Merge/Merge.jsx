import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Files from '../../Data';
import "./merge.scss"

function Merge({theme, fileVal}) {
  let arr = Files.find(e => e.id === fileVal.fileId);
  const [ arrays, setArrays ] = useState([{
    id: 0,
    ...fileVal
  }]);
  
  const addArr = (e) => {
    setArrays([...arrays, {
      id: arrays.length,
      name: e.target.files[0].name
    }]);
  }

  const removeObj = (a) => {
    setArrays(
      arrays.filter(e => e.id !== a)
    )
  }

   return (
    <div className={`merge ${theme}`}>
        <div className="container merge__block">
          <div className="merge__left">
            
            <label className='merge__btn' style={{background: `${arr.color}`, color: "#fff"}} htmlFor={`${arr.label}`}  >
              +
            </label>

            <form action="#" className='hidden' encType='multipart/form-data'  >
              <input type="file" id={`${arr.label}`} onChange={(e) => addArr(e)} accept=".pdf, .jpg, .jpeg, .tif, .png, .bmp, .gif, .fax, .ico, .tiff, .mdi, .csv, .xls, .xlsb, .xlt, .xltx, .xlsx, .docx, .doc, .dot, .dotx, .wps, .wpd, .rtf, .txt, .wri, .log, .pot, .potx, .pps, .ppsx, .ppt, .pptx, .mml, .odc, .odf, .odg, .odi, .odm, .odp, .ods, .odt, .otg, .oth, .otp, .ots, .pxl, .sgl, .smf, .srw, .stc, .sti, .stw, .sxc, .sxg, .sxi, .sxm, .sxw, .vor, .wv2" />
            </form>
          </div>

          <div className="merge__middle">
            <ul className="merge__list">
              {arrays.map(obj => (
                <li className="merge__list-items" key={obj.id}>
                  <div>
                  <span className="merge__list-delete" onClick={() => removeObj(obj.id)}>x</span>
                  </div>
                  <h2 className="merge__list-title">
                    {obj.name}
                  </h2>
                </li>
              ))}
            </ul>
          </div>

          <div className="merge__right">
            <div className='merge__right-box'>
            Upload at least two files to merge. Files supported: PDF, Word, PowerPoint, Excel, JPG, PNG, iWork, Open Office, and other files.
            </div>
                <Link to={"#"} className='merge__right-btn' style={{background: `${arr.color}`}}>
                  Merge file
                </Link>
          </div>
        </div>
    </div>
  )
}

export default Merge