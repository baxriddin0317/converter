import './header.scss'
import React from 'react'
import { Link } from 'react-router-dom'

function Header({ theme, setTheme }) {

   return (
    <header className={`header ${theme}`} >
        <div className="container header__block">
            <Link to={'#'} className="header__logo">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}><path d="M4.626 8.878a7.937 7.937 0 0 1 1.71-2.541 7.92 7.92 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.49 2.49 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059-1.19.5-2.26 1.22-3.18 2.139A9.98 9.98 0 0 0 2 12h2c0-1.086.211-2.136.626-3.122zm14.747 6.244c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.973 9.973 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z" /><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538c2.502 0 4.538-2.036 4.538-4.538S14.502 7.462 12 7.462z" />
                </svg>
                Converter
            </Link>

            <div className="header__box">
                {/* <img src="" width={40} alt="" /> */}
                <h2 className="header__title">
                   pdf converter
                </h2>
            </div>

            <div className="header__right">
                <button 
                    onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
                    >theme</button>
            </div>
        </div>
    </header>
  )
}

export default Header