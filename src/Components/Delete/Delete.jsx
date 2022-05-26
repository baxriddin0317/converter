import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Delete({theme}) {
    const [ arrays, setArrays ] = useState([{
        id:0
    },
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    }]);

    const removeObj = (a) => {
      setArrays(
        arrays.filter(e => e.id !== a)
      )
    }
  return (
    <div className={`merge ${theme}`}>
    <div className="container merge__block">

      <div className="merge__middle">
        <ul className="merge__list">
          {arrays.map(obj => (
            <li className="merge__list-items" key={obj.id}>
              <div>
              <span className="merge__list-delete" onClick={() => removeObj(obj.id)}>x</span>
              </div>
              <h2 className="merge__list-title">
                {obj.id}
              </h2>
            </li>
          ))}
        </ul>
      </div>

      <div className="merge__right">
        <div className='merge__right-box'>
            Delete page
        </div>
            <Link to={"#"} className='merge__right-btn' style={{background: `#E67E22`}}>
              Delete pages
            </Link>
      </div>
    </div>
</div>
  )
}

export default Delete 