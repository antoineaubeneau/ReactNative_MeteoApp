import {Button, View, Text} from 'react-native';

export default function NavigationScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Navigation</Text>
      <Button
        title="Naviguer"
        onPress={() => navigation.navigate('Navigation')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
