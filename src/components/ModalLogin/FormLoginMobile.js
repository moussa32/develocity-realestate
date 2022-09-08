import React , {useState , useEffect , props} from "react";
import LoginPhone from "./LoginPhone";


import styles from "./LoginModal.module.css";
import axios from "axios";
import { Box, Button, Title } from '@mantine/core';





export default function FormLoginMobile () {
    const [page, setPage] = useState(0);
   
    const [errorPhone,setErrorPhone] = useState(" ");
    const [errorPhone2,setErrorPhone2] = useState(" ");
    const [errorCode,setErrorCode] = useState(" ");
    const [errorPassword,setErrorPassword] = useState(" ");
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        password: '',
        type:"phone",
        number1: '',
        number2: '',
        number3: '',
        number4: ''
      });
     
   
      

    const conditionalComponent = () => {
        switch (page) {
          case 0:
            return <LoginPhone    errorPhone={errorPhone} errorPhone2={errorPhone2} errorPassword={errorPassword} formData={formData} setFormData={setFormData} />;
         
          
           default:
             return <LoginPhone formData={formData} setFormData={setFormData} />;
        }
    }
    
  
      


      const handleSubmit = async ele =>  {
        ele.preventDefault();
        if (page === 0) {
          
           
          
         

              setPage(0);
  console.log(formData);
  setFormData({
   
     phone: '',
     password: ''
    
  });
  setErrorPhone("");
          } else setPage(0);

          const loginData = {
            type: "phone",
            phone : formData.phone,
            password : formData.password
          
               
           
            
            
            
      
          };

         const options = {
            headers: {
                app_api_key:
                'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P',
            },
          };

          await axios.post('https://akarat.develocity.app/api/auth/login', loginData, options).then(response => {
            setErrorPhone(response.data.msg)
            console.log('posted data', response.data.msg , errorPhone);
            if (response.data.status === 200) {
            
             console.log(errorPhone)
             
             
          }
    
          if (response.data.status === "failed") {
              this.setState({ msg: response.data.msg }); // message comming from api
                
          }
            
            });
      }
    return(
        <>
        <Box>
        {conditionalComponent()}
      
      <Button onClick={handleSubmit} className={` ${styles.loginBtn} `}>
      submit
    </Button>

      
      
        </Box>
        </>
    )

}

    

