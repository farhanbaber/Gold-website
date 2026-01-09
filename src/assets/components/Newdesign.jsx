import { useState } from "react";
import styles from "./Newdesign.module.css";

export default function JewelleryHero() {
  const images = [
    "/bangles.ones.jfif",
    "/bangles.two.jpg",
    "/bangles.three.jpg",
    "/bangles.four.png",
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* LEFT THUMBNAILS */}
        <div className={styles.thumbs}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`${styles.thumb} ${
                activeImg === img ? styles.active : ""
              }`}
              onClick={() => setActiveImg(img)}
            />
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className={styles.mainImage}>
          <img src={activeImg} alt="Main Jewellery" />
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          <span className={styles.tag}>New Arrival</span>

          <h1>
            MINDFUL WAY FOR <br />
            <span>ELEGANCY Bangles</span>
          </h1>

          <h3>Gold Bangles with White Diamonds Acasia</h3>

          <p>
            This industry of fashion jewellery and sophistication.
            We believe that elegance can be found in pure and refined
            craftsmanship.
          </p>

          <button className={styles.cta}>
            Discover More →
          </button>
        </div>

      </div>
    </section>
  );
}
