import React, { Fragment } from "react";
import styles from "./SignUpModal.module.css";
import axios from 'axios';


const ResendTimer = ({formData , activeResend,  resendingEmail, resendStatus, timeLeft , targetTime }) =>{

    const handleResend = async () =>  {
 
   

    
        const resendData = {
          
          email : formData.email,
          type: "email"
         
             
         
          
          
          
        
        };
           
        
        
             
        
              const options = {
                headers: {
                    app_api_key:
                    'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P',
                },
              };
        
          await axios.post('https://akarat.develocity.app/api/auth/resend_code', resendData, options).then(response => {
            console.log('posted data', response);
            console.log("reham")
            
            });
           
            
          }

    return(
        <Fragment>

        <h1 className={styles.title}>
        {!activeResend && (
            <h1 className={styles.title}>after {timeLeft || targetTime} seconds</h1>
            )}
             you can
             {!resendingEmail && (
                <button className={styles.resend} onClick={()=>handleResend(formData.email)} resendStatus={resendStatus} disabled={!activeResend} style ={{opacity:!activeResend && 0.5}}>resend code</button>
             
                        )
                
                        }

                        {resendingEmail && (
                            <button className={styles.resend}  resendStatus={resendStatus} disabled>resend code</button>
                                    )
                            
                                    }
                        </h1>
       {/* <h1 className={styles.title}>if you have not recieved the code by SMS , please request resend code by call </h1>*/}
        
        </Fragment>

    )
}


export default ResendTimer;
