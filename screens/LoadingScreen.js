import { StyleSheet, Text, View } from "react-native";

export default function LoadingScreen({ message }) {
  return (
    <View style={styles.loading_view}>
      <Text style={styles.loading_text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading_text: {
    fontSize: 20,
  },
})