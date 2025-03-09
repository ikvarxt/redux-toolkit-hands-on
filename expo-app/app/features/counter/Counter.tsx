import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { Text, TouchableOpacity, View } from "react-native";
import { decrement, increment } from "./counterSlice";
import { ThemedText } from "@/components/ThemedText";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <ThemedText>Count: {count}</ThemedText>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <ThemedText>Increment</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <ThemedText>Increment</ThemedText>
      </TouchableOpacity>
    </View>
  );
}
