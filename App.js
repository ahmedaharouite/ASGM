import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ControlScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Control screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function BluetoothScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bluetooth screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const ControlStack = createNativeStackNavigator();

function ControlStackScreen() {
  return (
    <ControlStack.Navigator>
      <ControlStack.Screen name="Control" component={ControlScreen} />
    </ControlStack.Navigator>
  );
}

const BluetoothStack = createNativeStackNavigator();

function BluetoothStackScreen() {
  return (
    <BluetoothStack.Navigator>
      <BluetoothStack.Screen name="Bluetooth" component={BluetoothScreen} />
    </BluetoothStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Control" component={ControlStackScreen} />
        <Tab.Screen name="Bluetooth" component={BluetoothStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
