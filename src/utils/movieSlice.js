import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
    },
    reducers:{
        addNowPlayingMovie:(state, action)=>{
            state.nowPlayingMovie= action.payload;
        }
    }
})

export const{addNowPlayingMovie}= movieSlice.actions;

export default movieSlice.reducer;