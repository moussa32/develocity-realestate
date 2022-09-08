import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchFooter =  createAsyncThunk('footer/fetchScore',
async ()=>{

    const options = {
        headers: { 
            'app_api_key': 'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P', 
          }
        }
        
        
      
   
    const response = await axios.get("https://akarat.develocity.app/api/setting", options )
   
    return response.data
    
   

      
    });
   



const FooterApi =  createSlice({
    name: " home",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchFooter.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchFooter.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchFooter.rejected] : (state) =>{
            state.status = "failed";

        }

    }
})





export default FooterApi.reducer;