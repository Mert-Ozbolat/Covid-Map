import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    error: null,
    data: null
}


const covidSlice = createSlice({
    name: 'covid',
    initialState,
    reducers: {},
    extraReducers: (builder) => { }
})

export default covidSlice.reducer


