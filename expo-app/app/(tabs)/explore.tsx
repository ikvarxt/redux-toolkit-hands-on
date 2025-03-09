import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Counter from "@/app/features/counter/Counter";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { loginGetToken } from "../features/login/loginSlice";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

function Screen() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  const userId = 2;

  useEffect(() => {
    dispatch(loginGetToken(userId));
  });

  if (!isLoggedIn) {
    return (
      <TouchableOpacity onPress={() => dispatch(loginGetToken(userId))}>
        <ThemedText>retry</ThemedText>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <ThemedText>Hello Expo</ThemedText>
      <Counter />
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
