import React from 'react'

 import styles from "./Collection.module.css";
// import Collections from './Collections';


const Collections = () => {
  return (
    <div className={styles.collectionBody}>
  <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.titlese}>
            Classic and<br />
            Elegant Silver<br />
            Jewelry.
          </h1>

          <p className={styles.subtitle}>
            The only blink that matters.<br />
            Shop high class silver jewelry in our shop.
          </p>

          <button className={styles.shopButton}>
            Shop Now <span className={styles.arrow}>→</span>
          </button>
        </div>

        {/* Right Images */}
        <div className={styles.imageWrapper}>
          <div className={styles.mainImage}>
            <img
              src="/collec 1.png" 
              alt="Elegant silver jewelry on hands"
            />
          </div>

          <div className={styles.sideImage}>
            <img
              src="/collec 2.png"
              alt="Silver necklace"
            />
            <div className={styles.numberedList}>
              <span>Elegance</span>
              <span> Signature</span>
              <span> Imperial</span>
              <span> Precious</span>
            </div>
          </div>

          <div className={styles.starIcon}>✦</div>
        </div>
      </div>

      {/* Decorative dots on the left */}
      <div className={styles.dots}>
        {[...Array(12)].map((_, i) => (
          <span key={i} className={styles.dot}></span>
        ))}
      </div>
    </section>

    {/* // END SECTION */}
    {/* // START NEW SECTION  */}
   <section className={styles.showcase}>
    
    {/* HEADING SECTION START - Added at the very beginning as requested */}
    {/* Note: I removed the extra nested <h2> tags which were causing a syntax error. */}
   <div className={styles.wrapper}>
  <span className={styles.line}></span>

  <h2 className={styles.titles}>
  Signature
    <img
      src="/h.set.png"   // apni image ka path
      alt="Ring Icon"
      className={styles.icon}
    />
    Designs
  </h2>

  <span className={styles.line}></span>
</div>
    {/* HEADING SECTION END */}

    {/* PRODUCT GRID CONTAINER START */}
    <div className={styles.showcasecontainer}>
        
        {/* CARD 1 */}
        <div className={styles.goldCard}>
            {/* cardInner removed, content is direct descendant of goldCard */}
            <h1 className={styles.mainHeading}>Royal Gold Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>

            <div className={styles.mainimg}>
                <img src="/orighover.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/orignal.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.price}>
                <span className={styles.priceValue}>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        
        {/* CARD 2 */}
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Elite Gold Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>

            <div className={styles.mainimg}>
                <img src="/secimg.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/secimghover.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.price}>
                <span className={styles.priceValue}>$24.2</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

        {/* ... (Remaining Cards follow the same clean structure) ... */}
        
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Premium Gold Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="thirdimg.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/thirdimghover.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$60.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 4 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Prime Gold Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/forthimg.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/forthimghover.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$12.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 5 */}
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Gold Deluxe Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/fifthimg.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/fifthimghover.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$79.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 6 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Ultimate Gold Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/sixthimg.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/siximghover.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$40.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 7 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Royal Gold Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/sevenimg.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/sevenimghover.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$76.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 8 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Classic Gold Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/eightimg.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/eightimghover.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$34.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

    </div>
    {/* PRODUCT GRID CONTAINER END */}
</section>
{/* end section */}

{/* strar new section */}

<section className={styles.exclusiveShowcase}>
      <div className={styles.container}>
        
        {/* Left Image */}
        <div className={styles.imageWrappers}>
          <img 
            src="collectionimg.png" 
            alt="Model wearing jewelry" 
            className={styles.mainImages} 
          />
          <div className={styles.overlay}>
            <span className={styles.hoverText}>Explore Collection</span>
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h5 className={styles.pill}>New Arrival</h5>
          <h1 className={styles.title}>
            The Art Of Radiant <br />
            <span className={styles.highlight}>Reffinement</span>
          </h1>
          <p className={styles.description}>
            Discover timeless elegance with our handcrafted pieces that blend modern sophistication 
            and classic artistry. Each creation tells a story of luxury and grace.
          </p>
          
          <button className={styles.ctaButton}>
            Shop Now
            <span className={styles.arrow}>→</span>
          </button>

          {/* Small Rings Image */}
          <div className={styles.smallImageWrapper}>
            <img 
              src="collectionimgtwo.png" 
              alt="Gold rings" 
              className={styles.smallImage} 
            />
          </div>
        </div>
      </div>
    </section>  
    {/* end of section */}
    {/* strat new section  */}

    <section className={styles.newSection}>
<div className={styles.wrapper}>
  <span className={styles.line}></span>

  <h2 className={styles.titles}>
    Royal Bangles
    <img
      src="/bangle.re.png"   // apni image ka path
      alt="Ring Icon"
      className={styles.icon}
    />
    Collections
  </h2>

  <span className={styles.line}></span>
</div>
    {/* HEADING SECTION END */}

    {/* PRODUCT GRID CONTAINER START */}
    <div className={styles.showcasecontainer}>
        
        {/* CARD 1 */}
        <div className={styles.goldCard}>
            {/* cardInner removed, content is direct descendant of goldCard */}
            <h1 className={styles.mainHeading}>Classic Cut</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>

            <div className={styles.mainimg}>
                <img src="/bang1.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/bang.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.price}>
                <span className={styles.priceValue}>$24.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        
        {/* CARD 2 */}
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Royal Line</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>

            <div className={styles.mainimg}>
                <img src="/bang2.jpg" alt="Jewellery" className={styles.imgDefault} />
                <img src="/band.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.price}>
                <span className={styles.priceValue}>$13.2</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

        {/* ... (Remaining Cards follow the same clean structure) ... */}
        
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Prime Gold</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="bang3.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/bang3.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$32.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 4 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Elite Band</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/bang4.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/bang4.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$92.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 5 */}
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Pure Grace</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/bang5.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/bang5.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$56.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 6 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Golden Edge</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/bang6.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/bang6.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$60.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 7 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Heritage Band</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/bang7.jpg" alt="Jewellery" className={styles.imgDefault} />
                <img src="/bang7.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$54.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 8 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Fine Craft</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/bang8.jpg" alt="Jewellery" className={styles.imgDefault} />
                <img src="/bang8.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$24.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

    </div>

    </section>
{/* end of section */}
{/* strat new section */}
    <section className={styles.trendingSection}>
      <div className={styles.textWrapper}>
        <h2 className={styles.mainTitle}>TRENDING</h2>
        <p className={styles.subtitle}>MINIMALISTIC RINGS DESIGN</p>
      </div>

      <div className={styles.imagesGrid}>
        <div className={styles.imgItem1}>
          <img src="/ring five.png" alt="Minimalist pendant necklace" />
        </div>
        <div className={styles.imgItem2}>
          <img src="/ring four.png" alt="Circular gold pendant" />
        </div>
        <div className={styles.imgItem3}>
          <img src="/ring three.png" alt="Rose gold ring with clear gem" />
        </div>
        <div className={styles.imgItem4}>
          <img src="/ring two.png" alt="Green rectangular pendant necklace" />
        </div>
        <div className={styles.imgItem5}>
          <img src="/ring one1.png" alt="Rose gold ring with purple gem" />
        </div>
        <div className={styles.imgItem6}>
          <img src="/ring 6.png" alt="Gold ring with Greek key pattern" />
        </div>
        <div className={styles.imgItem7}>
          <img src="/ring 5.png" alt="Thin gold Greek key band" />
        </div>
      </div>
    </section>
    {/* end of section */}
    {/* strat new section here  */}
    <section className={styles.ringsSection}>
<div className={styles.wrapper}>
  <span className={styles.line}></span>

  <h2 className={styles.titles}>
    Forever Bond 
    <img
      src="/rings.re.png"   // apni image ka path
      alt="Ring Icon"
      className={styles.icon}
    />
    Rings
  </h2>

  <span className={styles.line}></span>
</div>

    {/* HEADING SECTION END */}

    {/* PRODUCT GRID CONTAINER START */}
    <div className={styles.showcasecontainer}>
        
        {/* CARD 1 */}
        <div className={styles.goldCard}>
            {/* cardInner removed, content is direct descendant of goldCard */}
            <h1 className={styles.mainHeading}>Aurum</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>

            <div className={styles.mainimg}>
                <img src="/rings.1.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/rings.1.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.price}>
                <span className={styles.priceValue}>$1.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        
        {/* CARD 2 */}
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Regal</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>

            <div className={styles.mainimg}>
                <img src="/rings.2.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/rings.2.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.price}>
                <span className={styles.priceValue}>$9.2</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

        {/* ... (Remaining Cards follow the same clean structure) ... */}
        
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Luxe</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/rings.3.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/rings.3.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$7.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 4 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Nova</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/rings.4.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/rings.4.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$42.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 5 */}
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Eterna</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/rings.5.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/rings.5.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$3.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 6 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Crown</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/rings.6.jpg" alt="Jewellery" className={styles.imgDefault} />
                <img src="/rings.6.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$9.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 7 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Vero</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/rings.7.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/rings.7.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$01.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        {/* card 8 */}

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Solace</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/rings.8.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/rings.8.h.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span className={styles.priceValue}>$2.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

    </div>
    </section>

    
</div>
  )
}

export default Collections
