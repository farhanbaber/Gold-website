import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Mencollection.module.css';

const ringImages = [
  '/pla.1.png', '/pla.2.png', '/pla.3.png', '/pla.4.png', '/pla.5.png',
  '/pla.6.png', '/pla.7.png', '/pla.8.png', '/pla.9.png', '/pla.10.png',
  '/pla.11.png', '/pla.12.png', '/pla.13.png', '/pla.14.png', '/pla.15.png',
  '/pla.16.png', '/pla.17.png', '/pla.18.png', '/pla.19.png', '/pla.20.png'
];

const RingSection = () => {
  // LEFT: 15 Images (Manual Paths)
  const columnLeftData = [
    { id: 'l1', img: '/std.1.png', price: '$2500', title: 'Elite Diamond' },
    { id: 'l2', img: '/std.2.png', price: '$1800', title: 'Gold Classic' },
    { id: 'l3', img: '/std.3.png', price: '$3200', title: 'Royal Stone' },
    { id: 'l4', img: '/std.4.png', price: '$4500', title: 'Platinum Silk' },
    { id: 'l5', img: '/std.5.png', price: '$2100', title: 'Rose Gold' },
    { id: 'l6', img: '/std.6.png', price: '$2700', title: 'Ruby Spark' },
    { id: 'l7', img: '/std.7.png', price: '$1900', title: 'Silver Mist' },
    { id: 'l8', img: '/std.8.png', price: '$3100', title: 'Emerald' },
    { id: 'l9', img: '/std.9.png', price: '$2400', title: 'Topaz' },
    { id: 'l10', img: '/std.10.png', price: '$2900', title: 'Opal' },
    { id: 'l11', img: '/std.11.png', price: '$3500', title: 'Pearl' },
    { id: 'l12', img: '/std.12.png', price: '$4200', title: 'Jade' },
    { id: 'l13', img: '/std.13.png', price: '$1600', title: 'Bronze' },
    { id: 'l14', img: '/std.15.png', price: '$3800', title: 'Sapphire' },
    { id: 'l15', img: '/std.16.png', price: '$5000', title: 'Crown' },
  ];

  // RIGHT: 15 Images (Manual Paths)
  const columnRightData = [
    { id: 'r1', img: '/std.17.png', price: '$1200', title: 'Silver Oak' },
    { id: 'r2', img: '/std.18.png', price: '$2900', title: 'Emerald Cut' },
    { id: 'r3', img: '/std.19.png', price: '$3800', title: 'Sapphire Blue' },
    { id: 'r4', img: '/std.20.png', price: '$1500', title: 'Ruby Red' },
    { id: 'r5', img: '/std.21.png', price: '$5000', title: 'Vintage Glow' },
    { id: 'r6', img: '/std.22.png', price: '$2200', title: 'Gold Band' },
    { id: 'r7', img: '/std.23.png', price: '$1700', title: 'Rose Petal' },
    { id: 'r8', img: '/std.24.png', price: '$3300', title: 'Moissanite' },
    { id: 'r9', img: '/std.25.png', price: '$2600', title: 'Titanium' },
    { id: 'r10', img: '/std.26.png', price: '$2100', title: 'Amber' },
    { id: 'r11', img: '/std.27.jpg', price: '$3900', title: 'Amethyst' },
    { id: 'r12', img: '/std.28.png', price: '$4100', title: 'Zircon' },
    { id: 'r13', img: '/std.29.png', price: '$1400', title: 'Steel' },
    { id: 'r14', img: '/std.30.jpg', price: '$3600', title: 'Crystal' },
    { id: 'r15', img: '/std.31.png', price: '$4800', title: 'Royal' },
  ];

  const buildScrollList = (data) => (
    /* Triple the data for ultimate smoothness so no gaps appear */
    [...data, ...data, ...data].map((item, index) => (
      <div key={`${item.id}-${index}`} className={styles.Scroll_Card_Unit_88}>
        <div className={styles.Scroll_Img_Wrapper_99}>
          <img src={item.img} alt={item.title} />
        </div>
        <div className={styles.Scroll_Info_Box_11}>
          <span className={styles.Scroll_Price_Tag_Bold}>{item.price}</span>
          <p className={styles.Scroll_Title_Muted}>{item.title}</p>
        </div>
      </div>
    ))
  );

  return (
    <div className={styles.Vertical_Scroll_Main_Section}>
      <div className={styles.Vertical_Scroll_Inner_Layout}>
        {/* Left Column (Ab aapki marzi ke mutabiq directions set hain) */}
        <div className={`${styles.Vertical_Track_Base} ${styles.Anim_Slide_Up_Infinite}`}>
          {buildScrollList(columnLeftData)}
        </div>

        {/* CENTER STAND */}
        <div className={styles.Center_Stand_Wrapper}>
          <img src="/strads.maim.png" alt="Jewelry Stand" className={styles.Stand_Img} />
          <div className={styles.Stand_Overlay}>
            <span className={styles.Stand_Text}>PREMIUM STADS</span>
          </div>
        </div>

        {/* Right Column */}
        <div className={`${styles.Vertical_Track_Base} ${styles.Anim_Slide_Down_Infinite}`}>
          {buildScrollList(columnRightData)}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   2. FOREVER BOND GRID (12 Cards Wala Section)
   ============================================================ */
  const ForeverBondGrid = () => {
  return (
    <main className={styles.fb_main_wrapper_v1}>
      <div className={styles.fb_section_header_divider}>
        <h1 className={styles.fb_header_title_text}>Forever Bond Bracelet</h1>
      </div>

      <div className={styles.fb_product_grid_system}>
        
        {/* CARD 1 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Aurum Elite</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/menc.1.png" alt="Ring 1" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$1500</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
            <button className={styles.cta}><span>Add To Cart</span></button>
            
            
          </div>
        </article>

        {/* CARD 2 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Regal Classic</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.2.png" alt="Ring 2" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$1800</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 3 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Luxe Bond</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.3.png" alt="Ring 3" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$1200</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 4 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Nova Spark</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.4.png" alt="Ring 4" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$2500</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 5 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Eterna Gold</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.5.png" alt="Ring 5" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$3000</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 6 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Crown Royal</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.6.png" alt="Ring 6" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$4500</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 7 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Vero Silver</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.7.png" alt="Ring 7" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$1100</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 8 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Solace Gem</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.8.png" alt="Ring 8" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$2200</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 9 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Glimmer Rose</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.9.png" alt="Ring 9" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$950</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 10 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Royal Velvet</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.10.png" alt="Ring 10" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$5000</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 11 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Luna Mist</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.11.png" alt="Ring 11" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$1600</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

        {/* CARD 12 */}
        <article className={styles.fb_card_component_root}>
          <div className={styles.fb_product_identity_group}>
            <h2 className={styles.fb_item_nomenclature}>Aura Glow</h2>
            <p className={styles.fb_brand_attribution}>Fayaz Jewellers</p>
          </div>
          <div className={styles.fb_visual_asset_container}>
            <img src="/mens.re.png" alt="Ring 12" className={styles.fb_core_image_element} />
          </div>
          <div className={styles.fb_action_utility_bar}>
            <span className={styles.fb_price_display_unit}>$1400</span>
            {/* <button className={styles.fb_primary_cta_button}>Add To Cart</button> */}
                        <button className={styles.cta}><span>Add To Cart</span></button>

          </div>
        </article>

      </div>
    </main>
  );
};
/* ============================================================
   2. MAIN GEM SECTION (Wrapper)
   ============================================================ */
const GemSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ringImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Aapka Existing Hero Section */}
      <section className={styles.heroContainer}>
        <div className={styles.mainCard}>
          <div className={styles.leftContent}>
            <div className={styles.imageCircle}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={ringImages[index]}
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 15 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.43, 0.13, 0.23, 0.96] 
                  }}
                  className={styles.animatedRing}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className={styles.textContent}>
            <span className={styles.subText}>Premium Rings</span>
            <h1 className={styles.mainTitle}>ESSENCE</h1>
            <div className={styles.lineWrapper}>
              <div className={styles.movingLine}></div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <motion.img 
              src="gold.bra.png" 
              alt="Luxury Gemstone" 
              className={styles.largeStaticGem}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>





      

      {/* --- SCROLLING SECTION ADDED HERE --- */}
      <RingSection />
      <ForeverBondGrid />

    </div>
    
  );
};


export default GemSection;


