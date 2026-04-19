import React from 'react'
import styles from './Home.module.css';
import Collections from './Collections';
import { useNavigate } from 'react-router-dom';

const Home = ({ handleLike }) => {
  const [liked, setLiked] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles["body"]}>
      {/* archived copy of Home_old.jsx */}
    </div>
  )
}

export default Home;
