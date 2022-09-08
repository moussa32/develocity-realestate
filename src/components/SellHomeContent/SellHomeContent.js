import React , {Fragment, useEffect, useState , useCallback , useRef , InfoWindow } from "react";
import { useParams } from "react-router";
import styles from "./SellHomeContent.module.css";
import RUG from 'react-upload-gallery';
import 'react-upload-gallery/dist/style.css';
import personal from "../../assets/personal.png";
import { useDispatch, useSelector } from 'react-redux';
import {fetchSell} from "../../pages/DataFetch/SellFetchData";
import axios from "axios";
import { useJsApiLoader, GoogleMap, useLoadScript , MarkerF } from '@react-google-maps/api';
import usePlacesAutocomplete , {getGeocode , getLatLng } from "use-places-autocomplete";
import { Combobox , ComboboxInput , ComboboxPopover , ComboboxList , ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import { current } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";

const libraries = ["places"];
const mapContainerStyle ={
  width: "100%",
  height: "300px",
  position: "relative"
};
const center ={
  lat: 43 ,
  lng: -79,
};
const options ={
  disableDefaultUI: true,
  zoomControl: true,
}


















const SellHomeContent =() =>{

  const { register , handleSubmit } = useForm();
  

    const sell = useSelector(state => state.sell.data);
 
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchSell());
  
    }, [dispatch ]);
  
    
   
    let { categoryId } = useParams();
    console.log(categoryId)
  console.log(sell)
  let sellData ;
 let dataProperty;
 let dataCommunity;
 let dataOptions;

const n = 15;



 const [title,setTitle] = useState("");
 const [bedrooms,setBedrooms] = useState("");
 const [bathrooms,setBathrooms] = useState("");
 const [floor,setFloor] = useState("");
 const [size,setSize] = useState("");
 const [desc,setDesc] = useState("");
 const [price,setPrice] = useState("");

 const [name,setName] = useState("");
 const [phone,setPhone] = useState("");
 const [property,setProperty] = useState("");
 const [negotiable,seNegotiable] = useState(false);
 const [payment,setPayment] = useState("");
 const [typeId,setTypeId] = useState("");
 const [furnished,setFurnished] = useState(false);
 const [equipped,setEquipped] = useState("");
 const [condition,setCondition] = useState("");
 const [contact,setContact] = useState("");
 const [show,setShow] = useState(false);
 const [rental,setRental] = useState("");
 const [propertyAmin,setPropertyAmin] = useState([]);
 const [communityAmin,setCommunityAmin] = useState([]);
 const [gallery, setGallery] = useState([]);
 const [lat,setLat] = useState("");
 const [lng,setLng] = useState("");
const [markers,setMarkers] = useState([]);
const [selected,setSelected] = useState(null);
const [myLocation,setMyLocation] = useState("");
const [value,setValue] = useState("");

const handleMap = useCallback(
  (e) =>{
    console.log(e.latLng.lat());
    console.log(e.latLng.lng());
    console.log(value);
    setLat(e.latLng.lat());
    setLng(e.latLng.lng());
    setMarkers(current => [ ...current , {
      lat: e.latLng.lat(),
      lng: e.latLng.lng()
    }])
    } , []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
      mapRef.current = map;
    } ,[]);

    const panTo = useCallback(({lat , lng}) =>{
      mapRef.current.panTo({lat , lng});
      mapRef.current.setZoom(14);

    },[]);

    const handleMyLocation =(e) =>{
      setValue(e.target.value);

    }


const {isLoaded , loadError } = useLoadScript({
  googleMapsApiKey: "AIzaSyDWZCkmkzES9K2-Ci3AhwEmoOdrth04zKs",
  libraries,
});

if(loadError) return "Error Loading Maps";
if(!isLoaded) return "Loading Maps";


 


 

 









 const handleRental =() =>{
  setShow(true)
 }

 const handleRemoveRental =() =>{
  setShow(false)
 }

 const handleFurnished =() =>{
  setFurnished(true)
 }

 const handleNotFurnished =() =>{
  setFurnished(false)
 }

 const Rental =() =>{
  return(
    <Fragment>
    <label className={styles.label}>Rental Duration</label>
    <div className={styles.radioButtons}>
    
            <div className={styles.radioBtnBlock}>
            <input onChange={(e)=>setRental(e.target.value)} type="radio" id="daily" name="rental_duration" value="daily"/>
      <label for="daily">Daily</label>
    </div>

    <div className={styles.radioBtnBlock}>
    <input onChange={(e)=>setRental(e.target.value)} type="radio" id="monthly" name="rental_duration" value="monthly"/>
  <label for="monthly">Monthly</label>
</div>

<div className={styles.radioBtnBlock}>
    <input onChange={(e)=>setRental(e.target.value)} type="radio" id="yearly" name="rental_duration" value="yearly"/>
  <label for="yearly">Yearly</label>
</div>
      

    </div>
    </Fragment>
  )
 }



 const handleSubmitAdv = async(data , ele) =>  {
  ele.preventDefault();
  const formData = new FormData();
  formData.append("file", data.file[0]);

  console.log("reham" +  ele.target.files)
 

 
    
 
   
  
    
    

 


    const AdvData = {
      title: title,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      floor: floor,
      size: size,
      desc: desc,
      price: price,
      location: "London",
      seller_name: name,
      seller_phone: phone,
      category_id: categoryId,
      property: property,
      negotiable: negotiable,
      payment_method: payment,
      type_id: typeId,
      furnished: furnished,
      equipped: equipped,
      condition: condition,
      contact_method: contact,
      rental_duration: rental,
      property_amentities: propertyAmin,
      community_amentities: communityAmin,
      images: ["D:\home-app\home-app\src\assets" , "D:\home-app\home-app\src\assets"],
       lat: lat,
       lng: lng,
      city_id: 1
     
      

      

    };

    if(gallery.length){
      AdvData.append("file" , gallery)
    }

    const options = {
      headers: { 
        'app_api_key': 'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P', 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FrYXJhdC5kZXZlbG9jaXR5LmFwcC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY2MTg3MTY4MCwiZXhwIjoxNjYyNDc2NDgwLCJuYmYiOjE2NjE4NzE2ODAsImp0aSI6IlFjemk3UjJSVktsdURPZzUiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ljREBCldBfzvnWmG-d-gm7eeJjSvU04mMnwsqomQoY8'
      }
    
    };

await axios.post('https://akarat.develocity.app/api/advertisements', AdvData, formData, options).then(response => {
  console.log("posted data" , response)
  
  });
 
  
}


    return(
        <div className="container">
        <h1 className={styles.title}>post your advertisement</h1>
        <ul className={styles.changingBar}>
        <li>Home</li>
        <li>changing</li>
        </ul>


<form enctype="multipart/form-data" method="POST"  onSubmit={handleSubmit(handleSubmitAdv)}>

        <h2 className={styles.secondTitle}>include some details</h2>
        <label className={styles.label}>Property</label>
        <div className={styles.radioButtons}>
        
                <div className={styles.radioBtnBlock}>
                <input  onChange={(e)=>setProperty(e.target.value)} type="radio" id="rent" name="property" value="rent"/>
          <label onClick={handleRental} for="rent">Rent</label>
        </div>

        <div className={styles.radioBtnBlock}>
        <input onChange={(e)=>setProperty(e.target.value)} type="radio" id="sell" name="property" value="sell"/>
  <label onClick={handleRemoveRental} for="sell">Sell</label>
</div>
          

        </div>

       {show && 
        <Rental show={show}/>
      }
        



        <input name="category_id" value={categoryId} className={styles.hide} placeholder="category id"/>
        <label className={styles.label}>Add Title</label>
        <input onChange={(e)=>setTitle(e.target.value)} className={styles.inputField} placeholder="Type Title"/>
        <label className={styles.label}>Payment Method</label>
        <div className={styles.radioButtons}>
        <div className={styles.radioBtnBlock}>
        <input onChange={(e)=>setPayment(e.target.value)} type="radio" id="cash" name="payment_method" value="cash"/>
  <label for="cash">Cash</label>
</div>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setPayment(e.target.value)} type="radio" id="card" name="payment_method" value="card"/>
  <label for="card">Card</label>
</div>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setPayment(e.target.value)} type="radio" id="crypto" name="payment_method" value="crypto"/>
  <label for="crypto">Crypto Currency</label>
</div>
        </div>

        <div className={styles.parts}>
        <div className={styles.part}>
          
       {sell?.data?.categories?.map(function(data, idx) {
       
        
       

   
        
       
        
       
       
        if (idx+1== categoryId){
          dataOptions=data?.options;
         
       
       
                       return (
                       
                        [<label className={` ${styles.label} ${dataOptions.includes("bedrooms")? null: styles.hide}`}>Bedrooms</label>,
                        <input onChange={(e)=>setBedrooms(e.target.value)} className={`${styles.inputField} ${dataOptions.includes("bedrooms")? null: styles.hide}`} placeholder="Type Number Of Bedrooms"/>,
                        <label className={styles.label}>Size (M<sup>2</sup>)</label>,
                        <input onChange={(e)=>setSize(e.target.value)} className={styles.inputField} placeholder="Type Number Of Bedrooms"/>,
                        <label className={` ${styles.label} ${dataOptions.includes("bathrooms")? null: styles.hide}`}>Bathrooms</label>,
                        <input onChange={(e)=>setBathrooms(e.target.value)} className={`${styles.inputField} ${dataOptions.includes("bathrooms")? null: styles.hide}`} placeholder="Type Number Of Bathrooms"/>,
                        <label className={` ${styles.label} ${dataOptions.includes("floor")? null: styles.hide}`}>Floor</label>,
        <input onChange={(e)=>setFloor(e.target.value)} className={`${styles.inputField} ${dataOptions.includes("floor")? null: styles.hide}`} placeholder="Type Number Of Floor"/>,
        <label className={` ${styles.label} ${dataOptions.includes("furnished")? null: styles.hide}`}>Furnished</label>,
        <div className={`${styles.radioButtons} ${dataOptions.includes("furnished")? null: styles.hide}`}>
        <div className={styles.radioBtnBlock }>
        <input  type="radio" id="true" name="furnished" value="true"/>
  <label onClick={handleFurnished} for="true">Yes</label>
</div>
<div className={styles.radioBtnBlock}>
<input  type="radio" id="false" name="furnished" value="false"/>
  <label onClick={handleNotFurnished} for="false">No</label>
</div>
        </div>,
        <label className={` ${styles.label} ${dataOptions.includes("condition")? null: styles.hide}`}>Condition</label>,
        <div className={`${styles.radioButtons} ${dataOptions.includes("condition")? null: styles.hide}`}>
        <div className={styles.radioBtnBlock}>
        <input onChange={(e)=>setCondition(e.target.value)} type="radio" id="ready" name="condition" value="ready"/>
  <label for="ready">Ready To Move In</label>
</div>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setCondition(e.target.value)} type="radio" id="under_construction" name="condition" value="under_construction"/>
  <label for="under_construction">Under Construction</label>
</div>
        </div>,
        <label className={` ${styles.label} ${dataOptions.includes("type")? null: styles.hide}`}>Type</label>,
        <div className={`${styles.radioButtons} ${dataOptions.includes("type")? null: styles.hide}`}>
        <div className={styles.radioBtnBlock}>
        <input onChange={(e)=>setTypeId(e.target.value)} type="radio" id="Agricultural" name="type_id" value="Agricultural"/>
  <label for="Agricultural">Agricultural</label>
</div>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setTypeId(e.target.value)} type="radio" id="Industrial" name="type_id" value="Industrial"/>
  <label for="Industrial">Industrial</label>
</div>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setTypeId(e.target.value)} type="radio" id="Residential" name="type_id" value="Residential"/>
  <label for="Residential">Residential</label>
</div>
        </div>,
        <label className={` ${styles.label} ${dataOptions.includes("equipped")? null: styles.hide}`}>Equipped</label>,
        <div className={`${styles.radioButtons} ${dataOptions.includes("equipped")? null: styles.hide}`}>
        <div className={styles.radioBtnBlock }>
        <input onChange={(e)=>setEquipped(e.target.value)} type="radio" id="true2" name="equipped" value="true"/>
  <label for="true2">Yes</label>
</div>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setEquipped(e.target.value)} type="radio" id="false2" name="equipped" value="false"/>
  <label for="false2">No</label>
</div>
        </div>]
                        
                        
                         
                         
                     )
       
       
                     
                     }
              
           } )}
       
        
       
        </div>
       
        </div>

   

   


       

        <div className={styles.cards}>

      
       {sell?.data?.categories?.map(function(data, idx) {
       
        
       

 dataProperty=data?.property_amentities;
 console.log(dataProperty)

 


 if (idx+1== categoryId){
 let title=<h2 className={` ${dataProperty? null: styles.hide} ${styles.secondTitle}`}>Property Amentities</h2>
 let myData= dataProperty?.map((ex=>(

  <div className={styles.checkbox}>
<label className={styles.checkboxWrapper}>
<input onChange={(e)=>{ if(e.target.checked) {setPropertyAmin([...propertyAmin , parseInt(e.target.value)])} else {setPropertyAmin([...propertyAmin])}} } type="checkbox" className={styles.checkboxInput} value={ex.id} />
<span className={styles.checkboxTile}>

  <span className="checkboxLabel">{ ex.property}</span>

  </span>
</label>
</div>


)))

                return (
                
                [title, myData]
                 
                 
                  
                  
              )


              
              }
       
    } )}

      
    </div>        
         
			     	
   
		



       
        

    

   

   

  




<div className={styles.cards}>

      
{sell?.data?.categories?.map(function(data, idx) {
 
  dataCommunity=data?.community_amentities;


 if (idx+1== categoryId){
  let title2=<h2 className={` ${dataCommunity? null: styles.hide} ${styles.secondTitle}`}>Community Amentities</h2>
  let myData2= dataCommunity?.map((ex=>(
 
   <div className={styles.checkbox}>
 <label className={styles.checkboxWrapper}>
 <input onChange={(e)=>{ if(e.target.checked) {setCommunityAmin([...communityAmin , parseInt(e.target.value)])} else {setCommunityAmin([...communityAmin])}} } type="checkbox" className={styles.checkboxInput} value={ex.id} type="checkbox" className={styles.checkboxInput} />
 <span className={styles.checkboxTile}>
 
   <span className="checkboxLabel">{ ex.property}</span>
 
   </span>
 </label>
 </div>
 
 
 )))

         return (
         [title2 , myData2]
           
           
       )


       
       }

} )}


     
  
      






 





</div>





<label className={styles.label}>Description</label>
<textarea onChange={(e)=>setDesc(e.target.value)} placeholder="Type Description" className={`${styles.inputField} ${styles.textArea}`}></textarea>
<span className={styles.textAreaSpan}>include condition, features and reason for selling</span>
<label className={styles.label}>Price</label>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className={`${styles.price} input-group-text`} id="basic-addon1">USD</span>
  </div>
  <input onChange={(e)=>setPrice(e.target.value)} type="text" className={`${styles.inputField} ${styles.formControl} form-control`} placeholder="Type Price" aria-label="price" aria-describedby="basic-addon1"/>
</div>
<div className={styles.check}>
<input onClick={(e)=>seNegotiable(!negotiable)} type="checkbox" id="negotiable" name="negotiable" value="negotiable"/>
<label for="negotiable"> Negotiable</label>
</div>



<div className={styles.mapBlock}>
<PlacesAutocomplete panTo={panTo} handleMyLocation={handleMyLocation} handleSubmitAdv={handleSubmitAdv} />
<GoogleMap 
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={center}
    options={options}
    onClick={handleMap}
    onLoad={onMapLoad}
   >
    {markers.map(marker => <MarkerF 
      position={{lat: marker.lat , lng: marker.lng}}
      onClick={()=>{
        setSelected(marker);
      }}
      />)}
    
    </GoogleMap>
</div>


   <br/>
   <br/>


<h2 className={styles.secondTitle}>Upload Up To 15 Photos</h2>
{/*<RUG
  action="/api/upload" // upload route
  source={response => response.source} // response image source
/>*/}

<div className={styles.gallery}>

{[...Array(n)].map((e, i) => 
  <input onChange={(e)=>{  setGallery([...gallery , e.target.files[0]]) } }     key={i} type="file" className={styles.fileUpload} {...register("file")} />
)}





</div>
<br/>
<br/>
<h2 className={styles.secondTitle}>Your Details</h2>

<div className={styles.details}>
<div className={styles.personalPic}>
<img src={personal} alt="personal picture"/>
</div>
<div className={styles.detailsBlock}>
<label className={styles.label}>Name</label>
<input onChange={(e)=>setName(e.target.value)} className={styles.inputField} placeholder="Type Your Name"/>

<label className={styles.label}>Mobile Number</label>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className={`${styles.price} input-group-text`} id="basic-addon1">+961</span>
  </div>
  <input onChange={(e)=>setPhone(e.target.value)} type="text" className={`${styles.inputField} ${styles.formControl} form-control`} placeholder="Phone Number" aria-label="Phone" aria-describedby="basic-addon1"/>
</div>

<label className={styles.label}>Contact Method</label>
<div className={styles.radioButtons}>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setContact(e.target.value)} type="radio" id="phone" name="contact_method" value="phone"/>
  <label for="phone">Phone Number</label>
</div>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setContact(e.target.value)} type="radio" id="chat" name="contact_method" value="chat"/>
  <label for="chat">Real State Chat</label>
</div>
<div className={styles.radioBtnBlock}>
<input onChange={(e)=>setContact(e.target.value)} type="radio" id="both" name="contact_method" value="both"/>
  <label for="both">Both</label>
</div>
</div>
</div>
</div>

<button className={styles.advBtn} onClick={handleSubmitAdv} type="submit">post your advertisement</button>
</form>
        </div>
    )
}



const PlacesAutocomplete =({panTo}) =>{

  const {ready , 
    value,  
    suggestions:{status,data},  
    setValue,  
    clearSuggestions,
   
   
   

  } = usePlacesAutocomplete({
    requestOptions: {
      location: {  lat:()=> 43 , lng:()=> -79},
      radius: 200*1000,
    }
  });

 

  
  return(
  <div className={styles.search}>
    <Combobox onSelect={async(address)=> {

      setValue(address , false);
      clearSuggestions();
      try{
        
        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0]);
        panTo({lat , lng});

      } catch(error){
        console.log("Error !")
      }
    }}>
   
    

    <ComboboxInput
     value={value} 
     onChange={(e)=> {setValue(e.target.value)}} 
     disabled= {!ready}
     placeholder="Type Location"
        />

        <ComboboxPopover>
   { status === "OK" && data.map(({id , description})=> <ComboboxOption key={id} value={description}/>)}
    </ComboboxPopover>

    </Combobox>
  </div>
  

  )
 }




export default SellHomeContent;