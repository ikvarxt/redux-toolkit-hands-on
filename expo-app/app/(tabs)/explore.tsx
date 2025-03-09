import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Counter } from "../features/counter/Counter";

export default function TabTwoScreen() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

function Screen() {
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
