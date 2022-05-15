import React from 'react'
import "./footer.scss"

function Footer({theme}) {
  return (
    <footer className={`footer ${theme}`}>
        © 2022 Baltsoft
    </footer>
)
}

export default Footer