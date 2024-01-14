import React from "react";
import img from "../../../assects/hero/heroimg.png"

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nagashree </h1>
        <p className={styles.description}>
        I am a software engineer with 1.5 years of experience, proficient in Java and Spring Boot. I specialize in backend development. Feel free to reach out if you would like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
         src={img}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};