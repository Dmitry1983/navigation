import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Save"
        onPress={() => {
          navigation.replace('Home');
        }}
      />
    )
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: isFocused ? "green" : "red" }}
      > {//isFocused ? 'focused' : 'unfocused' 
        }
        Settings Screen
      </Text>
      <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />
    </View>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          options={{ title: 'My home screen' }}
          name="Home"
          component={HomeScreen}
        >

        </Drawer.Screen>
        <Drawer.Screen
          options={{ title: 'My details screen' }}
          name="Details"
          component={DetailsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


