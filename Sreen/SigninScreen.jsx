import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You can replace this with React Native icons
import { Button, Input, Image } from 'react-native-elements';
import tw from 'twrnc';
const SignInScreen = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleLogin = async () => {
    // Implement your login logic here

    try {
      // Replace this with your actual login logic
      // Example: Call an authentication API endpoint
      const response = await fetch('https://your-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Login successful
        // Redirect to the main screen or perform other actions
      } else {
        // Login failed
        Alert.alert('Login Failed', responseData.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'An unexpected error occurred during login. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Your login form */}
      <Input
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
        // style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
      />
      <Input
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
        // style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
      />

      
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#00ccbb', padding: 10, borderRadius: 5 }}>
        <Text style={tw`text-white font-extrabold w-72 text-lg text-center `} >Log In</Text>
      </TouchableOpacity>

      {/* Other UI components go here */}
    </View>
  );
};

export default SignInScreen;
