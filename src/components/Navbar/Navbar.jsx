import React from 'react';
import { navLinks } from '../../constant';
import { logo } from '../../assets';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar-items'>
            <div className="container">
                <div className="navbar-content">
                    <a href='home' className="navbar-logo">
                        <img src={logo} className='logo' alt="" />
                    </a>
                    <ul className="navbar-links">
                        {navLinks.map(item=><li key={item.id}><a className={item.id === "home"? "active" : null} href={item.id}>{item.id === "cart"?<i className={item.title}></i>:item.title}</a></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
