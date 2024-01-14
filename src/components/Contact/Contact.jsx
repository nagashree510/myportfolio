import React from 'react'
import styles from "./Contact.module.css";
import img1 from "../../../assects/contact/emailIcon.png"
import img2 from "../../../assects/contact/githubIcon.png"
import img3 from "../../../assects/contact/linkedinIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
          <img src={img1} alt="Email icon" />
          <a href="mailto:nagashreea55@gmail.com">nagashreea55@gmail.com</a>
        </li>
        <li  className={styles.link}>
        <img
            src={img3}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/nagashree-a-261a49215/">linkedin.com/nagashree</a>
        </li>
        <li className={styles.link}>
          <img src={img2} alt="Github icon" />
          <a href="https://github.com/nagashree510">github.com/nagashree</a>
        </li>
     </ul>
   
   </footer>
  )
}

