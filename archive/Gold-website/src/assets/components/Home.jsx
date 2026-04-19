import React from 'react'
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext.jsx';
import { buildProductId } from '../../utils/productId.js';
import GoldPriceChart from './GoldPriceChart.jsx';

const Home = () => {
  const [liked, setLiked] = React.useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const fadeInScroll = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className={styles["body"]}>
      {/* archived copy of Home.jsx */}
    </div>
  )
}

export default Home;
