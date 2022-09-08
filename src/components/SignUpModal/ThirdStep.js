import React from "react";
import {   TextInput } from '@mantine/core';


const ThirdStep =({ formData, setFormData }) =>{
    return(
        <div>
        <TextInput
        label="email"
        onChange={(e) => {
          setFormData({
            ...formData,
            email: e.target.value,
          });
        }}
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
    <br/>
        </div>

    )
}

export default ThirdStep;