import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddLoad from './screens/AddLoad';
import { useEffect, useState } from 'react';
import LoadDetails from './screens/LoadDetails';
import LoadingScreen from './screens/LoadingScreen';
import { init_db } from './db/init';

const Stack = createNativeStackNavigator();

export default function App() {

  const [is_loadinig, set_is_loading] = useState(true);

  async function init() {
    set_is_loading(true);
    await init_db();
    set_is_loading(false);
  }

  useEffect(() => {
    init();
  }, []);

  if (is_loadinig) {
    return (
      <LoadingScreen message="Loading..." />
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        name='Add New Load'
        component={AddLoad}
      />
      <Stack.Screen
        name='Load Details'
        component={LoadDetails}
      />
    </Stack.Navigator>
  );
}