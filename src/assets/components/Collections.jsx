import React from 'react'

 import styles from "./Collection.module.css";
// import Collections from './Collections';
const product = [
    { id: 1, img1: "/img/a.jpg", img2: "/img/a2.jpg", title: "Gold Ring", price: "$199" },
  { id: 2, img1: "/img/b.jpg", img2: "/img/b2.jpg", title: "Necklace", price: "$349" },
  { id: 3, img1: "/img/c.jpg", img2: "/img/c2.jpg", title: "Bracelet", price: "$129" },
  { id: 4, img1: "/img/d.jpg", img2: "/img/d2.jpg", title: "Earrings", price: "$89" },
  { id: 5, img1: "/img/e.jpg", img2: "/img/e2.jpg", title: "Bangles", price: "$159" },
  { id: 6, img1: "/img/f.jpg", img2: "/img/f2.jpg", title: "Chain", price: "$249" },
  { id: 7, img1: "/img/g.jpg", img2: "/img/g2.jpg", title: "Gold Coin", price: "$499" },
  { id: 8, img1: "/img/h.jpg", img2: "/img/h2.jpg", title: "Pendant", price: "$219" },
  { id: 9, img1: "/img/i.jpg", img2: "/img/i2.jpg", title: "Luxury Watch", price: "$899" },

];
const Collections = () => {
  return (
    <div>
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
      <div className={styles.showcaseheading}>
  <div className={styles.wrapper}>
      <span className={styles.line}></span>
      <h2 className={styles.titles}>Signature Designs</h2>
      <span className={styles.line}></span>
    </div>
    <div className={styles.showcasecontainer}>

    </div>

    {/* end div */}
      </div>
      </section>
      
    

    

    
</div>
  )
}

export default Collections
