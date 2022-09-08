import React , {useEffect} from "react";
import styles from "./Banner.module.css";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {fetchHome} from "../../pages/DataFetch/HomeFetchData";

const Banner = () =>{

    const Home = useSelector(state => state.home.data);
 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchHome());
  
    }, [dispatch ]);
  

    return(
        <div className="container">
        <div className={styles.bannerBlock}>
        <img src={Home.data?.banner?.image? Home.data.banner.image : null} alt="banner image"/>
        <div className={styles.bannerCover}>
        <p>now you can sell your porpirty easily, conveniently and in a safe way</p>
        <Link to="/sell" className={styles.sellBtn}>+ sell</Link>
        </div>
        </div>
        </div>
    )
}

export default Banner;