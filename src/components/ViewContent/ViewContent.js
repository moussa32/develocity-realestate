import React , {useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "./ViewContent.module.css";
import {AiOutlineHeart} from "react-icons/ai";
import {IoBedSharp} from "react-icons/io5";
import {GiBathtub} from "react-icons/gi";
import {BiArea} from "react-icons/bi";
import person from "../../assets/person.png";
import {BsTelephoneFill} from "react-icons/bs";
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellEachAdv } from "../../pages/DataFetch/SellEachAdvFetchData";
import {  GoogleMap, useLoadScript } from '@react-google-maps/api';
import parse from 'html-react-parser';


const ViewContent=()=>{

    let { categoryId } = useParams();
    console.log(categoryId)


    const sellEachAdv = useSelector(state => state.sellEachAdv.data);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSellEachAdv());

  }, [dispatch ]);

  const {isLoaded , loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWZCkmkzES9K2-Ci3AhwEmoOdrth04zKs",
    
  });
  
  if(loadError) return "Error Loading Maps";
  if(!isLoaded) return "Loading Maps";
 
console.log("gaga" , sellEachAdv.data)
   
    return(
        <div className="container">
        {sellEachAdv?.data?.advertisement &&
            sellEachAdv?.data?.advertisement.map(function(el , idx){
                if(el.id == categoryId){

                let propAmin=el?.category;
                console.log("rere" ,propAmin.property_amentities)
                let lat= parseFloat(el.lat);
                let lng= parseFloat(el.lng);
                console.log(lat)
                console.log(lng)

                const mapContainerStyle ={
                    width: "100%",
                    height: "300px",
                    position: "relative"
                  };

                  const center ={
                    lat: lat ,
                    lng: lng,
                  };

                  const options ={
                    disableDefaultUI: true,
                    zoomControl: true,
                  }
                
console.log("wee" ,propAmin.property_amentities)

              let content=  <div className={styles.viewContent}>
                <div className={styles.gallery}>
                <Carousel>
                {el?.images?.map(function(data2,idx){
                    let imgData= data2
                    console.log("ree" , sellEachAdv.data)

                    return(
                        <div>
                        <img src={imgData} alt="gallery"/>
                       
                    </div>
                    )
                })}
                
               
               
               
               
               
            </Carousel>
        
            <div className={styles.descriptionCard}>
            <h1 className={styles.title}>Description</h1>
            <p>{el.desc}</p>
            </div>
        
            <div className={styles.detailsCard}>
            
            <div className={styles.detailsBlock}>
            <h2 className={propAmin?.community_amentities? null : styles.hide}>community amintities</h2>
            <ul className={styles.detailsList}>
            {propAmin?.community_amentities?.map((eg=>(
                <li>{eg.property}</li>
             )))}
            </ul>
           
            </div>
        
            <div className={` ${propAmin.property_amentities && propAmin.community_amentities? styles.detailsBlock: styles.hide}`}>
            <h2 className={propAmin?.property_amentities? null : styles.hide}>property amintities</h2>
            <ul className={styles.detailsList}>
         {propAmin?.property_amentities?.map((ex=>(
            <li>{ex.property}</li>
         )))}
           
            </ul>
            </div>
        
            </div>
                </div>
        
                <div className={styles.detailsSide}>
                <div className={styles.cardPrice}>
                <div className={styles.price}>
                <p>{el.price}</p>
                <AiOutlineHeart className={styles.heartIcon}/>
                </div>
                <ul className={styles.properties}>
                <li className={el.bedrooms? null : styles.hide}><IoBedSharp className={styles.icon}/>{el.bedrooms}</li>
                <li className={el.beathrooms? null : styles.hide}><GiBathtub className={styles.icon}/>{el.bathrooms}</li>
                <li><BiArea className={styles.icon}/>{el.size}</li>
                </ul>
                <div className={styles.location}>
                <p>{el.location}</p>
                <p>3 days ago</p>
                </div>
                </div>
                <div className={styles.cardPrice}>
                <h2>Seller Desription</h2>
                <div className={styles.personDetails}>
                <img src={person} alt="personal picture"/>
                <div className={styles.sellerDetails}>
                <h3>{el.seller_name}</h3>
                <span>commerical ID : 235846</span><br/>
                <span className={styles.changeFont}>Memeber since Aug 2018</span>
                </div>
                </div>
                <button className={styles.chatBtn}>chat with seller</button>
                <h4><BsTelephoneFill className={styles.phoneIcon}/>{el.seller_phone}</h4>
                </div>
        
                <div className={styles.cardPrice}>
                <h2>Your safety matters to us!        </h2>
                <ul className={styles.saftyList}>
                {parse(sellEachAdv?.data?.instructions?.instructions)}
                
                </ul>
                </div>
        
                <div className={styles.advBlock}>
                <img src={sellEachAdv?.data?.ad?.image} alt="advertisement"/>
                <button className={styles.advBtn}>learn more</button>
                </div>
        </div>
                </div>
let map=  <div className={styles.mapSection}>
<h2>posted in</h2>
<h3>{el.location}</h3>
<GoogleMap 
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={{center}}
    options={options}
   
   >
   
    
    </GoogleMap>
<a href="#" className={styles.location}>see location</a>

</div>
                return(
                    [content , map]
                )

         } })

               

        }
   

       
        <div className={styles.safe}>
        <span>AD ID 112467790</span>
        <a href="#">Report This Ad</a>
        </div>
        </div>
    )
}

export default ViewContent;