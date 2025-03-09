import { TouchableOpacity, View } from "react-native";
import { decrement, increment } from "@/app/features/counter/counterSlice";
import { ThemedText } from "@/components/ThemedText";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

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
