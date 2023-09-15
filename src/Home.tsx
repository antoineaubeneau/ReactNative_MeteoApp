import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu</Text>
      <Button
        title="Rechercher"
        onPress={() => navigation.navigate('Rechercher')}
      />
      <Button
        title="Naviguer"
        onPress={() => navigation.navigate('Navigation')}
      />
    </View>
  );
}
