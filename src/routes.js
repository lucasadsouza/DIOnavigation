import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Techs from './pages/Techs';
import TechDetails from './pages/TechDetails';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Techs"
          component={Techs}
          options={{
            title: 'Techs',
            headerStyle: {
              backgroundColor: '#4682b4',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="TechDetails"
          component={TechDetails}
          options={{
            title: 'Tech Details',
            headerStyle: {
              backgroundColor: '#ffc127',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
