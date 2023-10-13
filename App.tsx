import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home';
import SearchScreen from './src/Search';
import NavigationScreen from './src/Navigation';
import HomeIcon from './assets/home.svg';
import FranceIcon from './assets/france.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Rechercher une ville" component={SearchScreen} />
      <Stack.Screen name="Villes" component={NavigationScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <HomeIcon />,
          }}
        />
        <Tab.Screen
          name="Recherche"
          component={SearchStack}
          options={{ tabBarIcon: ({ color, size }) => <FranceIcon /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
