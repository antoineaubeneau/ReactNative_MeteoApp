import { Button, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react';

export default function SearchScreen({ navigation }: any) {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      searchCity();
    }
  }, [city]);

  function searchCity() {
    if (!city) {
      setCities([]);
      return;
    }

    fetch(
      `https://geo.api.gouv.fr/communes?nom=${city}&fields=departement&boost=population&limit=5`,
    )
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data)) {
          setCities(data);
        } else {
          setCities([]);
        }
      })
      .catch(error => {
        setCities([]);
      });
  }

  return (
    <LinearGradient colors={['#4c669f', '#3b5998']} style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Entrez le nom de la ville"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Rechercher la ville" onPress={searchCity} />
        {weatherData && <Text>{JSON.stringify(weatherData)}</Text>}
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
    color: '#000',
  },
  whiteText: {
    color: '#FFF',
    marginBottom: 10,
  },
});
