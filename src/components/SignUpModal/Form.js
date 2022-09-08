import React , {useState , useEffect , props , useRef} from "react";
import First from "./First";
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import styles from "./SignUpModal.module.css";
import axios from "axios";
import { Box, Button, Title } from '@mantine/core';
import { Navigate } from "react-router";





export default function Form () {
    const [page, setPage] = useState(0);
    const [errorName,setErrorName] = useState(" ");
    const [errorEmail,setErrorEmail] = useState(" ");
    const [errorEmail2,setErrorEmail2] = useState(" ");
    const [errorCode,setErrorCode] = useState(" ");
    const [errorPassword,setErrorPassword] = useState(" ");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        type:"email",
        number1: '',
        number2: '',
        number3: '',
        number4: ''
      });

      const [errorMsg, setErrorMsg] = useState('');
     
      const emailRef = useRef();
      const errRef = useRef();
      

      useEffect(()=>{
        const divEmailRef = emailRef.current
        divEmailRef.focus()

      },[])

      useEffect(()=>{
        setErrorMsg('')
 
       },[formData.email , formData.password])
   
      

    const conditionalComponent = () => {
        switch (page) {
          case 0:
            return <First errorName={errorName} emailRef={emailRef}   errorEmail={errorEmail} errorEmail2={errorEmail2} errorPassword={errorPassword} formData={formData} setFormData={setFormData} />;
          case 1:
            return <SecondStep formData={formData} errorCode={errorCode} setFormData={setFormData} />;
           case 2:
             return <ThirdStep formData={formData} setFormData={setFormData} />;
           default:
             return <First formData={formData} setFormData={setFormData} />;
        }
    }
    
    const handleSubmit = async ele =>  {
        ele.preventDefault();
       

         if (page === 0) {
          const errors = {}
          
       
          if (formData.name === '' || formData.name.length <= 1) {
              errors.name='';
              setErrorName(errors.name)
             
          } else if (formData.email === '' || !formData.email.includes('@')) {
               errors.email='';
               setErrorEmail2(errors.email)
              
              }
              
            
             else if (formData.password === '' || formData.password.length < 6) {
              errors.password='';
              setErrorPassword(errors.password)
             }
              else {
               setPage(page + 1);
              
             console.log(formData);
            
             
         }
        }
          
          else
         setPage(page + 1);

       
   

          const signData = {
            type: "email",
            name: formData.name,
            email: formData.email,
            password: formData.password
            
            
            
      
          };

          const options = {
            headers: {
                app_api_key:
                'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P',
            },
          };

      await axios.post('https://akarat.develocity.app/api/auth/register', signData, options).then(response => {
        setErrorEmail(response.data.msg)
        console.log('posted data', response.data.msg , errorEmail);
        if (response.data.status === 200) {
        
         console.log(errorEmail)
         
         
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
           
           }

           
        
             else setPage(page + 1);
             console.log(formData);
             
             const checkData = {
                type: "email",
                email : formData.email,
               code: formData.number1 + formData.number2 + formData.number3 + formData.number4
                   
               
                
                
                
          
              };

             const options = {
                headers: {
                    app_api_key:
                    'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P',
                },
              };
    
              await axios.post('https://akarat.develocity.app/api/auth/code_check', checkData, options).then(response => {
                setErrorCode(response.data.msg)
        console.log('posted data', response.data.msg , errorCode);
        if (response.data.status === 200) {
        
         console.log(errorCode)
         
         
      }

      if (response.data.status === "failed") {
          this.setState({ msg: response.data.msg }); // message comming from api
            
      }
                
                });
      }

      


      const handleSubmit3 = async ele =>  {
        ele.preventDefault();
        if (page === 2) {
          const errors = {}
          if (formData.email === '' || !formData.email.includes('@')) {
            errors.email='';
            setErrorEmail2(errors.email)
           
           }
           
         
          else if (formData.password === '' || formData.password.length < 6) {
           errors.password='';
           setErrorPassword(errors.password)
          } else {
                setPage(page + 1);
                console.log("fefe" , formData.email);
                
              }

              setPage(0);
  console.log(formData);
  setFormData({
     name: '',
     email: '',
     employment_status: null,
  });
  setErrorEmail("");
          } else setPage(page + 1);

          const loginData = {
            type: "email",
            email : formData.email,
           password: formData.password 
               
           
            
            
            
      
          };

         const options = {
            headers: {
               app_api_key:
                'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P',
            },
          };

          await axios.post('https://akarat.develocity.app/api/auth/login', loginData, options).then(response => {
            setErrorEmail(response.data.msg)
            console.log("reho" , response.data.data.user.email);
            localStorage.setItem("token" , response.data.data.access_token);
            localStorage.setItem("email" , response.data.data.user.email);
            
            if (response.data.status === 200) {
            
             console.log(errorEmail)
             
             
          }
    
          if (response.data.status === "failed") {
              this.setState({ msg: response.data.msg }); // message comming from api
                
          }
            
            });

            Navigate('/welcome')
      }
    return(
        <>
        <Box>
        {conditionalComponent()}
        <Button onClick={handleSubmit} className={` ${styles.loginBtn} ${page === 1 || page ===2 ? styles.hide : null}`}>
        { page === 0  ? "sign up" : null }
      </Button>
      <Button onClick={handleSubmit2} className={` ${styles.loginBtn} ${page === 0 || page === 2 ? styles.hide : null}`}>
      {  page === 1  ? "login" : null }
    </Button>

      <Button onClick={handleSubmit3} className={`${styles.loginBtn} ${page === 0 || page === 1 ? styles.hide : null}`}>
        { page === 2   ? "Submit" : null }
      </Button>
      {
        page > 0 && <Button onClick={() => setPage(page - 1)} className={styles.loginBtn}>Back</Button>
      }
        </Box>
        </>
    )

}

    

