import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute, RouteProp } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/fr';
import { celcius } from './constants';

type RouteParams = {
  cityName?: string;
};

type WeatherData = {
  main?: {
    temp?: number;
  };
};

export default function NavigationScreen() {
  const route = useRoute<RouteProp<{ [key: string]: RouteParams }, string>>();
  const [temperature, setTemperature] = useState<number | null>(null);
  const { cityName } = route.params || {};
  const city = cityName || '';
  const today = moment().locale('fr').format('LLLL');
  const apiKey = '18872eee5d832f375527c40dc371dd7a';

  useEffect(() => {
    if (cityName) {
      const headers = { 'X-Api-Key': 'ngwIXtpfPqozlh1HajgZow==aSoaGr5l4mNVzMGC' };

      fetch(`https://api.api-ninjas.com/v1/city?name=${cityName}`, { headers })
        .then(response => response.json())
        .then(data => {
          if (data[0]) {
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].latitude}&lon=${data[0].longitude}&appid=${apiKey}`,
            )
              .then(resp => resp.json())
              .then(dataDeg => {
                setTemperature(celcius(dataDeg.main.temp));
              });
          }
        })
        .catch(_error => {
          alert(
            'Erreur lors de la récupération des données. Veuillez réessayer.',
          );
        });
    }
  }, [cityName]);

  return (
    <LinearGradient colors={['#4c669f', '#3b5998']} style={styles.container}>
      {temperature ? (
        <View style={styles.container}>
          <View style={styles.cityContainer}>
            <Text style={styles.cityText}>{city}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{today}</Text>
          </View>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureText}>{temperature + '°'}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.loadingText}>Chargement...</Text>
      )}
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
    fontSize: 42,
    color: '#fff',
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
});
