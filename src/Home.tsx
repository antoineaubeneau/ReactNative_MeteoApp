import { Button, View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import 'moment/locale/fr';

export default function HomeScreen(navigation: any) {
  const [city, setCity] = useState('Bordeaux');
  const today = moment().locale('fr').format('dddd D MMMM YYYY');
  const temperature = '23°C';

  return (
    <LinearGradient colors={['#4c669f', '#3b5998']} style={styles.container}>
      <View style={styles.cityContainer}>
        <Text style={styles.cityText}>{city}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{today}</Text>
      </View>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperatureText}>{temperature}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  cityText: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
  },
  dateContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  temperatureContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  temperatureText: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
});
