import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { app_colors } from '../style/colors';
import Button from '../components/Button';
import { get_preview_data } from '../db/loads';
import LoadPreview from '../components/LoadPreview';

export default function HomeScreen({ navigation }) {

  const [is_loading, set_is_loading] = useState(true);
  const [preview_data, set_preview_data] = useState();

  async function fetch_preview_data() {
    const result = await get_preview_data();
    set_preview_data(result);
  }

  function add_new_handler() {
    navigation.navigate('Add New Load');
  }

  useEffect(() => {
    set_is_loading(true);
    fetch_preview_data();
    set_is_loading(false);
  }, []);

  if (is_loading) {
    return (
      <LoadingScreen message='Loading...' />
    );
  }

  return (
    <View style={styles.home_container}>
      <View>
        <Button text={'Add New'} on_press={add_new_handler} />
      </View>
      <View>
        <FlatList
          data={preview_data}
          renderItem={(item) => <LoadPreview date={item.date} description={item.description} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    backgroundColor: app_colors.grey500,
    padding: 12,
  },
});