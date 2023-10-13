import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CityItem {
  nom: string;
  code: string;
}

export default function SearchScreen({ navigation }: any) {
  const [city, setCity] = useState<string>('');
  const [cities, setCities] = useState<CityItem[]>([]);
  const [weatherData, setWeatherData] = useState(null);

  const searchCity = useCallback(() => {
    if (!city) {
      setCities([]);
      return;
    }

    fetch(
      `https://geo.api.gouv.fr/communes?nom=${city}&fields=lon&boost=lon&limit=5`,
    )
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCities(data);
        } else {
          setCities([]);
        }
      })
      .catch(() => {
        setCities([]);
      });
  }, [city]);

  useEffect(() => {
    if (city) {
      searchCity();
    }
  }, [city, searchCity]);

  const renderCity = ({ item }: { item: CityItem }) => (
    <TouchableOpacity
      onPress={() => {
        setCity(item.nom);
        navigation.navigate('Villes', { cityName: item.nom });
      }}>
      <Text style={styles.citySuggestion}>{item.nom}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#4c669f', '#3b5998']} style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Entrez le nom de la ville"
          value={city}
          onChangeText={setCity}
        />
        {city && (
          <FlatList
            data={cities}
            renderItem={renderCity}
            keyExtractor={item => item.code}
          />
        )}
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
  cityContainer: {
    padding: 10,
  },
  cityText: {
    color: '#FFF',
  },
  citySuggestion: {
    padding: 10,
    color: '#FFF',
  },
});
