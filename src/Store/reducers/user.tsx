import {createSlice} from "@reduxjs/toolkit";
import { Language, UserState } from "../../Types";
import { getLang } from "../../Services/user-storage";

const initialState: UserState = {
  user: null,
  token: null,
  currentLang: getLang() as Language,
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
    }
  },
});



export const {setUser, setCurrentLang} = userSlice.actions
export default userSlice.reducer