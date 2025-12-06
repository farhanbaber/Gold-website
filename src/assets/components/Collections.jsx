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
            <h1 className={styles.mainHeading}>Jewellery Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>

            <div className={styles.mainimg}>
                <img src="/orighover.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/orignal.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.price}>
                <span>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        
        {/* CARD 2 */}
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Jewellery Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>

            <div className={styles.mainimg}>
                <img src="/secimg.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/secimghover.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.price}>
                <span>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

        {/* ... (Remaining Cards follow the same clean structure) ... */}
        
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Jewellery Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/p-1.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/p-2.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Jewellery Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/p-1.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/p-2.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>
        
        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Jewellery Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/p-1.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/p-2.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Jewellery Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/p-1.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/p-2.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Jewellery Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/p-1.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/p-2.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

        <div className={styles.goldCard}>
            <h1 className={styles.mainHeading}>Jewellery Set</h1>
            <div className={styles.toppara}>
                <p>Fayaz Jewellers</p>
            </div>
            <div className={styles.mainimg}>
                <img src="/p-1.png" alt="Jewellery" className={styles.imgDefault} />
                <img src="/p-2.png" alt="Hover" className={styles.imgHover} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.price}>
                <span>$20.4</span>
                <button className={styles.addBtn}><span>Add to Cart</span></button>
            </div>
        </div>

    </div>
    {/* PRODUCT GRID CONTAINER END */}
</section>
    

    

    
</div>
  )
}

export default Collections
