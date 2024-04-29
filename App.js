import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddPropertyScreen from './screens/AddPropertyScreen';
import HomeSc from './screens/HomeSc'; // Assuming HomeSc is correctly named and imported
import { PropertiesProvider } from './PropertiesProvider/PropertiesContext'; // Make sure the import path is correct

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PropertiesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Properties for Sale' }} />
          <Stack.Screen name="HomeSc" component={HomeSc} options={{ title: 'Property Details' }} />
          <Stack.Screen name="AddProperty" component={AddPropertyScreen} options={{ title: 'Add Your Property' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PropertiesProvider>
  );
}

export default App;
