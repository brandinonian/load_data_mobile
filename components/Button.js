import { Pressable, StyleSheet, Text, View } from "react-native";
import { app_colors } from "../style/colors";

export default function Button({ on_press, text }) {
  return (
    <Pressable onPress={on_press}>
      <View style={styles.btn_view}>
        <Text style={styles.btn_text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn_view: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: app_colors.highlight,
  },
  btn_text: {
    fontSize: 20,
    color: app_colors.grey500,
  },
});