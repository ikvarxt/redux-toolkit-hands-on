import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/features/counter/counterSlice";
import loginReducer from "@/app/features/login/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
