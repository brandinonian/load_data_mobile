import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddLoad from './screens/AddLoad';
import { useEffect, useState } from 'react';
import LoadDetails from './screens/LoadDetails';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: init db
  }, []);

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