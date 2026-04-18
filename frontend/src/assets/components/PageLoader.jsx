import styles from "./PageLoader.module.css";

const PageLoader = ({ show }) => {
  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.loaderBox}>
        <div className={styles.logoRing}>
          <img 
            src="/loader.img.png" 
            alt="Fayaz Jewellers" 
            className={styles.logo} 
          />
        </div>
        <h3>Fayaz Jewellers</h3>
        <p>Crafting timeless elegance...</p>
      </div>
    </div>
  );
};

export default PageLoader;
