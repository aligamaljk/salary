import {createSlice} from "@reduxjs/toolkit";
import { Language, UserState } from "../../Types";
import { getLang, getStoredDarkMode } from "../../Services/user-storage";

const initialState: UserState = {
  user: null,
  token: null,
  currentLang: getLang() as Language,
  currentDarkMode: getStoredDarkMode() as boolean,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.token = action.payload;
    },
    setCurrentLang(state, action) {
      state.currentLang = action.payload;
    },
    setCurrentDarkMode(state, action) {
      // console.log(action.payload);
      state.currentDarkMode = action.payload;
    }
  },
});



export const {setUser, setCurrentLang, setCurrentDarkMode} = userSlice.actions
export default userSlice.reducer