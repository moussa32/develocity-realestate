import React , {useEffect , useState} from "react";
import styles from "./SellContent.module.css";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {fetchSell} from "../../pages/DataFetch/SellFetchData";


const SellContent =() =>{
   
  const sell = useSelector(state => state.sell.data);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSell());

  }, [dispatch ]);


 
console.log(sell)


    return(
        <div className="container">
        <h1 className={styles.title}>post your advertisement</h1>
        <h2 className={styles.secondTitle}>select category</h2>
       
            

                
            
           

       
        <div className={styles.categories}>
       
        { sell?.data?.categories && 
            sell.data.categories.map((el => (
                <Link className={styles.linkBlock} to={`/sellHome/${el.id}`  }><img src={el.image}  /><p>{el.name}</p></Link>
   
            ) ))}
            
           
           
        </div>
        </div>
    )
}


export default SellContent;