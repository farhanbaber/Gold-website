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
          <h1 className={styles.title}>
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
            Signature <i className={`fa-brands fa-jedi-order ${styles.goldenIcon}`}></i> Designs
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
            Royal Bangles <i className={`fa-solid fa-ring ${styles.goldenIcon}`}></i> Collections
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

    </section>

    

    
</div>
  )
}

export default Collections
