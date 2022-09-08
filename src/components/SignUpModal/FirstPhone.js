import React from "react";
import styles from "./SignUpModal.module.css";
import { Box,  TextInput } from '@mantine/core';

const FirstPhone =({ formData, setFormData ,  errorPhone  }) =>{
    return(

        <Box
        sx={{width:"100%"}}
      >
        
        <Box
          sx={{
            margin: '1rem 0',
          }}
        >
        <p className={styles.error}>{errorPhone}</p>
        <TextInput
        label="Phone Number"
        onChange={(e) => {
          setFormData({
            ...formData,
            phone: e.target.value,
          }) 
          
        }}
        value={formData.phone}
        placeholder="Phone Number"
        required
      />
      
      <TextInput
      label="password"
      type="password"
      onChange={(e) => {
        setFormData({
          ...formData,
          password: e.target.value,
        });
      }}
      value={formData.password}
      placeholder="Enter Your Password"
      required
    />
      
     

     
    
    
   
  

  <TextInput className={styles.hide}
  onChange={(e) => {
    setFormData({
      ...formData,
      type: e.target.value,
    });
  }}
  value={formData.type}
  placeholder="type"
  required
/>
        </Box>
      </Box>

    )
}

export default FirstPhone;