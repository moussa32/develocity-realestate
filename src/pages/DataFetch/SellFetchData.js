import axios from 'axios';
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchSell =  createAsyncThunk('sell/fetchScore',
async ()=>{

    const options = {
        headers: { 
            'app_api_key': 'wqrzIJIu5MrealstatedFYewn!%^&*Xu0@~dkqwlfYWSMqW6VQJQJjsOfMoCsD5P', 
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FrYXJhdC5kZXZlbG9jaXR5LmFwcC9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTY2MjU0NTY1NSwiZXhwIjoxNjYzMTUwNDU1LCJuYmYiOjE2NjI1NDU2NTUsImp0aSI6IkRQb3lUR2xhQjV3MWJwbTEiLCJzdWIiOiIyIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.WdNCN7L6jk7pOUhPqt4zsvu5nJQmbw-4Aa5o4Lh4WkM'
          }
        }
        
        
      
   
    const response = await axios.get("https://akarat.develocity.app/api/advertisement/properties", options )
   
    return response.data
    
   

      
    });
   



const SellApi =  createSlice({
    name: " sell",
    reducers:{
       
    },
    initialState :{
        data:[],
        status : null

    },
    extraReducers:{
        [fetchSell.fulfilled] : (state,{payload}) =>{
            state.data = payload;
            state.status = "success";

        },
        [fetchSell.pending] : (state) =>{
            state.status = "loading";

        },
        [fetchSell.rejected] : (state) =>{
            state.status = "failed";

        }

    }
})





export default SellApi.reducer;