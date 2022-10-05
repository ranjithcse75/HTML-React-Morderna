import React from 'react'
import Menu from './Menu'
function Header() {
  return (
<header id="header" className="fixed-top d-flex align-items-center header-transparent">
  <div className="container d-flex justify-content-between align-items-center">
    <div className="logo">
      <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>      
    </div>
    <Menu/>
  </div>
</header>

  )
}

export default Header
