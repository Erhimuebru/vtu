import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios'; // Assuming you have axios installed
import { Button, Input, Image } from 'react-native-elements';


const ProgressBar = ({ step }) => {
    return (
      <View style={styles.progressBarContainer}>
        <View
          style={{
            width: `${(step / 3) * 100}%`, // Assuming there are 3 steps
            height: '100%',
            backgroundColor: '#4caf50',
          }}
        />
      </View>
    );
  };
  

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: new Date(),
    gender: '',
    address: '',
    city: '',
    state: '',
  });

  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDOBChange = (event, selectedDate) => {
    const currentDate = selectedDate || formData.dob;
    setFormData({ ...formData, dob: currentDate });
  };

  const onNext = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    } else {
      // Handle submission logic
      submitForm();
    }
  };

  const onBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const submitForm = async () => {
    try {
      setLoading(true);
      // Assuming you have an API endpoint for registration
      const response = await axios.post('http://localhost:5000/users/register', formData);

      // Handle success response
      Alert.alert('Success', 'Account created successfully!', [{ text: 'OK', onPress: () => resetForm() }]);
    } catch (error) {
      // Handle error
      Alert.alert('Error', 'There was an error creating your account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstname: '',
      surname: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      dob: new Date(),
      gender: '',
      address: '',
      city: '',
      state: '',
    });
    setStep(1);
  };



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
      <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 10, width: '80%' }}>
      <ProgressBar step={step} />
        <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 20, textTransform: 'capitalize', textAlign: 'center' }}>
          {formData.firstname || 'Sign Up'}
        </Text>

        {step === 1 && (
          <>
            <Input
              placeholder="First Name"
              value={formData.firstname}
              onChangeText={(text) => handleInputChange('firstname', text)}
      
            />

<Input
              placeholder="Surname"
              value={formData.surname}
              onChangeText={(text) => handleInputChange('surname', text)}
      
            />

<Input
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChangeText={(text) => handleInputChange('phoneNumber', text)}
      
            />

<Input
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
      
            />
          
          </>
        )}

        {step === 2 && (
          <>
            <Input
              placeholder="Password"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => handleInputChange('password', text)}
            //   style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
            />
           
           <Input
              placeholder="Confirm Password"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(text) => handleInputChange('confirmPassword', text)}
            //   style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
            />



          </>
        )}

        {step === 3 && (
          <>
            <Input
              placeholder="Address"
              value={formData.address}
              onChangeText={(text) => handleInputChange('address', text)}
            //   style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
            />
           
          </>
        )}

        {/* {step === 3 && (
          <TouchableOpacity onPress={onNext} style={{ backgroundColor: '#00ccbb', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>{loading ? 'Submitting...' : 'Submit'}</Text>
          </TouchableOpacity>
        )} */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          {step > 1 && (
            <TouchableOpacity onPress={onBack} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Back</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={onNext} style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>{step < 3 ? 'Next' : 'Submit'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressBarContainer: {
      width: '100%',
      height: 2,
      backgroundColor: '#ddd',
      marginVertical: 10,
    },
    button: {
      backgroundColor: '#00ccbb',
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });

export default Register;
