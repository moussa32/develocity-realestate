import React , {useState , useEffect} from "react";
import {Text , TextInput} from '@mantine/core';
import styles from "./SignUpModal.module.css";

import ResendTimerMobile from "./ResendTimerMobile";

const SecondStep =({ formData, setFormData , errorCode }) =>{

const [resendingPhone,setResendingPhone] = useState(false);
const [resendStatus,setResendStatus] = useState('Resend');
const [timeLeft,setTimeLeft] = useState(null);
const [targetTime,setTargetTime] = useState(null);
const [activeResend,setActiveResend] = useState(false);
let resendTimerInterval;

const calculateTimeLeft =(finalTime) =>{
 const difference = finalTime - +new Date();
 if (difference >=0){
  setTimeLeft(Math.round(difference / 1000))
 } else {
  setTimeLeft(null);
  clearInterval(resendTimerInterval);
  setActiveResend(true)
 }
};


const triggerTimer = (targetTimerInSeconds = 30) =>{
  setTargetTime(targetTimerInSeconds);
  setActiveResend(false);
  const finalTime = +new Date() + targetTimerInSeconds * 1000;
  resendTimerInterval = setInterval(() => (
    calculateTimeLeft(finalTime) , 1000
  ));

};

useEffect(()=>{
  triggerTimer();
  return () =>{
    clearInterval(resendTimerInterval);
  }

},[])


 


    return(
        <div>
        <h1 className={styles.title}>enter code recieved</h1>
        <p className={styles.text}>
          we sent a 4-digit code to <span className={styles.number}>{formData.phone}</span>
          
        </p>
        <p className={styles.error}>{errorCode}</p>
        <TextInput
        label ="Phone"
        onChange={(e) => {
          setFormData({
            ...formData,
            phone: e.target.value,
          });
        }}
        value={formData.phone}
        placeholder="Phone Number"
        required
      />
      <br/>
  
        <div className={styles.numbersInput}>
          <TextInput
         
          onChange={(e) => {
            setFormData({
              ...formData,
              number1: e.target.value,
            });
          }}
          value={formData.number1}
          placeholder=""
          required
        />
        <TextInput
        onChange={(e) => {
          setFormData({
            ...formData,
            number2: e.target.value,
          });
        }}
        value={formData.number2}
        placeholder=""
        required
      />
      <TextInput
      onChange={(e) => {
        setFormData({
          ...formData,
          number3: e.target.value,
        });
      }}
      value={formData.number3}
      placeholder=""
      required
    />
    <TextInput
    onChange={(e) => {
      setFormData({
        ...formData,
        number4: e.target.value,
      });
    }}
    value={formData.number4}
    placeholder=""
    required
  />
          </div>
         <ResendTimerMobile 
         formData={formData}
         activeResend={activeResend}
         resendingEmail={resendingPhone}
         resendStatus={resendStatus}
         timeLeft={timeLeft}
         targetTime={targetTime}
         />
        </div>

    )
}

export default SecondStep;