import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchHome =  createAsyncThunk('home/fetchScore',
async ()=>{

    const options = {
        headers: { 
            'app_api_key': 'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P', 
          }
        }
        
        
      
   
    const response = await axios.get("https://akarat.develocity.app/api/home", options )
   
    return response.data
    
   

      
    });
   



const HomeApi =  createSlice({
    name: " home",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchHome.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchHome.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchHome.rejected] : (state) =>{
            state.status = "failed";

        }

    }
})





export default HomeApi.reducer;