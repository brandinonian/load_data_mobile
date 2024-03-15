import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { get_load } from "../db/loads";
import LoadingScreen from "./LoadingScreen";

export default function LoadDetails({ route }) {

  const id = route.params.load_id;
  const [is_loading, set_is_loading] = useState(true);
  const [load_data, set_load_data] = useState();

  async function fetch_data() {
    const result = get_load(id);
    set_load_data(result);
  }

  useEffect(() => {
    set_is_loading(true);
    fetch_data();
    set_is_loading(false);
  }, []);

  if (is_loading) {
    return (
      <LoadingScreen message='Loading...' />
    );
  }

  return (
    <View style={styles.details_container}>

    </View>
  );
}

const styles = StyleSheet.create({
  details_container: {
    flex: 1,
  },
});