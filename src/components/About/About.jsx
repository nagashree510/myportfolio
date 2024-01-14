import React from 'react'
import styles from "./About.module.css";

import img1 from "../../../assects/about/aboutImage.png"
import img2 from "../../../assects/about/ci.png"
import img3 from "../../../assects/about/si.png"
import img4 from "../../../assects/about/uiIcon.png"

export const About = () => {
  return (
    <section className={styles.container} id="about">
   <h2 className={styles.title}>About</h2>
  <div className={styles.content}>
    <img  src={img1} className={styles.aboutImage}  alt="about=image"></img>

    <ul className={styles.aboutItems}>
      <li className={styles.aboutItem}>
          <img src={img2} aly=""></img>
          <div className={styles.aboutItemText}>
            
          <p>
          I am a programming enthusiast and analytical thinker with strong problem-solving skills.
            </p>
          </div>
      </li>
      <li className={styles.aboutItem}>
          <img src={img3} aly=""></img>
          <div className={styles.aboutItemText}>
          <p>
          I am interested in solving complex problems, designing intricate systems, and learning about different technologies and tech stacks.
       </p>
          </div>
      </li>
      <li className={styles.aboutItem}>
          <img src={img4} aly=""></img>
          <div className={styles.aboutItemText}>
            
            <p>I am continuously inspired by the limitless potential of software development to bring ideas to life.
</p>
          </div>
      </li>
    </ul>
    </div>
    </section>
  )
}
