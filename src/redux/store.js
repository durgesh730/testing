import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/auth/login";
import createUser from "./slice/auth/createUser";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    newUser: createUser,
  },
});