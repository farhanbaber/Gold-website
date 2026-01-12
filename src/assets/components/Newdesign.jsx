import { useEffect, useRef, useState } from "react";
import styles from "./Newdesign.module.css";

/* ================= HERO SECTION ================= */

export default function JewelleryPage() {
  return (
    <>
      <JewelleryHero />
      <StatsSection />
       <JewelrySection />
    </>
  );
}

/* ================= JEWELLERY HERO ================= */

function JewelleryHero() {
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

        <div className={styles.thumbs}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`${styles.thumb} ${
                activeImg === img ? styles.active : ""
              }`}
              onClick={() => setActiveImg(img)}
            />
          ))}
        </div>

        <div className={styles.mainImage}>
          <img src={activeImg} alt="Main Jewellery" />
        </div>

        <div className={styles.content}>
          <span className={styles.tag}>New Arrival</span>
          <h1>
            MINDFUL WAY FOR <br />
            <span>ELEGANCY Bangles</span>
          </h1>
          <h3>Gold Bangles with White Diamonds Acasia</h3>
          <p>
            This industry of fashion jewellery and sophistication.
            We believe that elegance can be found in pure craftsmanship.
          </p>
          <button className={styles.cta}>Discover More →</button>
        </div>

      </div>
    </section>
  );
}

/* ================= STATS SECTION ================= */

function StatsSection() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const statsData = [
    { value: 90, label: "All Over World", suffix: "+" },
    { value: 70, label: "Products Available", suffix: "+" },
    { value: 786, label: "Products Reviews", suffix: "" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats_section} ref={sectionRef}>
      <div className={styles.stats_container}>
        {statsData.map((item, index) => (
          <Counter key={index} {...item} start={start} />
        ))}
      </div>
    </section>
  );
}

/* ================= COUNTER ================= */

function Counter({ value, label, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 2000;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <div className={styles.stat_box}>
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
      
    </div>

    // end of the section 

 
  );

}

const JewelrySection = () => {
  const collectionTypes = [
    { id: 'bracelet', title: 'bracelet', src: '/jwe.1.png' },
    { id: 'earrings', title: 'earrings', src: '/jwe.2.png' },
    { id: 'bangles', title: 'bangles', src: '/jwe.3.png' }
  ];

  return (
    <section className={styles.hero_wrapper}>
      {/* Media Player Area */}
      <div className={styles.visual_frame}>
        {/* Empty Video Space for Public Folder */}
        <video width="100%" height="100%" poster="/placeholder.jpg" autoPlay muted loop>
          <source src="/hover.video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Side */}
      <div className={styles.info_column}>
        <h1 className={styles.main_heading}>Choose The Type !</h1>
        <p className={styles.sub_text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar leo.
        </p>

        {/* Categories Grid */}
        <div className={styles.type_selector}>
          {collectionTypes.map((item) => (
            <div key={item.id} className={styles.category_item}>
              <div 
                className={styles.thumb_oval} 
                style={{ backgroundImage: `url(${item.src})` }}
              >
                {/* Image placeholder */}
              </div>
              <span className={styles.item_label}>{item.title}</span>
              <div className={styles.action_trigger}>+</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};