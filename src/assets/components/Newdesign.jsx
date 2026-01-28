import { useEffect, useRef, useState } from "react";
import styles from "./Newdesign.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

/* ================= MAIN PAGE ================= */
export default function JewelleryPage() {
  return (
    <div className={styles.pageWrapper}>
      <JewelleryHero />
      <StatsSection />
      <JewelryTypeSection />
      <GoldCarouselSection />
    </div>
  );
}

/* ================= HERO SECTION ================= */
function JewelleryHero() {
  const images = ["/bangles.ones.jfif", "/bangles.two.jpg", "/bangles.three.jpg", "/bangles.four.png"];
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.thumbs}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`${styles.thumb} ${activeImg === img ? styles.active : ""}`}
              onClick={() => setActiveImg(img)}
              alt="thumb"
            />
          ))}
        </div>
        <div className={styles.mainImage}>
          <img src={activeImg} alt="Main Jewellery" />
        </div>
        <div className={styles.content}>
          <span className={styles.tag}>New Arrival</span>
          <h1>MINDFUL WAY FOR <br /> <span>ELEGANCY Bangles</span></h1>
          <h3>Gold Bangles with White Diamonds Acasia</h3>
          <p>This industry of fashion jewellery and sophistication. We believe that elegance can be found in pure craftsmanship.</p>
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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStart(true);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
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
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
}

/* ================= JEWELRY TYPE SECTION ================= */
const JewelryTypeSection = () => {
  const collectionTypes = [
    { id: 'bracelet', title: 'bracelet', src: '/jwe.1.png' },
    { id: 'earrings', title: 'earrings', src: '/jwe.2.png' },
    { id: 'bangles', title: 'bangles', src: '/jwe.3.png' }
  ];

  return (
    <section className={styles.hero_wrapper}>
      <div className={styles.visual_frame}>
        <video width="100%" height="100%" autoPlay muted loop playsInline>
          <source src="/renew.ai.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.info_column}>
        <h1 className={styles.main_heading}>Choose The Type !</h1>
        <p className={styles.sub_text}>Premium gold and diamond jewelry crafted with purity.</p>
        <div className={styles.type_selector}>
          {collectionTypes.map((item) => (
            <div key={item.id} className={styles.category_item}>
              <div className={styles.thumb_oval} style={{ backgroundImage: `url(${item.src})` }}></div>
              <span className={styles.item_label}>{item.title}</span>
              <div className={styles.action_trigger}><span>+</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// 30 static products (replace your images)
const imageList = [
  "/lx.1.png",
  "/lx.2.png",
  "/lxx.3.jpg",
  "/lx.4.jpg",
  "/lx.5.jpg",
  "/lx.6.png",
  "/lx.8.png",
  "/lx.9.webp",
  "/lx.10.png",
  "/lx.11.png",
  "/lx.12.png",
  "/lx.13.png",
  "/lx.14.png",
  "/lx.15.png",
  "/lx.16.png",
  "/lx.17.png",
  "/lx.18.png",
  "/lx.19.png",
  "/lx.20.png",
  "/re.21.png",
  "/lx.22.png",
  "/lx.23.png",
  "/lx.24.png",
  "/lx.25.png",
  "/lx.26.png",
  "/lx.27.png",
  "/lx.28.png",
  "/lx.29.png",
  "/lx.30.png", 
  "/lx.31.png",

  // ... total 30
];

const staticProducts = imageList.map((img, i) => ({
  id: i + 1,
  title: `Luxurious Collection`,
  price: (Math.random() * 500 + 200).toFixed(2),
  image: img
}));

const GoldCarouselSection = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const cardWidth = 285;
  const gap = 20;
  const maxIndex = Math.max(staticProducts.length - cardsPerView, 0);

  // Responsive cards
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth <= 768 ? 1 : 4);
      setIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Boomerang auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        // Agar end tak pahunch gaye, direction reverse
        if (prev >= maxIndex) {
          setDirection(-1);
          return prev - 1;
        }
        // Agar start par hain, direction forward
        if (prev <= 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, 2000); // 2 sec per slide
    return () => clearInterval(interval);
  }, [direction, maxIndex]);

  const slideNext = () => setIndex(prev => Math.min(prev + 1, maxIndex));
  const slidePrev = () => setIndex(prev => Math.max(prev - 1, 0));

  const translateX = index * (cardWidth + gap);

  return (
    <section className={styles.goldMainContainer}>
<div className={styles.headingWrapper}>
  <span className={styles.line}></span>
  <h2 className={styles.heading}>Golden <i class="fa-solid fa-crown" style={{ color: '#c6a05a' }}></i> Glamour</h2>
  <span className={styles.line}></span>
</div>

      <div className={styles.sliderViewport}>
        <div
          className={styles.horizontalTrack}
          style={{
            transform: `translateX(-${translateX}px)`,
            width: `${staticProducts.length * (cardWidth + gap)}px`
          }}
        >
          {staticProducts.map(item => (
            <div key={item.id} className={styles.goldCard}>
              <div className={styles.goldImgBox}>
                <img src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p className={styles.goldPrice}>${item.price}</p>
            </div>
          ))}
        </div>

        <button
          className={`${styles.controlButton} ${styles.left}`}
          onClick={slidePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          className={`${styles.controlButton} ${styles.right}`}
          onClick={slideNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};
