import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SpaceCraftsScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';
import DailyPicScreen from './screens/DailyPic';
import HomeScreen from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
<Stack.Screen name="DailyPic" component={DailyPicScreen}/>
<Stack.Screen name="StarMap" component={StarMapScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
