import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    All_models: null, 
};

const imageSlice = createSlice({
    name: "image",
    initialState: initialState,
    reducers: {
        setAllModels(state, action) {
            state.All_models = action.payload; 
        },
    },
});

export const { setAllModels } = imageSlice.actions;

export default imageSlice.reducer;
