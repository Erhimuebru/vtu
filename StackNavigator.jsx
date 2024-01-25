import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './Sreen/HomeScreen';
import { ShoppingBagIcon, HomeIcon } from "react-native-heroicons/outline";
import { HomeIcon as SolidHomeIcon } from "react-native-heroicons/solid";
import { ShoppingBagIcon as SolidShoppingBagIcon } from "react-native-heroicons/solid";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileScreen from './Sreen/ProfileScreen';
import Register from './Sreen/RegisterScreen';
import SignIn from './Sreen/SigninScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getTabBarIcon = (route, focused, color, size) => {
  switch (route.name) {
    case 'Home':
      return focused ? <SolidHomeIcon size={size} color='#00ccbb' /> : <HomeIcon size={size} color={color} />;
    case '':
      return <MaterialCommunityIcons name="view-dashboard" size={size} color={focused ? '#00ccbb' : color} />;
    case 'Cart':
      return focused ? <SolidShoppingBagIcon size={size} color='#00ccbb' /> : <ShoppingBagIcon size={size} color={color} />;
    case 'Profile':
      return <Icon name="user" size={size} color={focused ? '#00ccbb' : color} />;
    default:
      return null;
  }
};

const StackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          return getTabBarIcon(route, focused, color, size);
        },
        tabBarActiveTintColor: '#00ccbb',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={StackNavigator}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
  
      
    </Stack.Navigator>
  );
};

export default RootNavigator;
