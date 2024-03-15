import { Pressable, StyleSheet, View } from "react-native";

export default function LoadPreview({ id, date, description, navigation }) {
  return (
    <Pressable onPress={navigation.navigate('Load Details', { load_id: id })}>
      <View style={styles.preview_container}>
        <Text style={styles.preview_text}>{date}</Text>
        <Text style={styles.preview_text}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  preview_container: {
    flexDirection: 'row',
    gap: 8,
  },
  preview_text: {
    fontSize: 20,
  },
})