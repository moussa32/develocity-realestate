import React , {useState , useEffect , props} from "react";
import FirstPhone from "./FirstPhone";
import SecondStepPhone from './SecondStepPhone';

import styles from "./SignUpModal.module.css";
import axios from "axios";
import { Box, Button, Title } from '@mantine/core';





export default function FormMobile () {
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
            return <FirstPhone    errorPhone={errorPhone} errorPhone2={errorPhone2} errorPassword={errorPassword} formData={formData} setFormData={setFormData} />;
          case 1:
            return <SecondStepPhone formData={formData} errorCode={errorCode} setFormData={setFormData} />;
          
           default:
             return <FirstPhone formData={formData} setFormData={setFormData} />;
        }
    }
    
    const handleSubmit = async ele =>  {
        ele.preventDefault();
       

         if (page === 0) {
          setPage(page + 1);
        }
          
          else
         setPage(page + 1);

       
    

          const signData = {
            type: "phone",
           
            phone: formData.phone,
            password:formData.password
            
            
            
            
      
          };

          const options = {
            headers: {
                app_api_key:
                'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P',
            },
          };

      await axios.post('https://akarat.develocity.app/api/auth/register', signData, options).then(response => {
        setErrorPhone(response.data.msg)
        console.log('posted data', response.data.msg , errorPhone);
        console.log(formData.phone);
        if (response.data.status === 200) {
        
         console.log(errorPhone)
         
         
      }

      if (response.data.status === "failed") {
          this.setState({ msg: response.data.msg }); // message comming from api
            
      }
        
        });
       
        
      }
      


      


      const handleSubmit2 = async ele =>  {
        ele.preventDefault();
        if (page === 1) {
          setPage(page + 1);
           
          
         

              setPage(0);
  console.log(formData);
  setFormData({
   
     phone: '',
     password: ''
    
  });
  setErrorPhone("");
          } else setPage(page + 1);

          const checkData = {
            type: "phone",
            phone : formData.phone,
           code: formData.number1 + formData.number2 + formData.number3 + formData.number4
               
           
            
            
            
      
          };

         const options = {
            headers: {
                app_api_key:
                'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P',
            },
          };

          await axios.post('https://akarat.develocity.app/api/auth/code_check', checkData, options).then(response => {
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
        <Button onClick={handleSubmit} className={` ${styles.loginBtn} ${page === 1 ? styles.hide : null}`}>
        { page === 0  ? "next" : null }
      </Button>
      <Button onClick={handleSubmit2} className={` ${styles.loginBtn} ${page === 0  ? styles.hide : null}`}>
      {  page === 1  ? "submit" : null }
    </Button>

      
      {
        page > 0 && <Button onClick={() => setPage(page - 1)} className={styles.loginBtn}>Back</Button>
      }
        </Box>
        </>
    )

}

    

