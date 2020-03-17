import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useIsFocused, DrawerRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();



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
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          options={{ title: 'My home screen' }}
          name="Home"
          component={HomeScreen}
        >

        </Tab.Screen>
        <Tab.Screen
          options={{ title: 'My details screen' }}
          name="Details"
          component={DetailsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


