import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

 
const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <><TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={tw`bg-red-500 mx-5 p-2 rounded-lg flex-row justify-center justify-between`}>

            <Text style={tw`text-white font-extrabold flex-1 text-lg text-center `}>Log in</Text>

        </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate('Register')} style={tw`bg-red-500 mx-5 p-2 rounded-lg flex-row justify-center justify-between`}>

                <Text style={tw`text-white font-extrabold flex-1 text-lg text-center `}>Register</Text>

            </TouchableOpacity></>
    );
}

 
export default ProfileScreen;