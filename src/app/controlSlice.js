import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appState : {
    isAuth : true,
    entrancePath : "",
  }
}

export const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    setIsAuth(s , a){
      s.appState.isAuth = a.payload;
    },

    setEntrancePath(s , a){
      s.appState.entrancePath = a.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsAuth , setEntrancePath } = controlSlice.actions;

export default controlSlice.reducer;