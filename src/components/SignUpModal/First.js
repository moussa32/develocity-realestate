import React from "react";
import styles from "./SignUpModal.module.css";
import { Box,  TextInput } from '@mantine/core';

const First =({ formData, setFormData ,  errorEmail , emailRef  }) =>{
    return(

        <Box
        sx={{width:"100%"}}
      >
        
        <Box
          sx={{
            margin: '1rem 0',
          }}
        >
        <p className={styles.error}>{errorEmail}</p>
        <TextInput
        label="Username"
        onChange={(e) => {
          setFormData({
            ...formData,
            name: e.target.value,
          }) 
          
        }}

        value={formData.name}
        placeholder="Enter Username"
        required
      />
      
      
     

      <TextInput
      label="email"
      onChange={(e) => {
        setFormData({
          ...formData,
          email: e.target.value,
        })
        
        
      }}
      ref={emailRef}
      value={formData.email}
      placeholder="Enter Youe Email"
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

export default First;