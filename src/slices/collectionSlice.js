import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserCollection } from '../Services/operations/collection';

export const fetchUserCollection = createAsyncThunk(
  'collection/fetchUserCollection',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      console.log("Token from Redux:", token);

      if (!token) {
        throw new Error("Authorization failed");
      }

      // Fetch collection data by calling the refactored `getUserCollection`
      const response = await getUserCollection(token);
      console.log("Fetched collection data:", response);
      
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    collectionList: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCollection.fulfilled, (state, action) => {
        state.collectionList = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchUserCollection.rejected, (state, action) => {
        console.error("Failed to fetch collection:", action.payload);
      });
  },
});

export default collectionSlice.reducer;
