// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Home';
import SearchScreen from './src/Search';
import NavigationScreen from './src/Navigation';
import SettingsScreen from './src/Settings';

import HomeIcon from './assets/home.svg';
import CityIcon from './assets/villes.svg';
import FranceIcon from './assets/france.svg';
import SettingIcon from './assets/settings.svg';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({ color, size }) => <HomeIcon />,
          }}
        />
        <Tab.Screen
          name="Navigation"
          component={NavigationScreen}
          options={{ tabBarIcon: ({ color, size }) => <CityIcon /> }}
        />
        <Tab.Screen
          name="Rechercher"
          component={SearchScreen}
          options={{ tabBarIcon: ({ color, size }) => <FranceIcon /> }}
        />
        <Tab.Screen
          name="Options"
          component={SettingsScreen}
          options={{ tabBarIcon: ({ color, size }) => <SettingIcon /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
