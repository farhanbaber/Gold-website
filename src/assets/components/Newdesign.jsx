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
      <AboutSection />
        <ArchCards />
        <DesignerSection />
        <JewelryGallery />

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
  const [cardWidth, setCardWidth] = useState(285);
  const [gap, setGap] = useState(20);
  const [direction, setDirection] = useState(1);

  const maxIndex = Math.max(staticProducts.length - cardsPerView, 0);

  // ✅ RESPONSIVE LOGIC (REAL FIX)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
        setCardWidth(window.innerWidth); // FULL SCREEN
        setGap(0);                       // NO GAP
      } else {
        setCardsPerView(4);
        setCardWidth(285);
        setGap(20);
      }
      setIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        if (prev >= maxIndex) {
          setDirection(-1);
          return prev - 1;
        }
        if (prev <= 0) {
          setDirection(1);
          return prev + 1;
        }
        return prev + direction;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [direction, maxIndex]);

  const slideNext = () => setIndex(prev => Math.min(prev + 1, maxIndex));
  const slidePrev = () => setIndex(prev => Math.max(prev - 1, 0));

  const translateX = index * (cardWidth + gap);

  return (
    <section className={styles.goldMainContainer}>
      <div className={styles.headingWrapper}>
        <span className={styles.line}></span>
        <h2 className={styles.heading}>
          Golden <i className="fa-solid fa-crown" style={{ color: "#c6a05a" }}></i> Glamour
        </h2>
        <span className={styles.line}></span>
      </div>

      <div className={styles.sliderViewport}>
        <div
          className={styles.horizontalTrack}
          style={{
            transform: `translateX(-${translateX}px)`,
            width: staticProducts.length * (cardWidth + gap)
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

        <button className={`${styles.controlButton} ${styles.left}`} onClick={slidePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button className={`${styles.controlButton} ${styles.right}`} onClick={slideNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};



const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      {/* Top Row: Image Left, Content Right */}
      <div className={`${styles.aboutSection__row} ${styles['aboutSection__row--alignCenter']}`}>
        <div className={styles.aboutSection__media}>
          <img 
            src="/rings.8.h.png" 
            alt="Brand Vision" 
            className={styles.aboutSection__image} 
          />
        </div>
        
        <div className={styles.aboutSection__content}>
          <span className={styles.aboutSection__label}>Beyond Jewellery</span>
          <h2 className={styles.aboutSection__title}>
            — Comfort and Quality <br /> Come First.
          </h2>
          <p className={styles.aboutSection__text}>
            We create timeless gold jewelry that blends comfort, elegance, and purity,
  designed to be worn beautifully on every occasion.
          </p>
          <p className={styles.aboutSection__text}>
           Our vision has always been to design pure gold jewelry that blends comfort, elegance, and versatility.
          </p>
        </div>
      </div>

      {/* Bottom Row: Quote Left, Image Right */}
      <div className={styles.aboutSection__row}>
        <div className={styles.aboutSection__content}>
          <div className={styles.aboutSection__quoteBox}>
            <p className={styles.aboutSection__quoteText}>
               Our search for elegant yet comfortable gold jewelry inspired us to create a brand
  defined by purity and timeless craftsmanship.
            </p>
            <footer className={styles.aboutSection__author}>— fayaz baber</footer>
          </div>
        </div>
        
        <div className={styles.aboutSection__media}>
          <img 
            src="abs.1.png" 
            alt="Design Details" 
            className={styles.aboutSection__image} 
          />
        </div>
      </div>
    </section>
  );
};


// strar new section
const ArchCards = () => {
  const archData = [
    {
      id: "arch-1",
      heading: "Craftsmanship",
      text: "Premium quality materials sourced globally.",
      defaultImg: "k.1.png", // Public folder wali image
      hoverImg: "k1.h.png"  // Hover par jo dikhani hai
    },
    {
      id: "arch-2",
      heading: "Gilded Grace",
      text: "Discover our latest collection for modern living.",
      defaultImg: "k.2.png",
      hoverImg: "k2.h.png"
    },
    {
      id: "arch-3",
      heading: "Timeless Design",
      text: "Aesthetic and functional design for you.",
      defaultImg: "k3.png",
      hoverImg: "k3.h.png"
    }
  ];
  

  return (
    <>
    <div className={styles.headingWrapper}>
        <span className={styles.line}></span>
        <h2 className={styles.heading}>
          IMPERIAL <i className="fa-brands fa-pied-piper-hat" style={{ color: "#c6a05a" }}></i> GOLD
        </h2>
        <span className={styles.line}></span>
      </div>
    <div className={styles.archSectionWrapper}>
      
      {archData.map((item) => (
        <div key={item.id} className={styles.archCardItem}>
          <div className={styles.archImageFrame}>
            {/* Pehli Image (Default) */}
            <img 
              src={`/${item.defaultImg}`} 
              alt={item.heading} 
              className={styles.archImgDefault}
            />
            {/* Dusri Image (Hover) */}
            <img 
              src={`/${item.hoverImg}`} 
              alt={`${item.heading} hover`} 
              className={styles.archImgHover}
            />
          </div>
          <div className={styles.archTextContainer}>
            <h3 className={styles.archMainTitle}>{item.heading}</h3>
            <p className={styles.archSubDescription}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};


// end of file
// Note: Make sure to add the corresponding CSS in Newdesign.module.css for the new classes used in ArchCards component.
const DesignerSection = () => {
  return (
    <section className={styles.designer_section_root}>
      {/* Left side: Images Composition */}
      <div className={styles.designer_visual_composition}>
        <img 
          src="angle.renew.jpg" // Apni bari image yaha lagayein
          alt="Main Portrait" 
          className={styles.designer_primary_portrait} 
        />
        <img 
          src="angle.mini.jpg" // Apni choti image yaha lagayein
          alt="Overlay Detail" 
          className={styles.designer_secondary_snapshot} 
        />
      </div>

      {/* Right side: Narrative Content */}
      <div className={styles.designer_narrative_wrapper}>
        <h2 className={styles.designer_narrative_heading}>
          The Visionary Behind  The Craft
        </h2>
        <p className={styles.designer_narrative_description}>
         Blending timeless elegance with contemporary sophistication, our lead designer transforms abstract concepts into opulent realities. With a meticulous eye for detail and a passion for bespoke excellence, every creation is more than just a product—it is a legacy of luxury
      
        </p>
       <button className={styles.designer_action_trigger}>
          <span>Explore The Designs</span>
        </button>
      </div>
    </section>
  );
};
// end of file
// Note: Make sure to add the corresponding CSS in Newdesign.module.css for the new classes used in DesignerSection component.
const JewelryGallery = () => {
  return (
    <section className={styles.jwl_grid_2026_container}>
      <header className={styles.jwl_header_wrapper}>
        <span className={styles.jwl_subheading_gold}>Pure Gold Artistry</span>
        <h2 className={styles.jwl_main_heading_serif}>Exquisite Masterpieces</h2>
      </header>

      <div className={styles.jwl_gallery_bento_box}>
        {/* Item 1: Large Portrait (Left) */}
        <div className={`${styles.jwl_item_card_root} ${styles.jwl_item_featured_long}`}>
          <img src="necklace-big.jpg" alt="Necklace" className={styles.jwl_asset_fluid_img} />
        </div>

        {/* Item 2: Landscape Image (Middle Top) */}
        <div className={`${styles.jwl_item_card_root} ${styles.jwl_item_landscape_top}`}>
          <img src="earrings-wide.jpg" alt="Earrings" className={styles.jwl_asset_fluid_img} />
        </div>

        {/* Item 3: Engagement Ring (Top Right) */}
        <div className={styles.jwl_item_card_root}>
          <img src="ring-1.jpg" alt="Engagement Ring" className={styles.jwl_asset_fluid_img} />
        </div>

        {/* Item 4: Naya Card (Engagement Ring ke niche) */}
        <div className={styles.jwl_item_card_root}>
          <img src="bracelet-new.jpg" alt="Luxury Bracelet" className={styles.jwl_asset_fluid_img} />
        </div>

        {/* Item 5: Small Bottom Middle 1 */}
        <div className={styles.jwl_item_card_root}>
          <img src="pendant.jpg" alt="Pendant" className={styles.jwl_asset_fluid_img} />
        </div>

        {/* Item 6: Small Bottom Middle 2 */}
        <div className={styles.jwl_item_card_root}>
          <img src="ring-2.jpg" alt="Gold Ring" className={styles.jwl_asset_fluid_img} />
        </div>
      </div>
    </section>
  );
};