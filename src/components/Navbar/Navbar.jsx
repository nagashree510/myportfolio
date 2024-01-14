import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import img1 from "../../../assects/nav/menuIcon.png"
import img2 from "../../../assects/nav/closeIcon.png"

export const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false)
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img 
           className={styles.menubtn} 
           src={menuOpen?img1:img2
           
           } 
           alt='menu-button'
           onClick={()=>{setMenuOpen(!menuOpen)}}></img>

            
             <ul
             className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
             onClick={() => setMenuOpen(false)}
           > 
                <li >
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
