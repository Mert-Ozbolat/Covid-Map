import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";

export const getDetails = createAsyncThunk('/covid/getDetails', (country) => {
    api.get('')

    return 'PAYLOAD'
})