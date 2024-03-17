import dayjs from "dayjs";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { add_load } from "../db/loads";
import Button from "../components/Button";

export default function AddLoad({ navigation }) {

  const today = dayjs();
  const velocity_data = [{ charge_weight: 0, velocities: [] }];
  const [description, set_description] = useState('');
  const [firearm, set_firearm] = useState('');
  const [firearm_id, set_firearm_id] = useState('');
  const [reference_id, set_reference_id] = useState('');

  function save_handler() {
    add_load(today, reference_id, description, firearm, firearm_id, velocity_data);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.add_load_container}>
      <View>
        <Text style={styles.header_text}>New Load</Text>
        {/* Description */}
        <Text style={styles.input_label}>Description</Text>
        <TextInput
          style={styles.form_input}
          value={description}
          onChangeText={set_description}
        />
        {/* Firearm */}
        <Text style={styles.input_label}>Firearm</Text>
        <TextInput
          style={styles.form_input}
          value={firearm}
          onChangeText={set_firearm}
        />
        {/* Firearm id */}
        <Text style={styles.input_label}>Firearm ID</Text>
        <TextInput
          style={styles.form_input}
          value={firearm_id}
          onChangeText={set_firearm_id}
        />
        {/* Reference id */}
        <Text style={styles.input_label}>Reference ID</Text>
        <TextInput
          style={styles.form_input}
          value={reference_id}
          onChangeText={set_reference_id}
        />
        <Button
          text='Save'
          on_press={save_handler}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  add_load_container: {
    flex: 1,
  },
  header_text: {
    fontSize: 24,
  },
  input_label: {
    fontSize: 20,
  },
  form_input: {
    fontSize: 20,
  },
})