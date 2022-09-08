import React from "react";
import styles from "./DetailsContent.module.css";
import {GiHouseKeys} from "react-icons/gi";
import {AiFillHome} from "react-icons/ai";
import {IoLocationSharp} from "react-icons/io5";
import cat from "../../assets/cat.png";
import {IoBedSharp} from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import {BiArea} from "react-icons/bi";
import {GiBathtub} from "react-icons/gi";
import ReactPaginate from 'react-paginate';

const DetailsContent=()=>{
    return(
       <div className="container">
       <div className={styles.wholePage}>
       <div className={styles.filterSection}>
       <h1>Filters</h1>
       <hr/>
       <div className={styles.select}>
       <select>
       <option>Property</option>
       <option>Property</option>
       <option>Property</option>
       </select>
       <GiHouseKeys className={styles.selectIcon}/>
       </div>

       <div className={styles.select}>
       <select>
       <option>Type</option>
       <option>Type</option>
       <option>Type</option>
       </select>
       <AiFillHome className={styles.selectIcon}/>
       </div>

       <div className={styles.select}>
       <input type="text" placeholder="Location"/>
       <IoLocationSharp className={styles.selectIcon}/>
</div>

<div className={styles.counterSection}>
<input type="number" placeholder="Min sq m" id="points" name="points" step="3"/>
<input type="number" placeholder="Max sq m" id="points2" name="points" step="3"/>
</div>

<h2>Property Amintities</h2>
<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>
<br/>
<h2>Community Amintities</h2>
<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

<div className={styles.checkBlock}>
<input type="checkbox" id="air" name="air" value="air"/>
<label for="air"> Air Conditioning</label><br/>
</div>

       </div>

    <div className={styles.blocksSection}>
    <div className={styles.block}>
   <img src={cat} alt="home"/>
   <div className={styles.cardText}>
   <div className={styles.text1}>
   <h6>for rent</h6>
   <span className={styles.offer}>hot deals</span>
   </div>
   <h1>condo miami</h1>
   <div className={styles.price}>
   <span className={styles.old}>$1000</span>
   <span className={styles.new}>$900 per day</span>
   </div>
   <div className={styles.details}>
   <ul className={styles.detailsTitle}>
   <li><IoLocationSharp className={styles.icon}/>location:</li>
   <li><MdHomeWork className={styles.icon}/>type:</li>
   <li><IoBedSharp className={styles.icon}/>bedrooms:</li>
   <li><BiArea className={styles.icon}/>floor area:</li>
   <li><GiBathtub className={styles.icon}/>bathroom:</li>
   </ul>
   <ul className={styles.detailsInfo}>
   <li>miami, fl united states</li>
   <li>apartment</li>
   <li>3</li>
   <li>140 sq m</li>
   <li>4</li>
   </ul>
   </div>
   <button className={styles.detailsBtn}>view details</button>
   </div>
    </div>

    <div className={styles.block}>
    <img src={cat} alt="home"/>
    <div className={styles.cardText}>
    <div className={styles.text1}>
    <h6>for rent</h6>
    <span className={styles.offer}>hot deals</span>
    </div>
    <h1>condo miami</h1>
    <div className={styles.price}>
    <span className={styles.old}>$1000</span>
    <span className={styles.new}>$900 per day</span>
    </div>
    <div className={styles.details}>
    <ul className={styles.detailsTitle}>
    <li><IoLocationSharp className={styles.icon}/>location:</li>
    <li><MdHomeWork className={styles.icon}/>type:</li>
    <li><IoBedSharp className={styles.icon}/>bedrooms:</li>
    <li><BiArea className={styles.icon}/>floor area:</li>
    <li><GiBathtub className={styles.icon}/>bathroom:</li>
    </ul>
    <ul className={styles.detailsInfo}>
    <li>miami, fl united states</li>
    <li>apartment</li>
    <li>3</li>
    <li>140 sq m</li>
    <li>4</li>
    </ul>
    </div>
    <button className={styles.detailsBtn}>view details</button>
    </div>
     </div> 

     <div className={styles.block}>
     <img src={cat} alt="home"/>
     <div className={styles.cardText}>
     <div className={styles.text1}>
     <h6>for rent</h6>
     <span className={styles.offer}>hot deals</span>
     </div>
     <h1>condo miami</h1>
     <div className={styles.price}>
     <span className={styles.old}>$1000</span>
     <span className={styles.new}>$900 per day</span>
     </div>
     <div className={styles.details}>
     <ul className={styles.detailsTitle}>
     <li><IoLocationSharp className={styles.icon}/>location:</li>
     <li><MdHomeWork className={styles.icon}/>type:</li>
     <li><IoBedSharp className={styles.icon}/>bedrooms:</li>
     <li><BiArea className={styles.icon}/>floor area:</li>
     <li><GiBathtub className={styles.icon}/>bathroom:</li>
     </ul>
     <ul className={styles.detailsInfo}>
     <li>miami, fl united states</li>
     <li>apartment</li>
     <li>3</li>
     <li>140 sq m</li>
     <li>4</li>
     </ul>
     </div>
     <button className={styles.detailsBtn}>view details</button>
     </div>
      </div> 

      <div className={styles.block}>
      <img src={cat} alt="home"/>
      <div className={styles.cardText}>
      <div className={styles.text1}>
      <h6>for rent</h6>
      <span className={styles.offer}>hot deals</span>
      </div>
      <h1>condo miami</h1>
      <div className={styles.price}>
      <span className={styles.old}>$1000</span>
      <span className={styles.new}>$900 per day</span>
      </div>
      <div className={styles.details}>
      <ul className={styles.detailsTitle}>
      <li><IoLocationSharp className={styles.icon}/>location:</li>
      <li><MdHomeWork className={styles.icon}/>type:</li>
      <li><IoBedSharp className={styles.icon}/>bedrooms:</li>
      <li><BiArea className={styles.icon}/>floor area:</li>
      <li><GiBathtub className={styles.icon}/>bathroom:</li>
      </ul>
      <ul className={styles.detailsInfo}>
      <li>miami, fl united states</li>
      <li>apartment</li>
      <li>3</li>
      <li>140 sq m</li>
      <li>4</li>
      </ul>
      </div>
      <button className={styles.detailsBtn}>view details</button>
      </div>
       </div> 

       <div className={styles.block}>
       <img src={cat} alt="home"/>
       <div className={styles.cardText}>
       <div className={styles.text1}>
       <h6>for rent</h6>
       <span className={styles.offer}>hot deals</span>
       </div>
       <h1>condo miami</h1>
       <div className={styles.price}>
       <span className={styles.old}>$1000</span>
       <span className={styles.new}>$900 per day</span>
       </div>
       <div className={styles.details}>
       <ul className={styles.detailsTitle}>
       <li><IoLocationSharp className={styles.icon}/>location:</li>
       <li><MdHomeWork className={styles.icon}/>type:</li>
       <li><IoBedSharp className={styles.icon}/>bedrooms:</li>
       <li><BiArea className={styles.icon}/>floor area:</li>
       <li><GiBathtub className={styles.icon}/>bathroom:</li>
       </ul>
       <ul className={styles.detailsInfo}>
       <li>miami, fl united states</li>
       <li>apartment</li>
       <li>3</li>
       <li>140 sq m</li>
       <li>4</li>
       </ul>
       </div>
       <button className={styles.detailsBtn}>view details</button>
       </div>
        </div> 


        <div className={styles.block}>
        <img src={cat} alt="home"/>
        <div className={styles.cardText}>
        <div className={styles.text1}>
        <h6>for rent</h6>
        <span className={styles.offer}>hot deals</span>
        </div>
        <h1>condo miami</h1>
        <div className={styles.price}>
        <span className={styles.old}>$1000</span>
        <span className={styles.new}>$900 per day</span>
        </div>
        <div className={styles.details}>
        <ul className={styles.detailsTitle}>
        <li><IoLocationSharp className={styles.icon}/>location:</li>
        <li><MdHomeWork className={styles.icon}/>type:</li>
        <li><IoBedSharp className={styles.icon}/>bedrooms:</li>
        <li><BiArea className={styles.icon}/>floor area:</li>
        <li><GiBathtub className={styles.icon}/>bathroom:</li>
        </ul>
        <ul className={styles.detailsInfo}>
        <li>miami, fl united states</li>
        <li>apartment</li>
        <li>3</li>
        <li>140 sq m</li>
        <li>4</li>
        </ul>
        </div>
        <button className={styles.detailsBtn}>view details</button>
        </div>
         </div> 

     
    </div>
       </div>
       </div>
    )
}

export default DetailsContent;