import React ,{useEffect}  from "react";
import styles from "./Advertisement.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {fetchHome} from "../../pages/DataFetch/HomeFetchData";

const Advertisement = () =>{

    const Home = useSelector(state => state.home.data);
 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchHome());
  
    }, [dispatch ]);
  
  
   
  console.log(Home.data?.ad? Home.data.ad :null)
  
    return(
        <div className="container">
        <div className={styles.advBlock}>
        <img src={Home.data?.ad?.image? Home.data.ad.image : null}  alt="advertisement"/>
        </div>

        </div>
    )
}

export default Advertisement;