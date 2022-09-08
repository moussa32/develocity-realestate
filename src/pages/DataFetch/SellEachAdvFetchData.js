import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchSellEachAdv =  createAsyncThunk('sellEachAdv/fetchScore',
async ()=>{

    const options = {
        headers: { 
            'app_api_key': 'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P', 
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FrYXJhdC5kZXZlbG9jaXR5LmFwcC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY2MjU0NTY1NSwiZXhwIjoxNjYzMTUwNDU1LCJuYmYiOjE2NjI1NDU2NTUsImp0aSI6IkRQb3lUR2xhQjV3MWJwbTEiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.WdNCN7L6jk7pOUhPqt4zsvu5nJQmbw-4Aa5o4Lh4WkM'
          }
        }
        
        
      
   
    const response = await axios.get("https://akarat.develocity.app/api/advertisements", options )
   
    return response.data
    
   

      
    });
   



const SellEachAdvApi =  createSlice({
    name: " sell",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchSellEachAdv.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchSellEachAdv.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchSellEachAdv.rejected] : (state) =>{
            state.status = "failed";

        }

    }
})





export default SellEachAdvApi.reducer;