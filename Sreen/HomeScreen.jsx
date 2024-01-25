import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StatusBar, StyleSheet, ScrollView, Text } from 'react-native';
import { ChartBarIcon, WifiIcon, TvIcon, BoltIcon, WalletIcon, BanknotesIcon,EyeIcon, AcademicCapIcon } from "react-native-heroicons/outline";
import tw from 'twrnc';
import { Button } from 'react-native-elements';


const HomeScreen = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [mockData, setMockData] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setMockData(MockData);
//     }, 1000);
//   }, []);


  return (
    <><SafeAreaView style={{ flex: 1, paddingTop:40, backgroundColor: 'white' }}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />



          <View style={tw`flex flex-row justify-between gap-20 bg-[#00ccbb] h-32 mb-8 rounded-lg mr-6 pt-12 ml-6 pl-4 pr-4`}>
            <View>
              <BanknotesIcon size={28} style={tw`text-black text-gray-500 ml-8`} />
              <Text style={tw`font-bold text-white`}>Wallet Balance</Text>
              </View>
              <View >
                <Text style={tw`text-white font-bold text-lg bg-[#00bbcc] rounded-2xl py-1 px-2 `}>+ Fund Wallet</Text>
            
              </View>
              
              </View>

      <View style={tw`flex flex-row justify-center gap-20 bg-[#00ccbb] h-32  rounded-lg mr-10 ml-10`}>

              <View style={tw`text-black text-gray-500 mt-12`}>
                  <ChartBarIcon size={25} style={tw`text-black text-gray-500 ml-3 `} />
                  <Text style={tw`font-bold text-white`}>Airtime</Text></View>

              <View style={tw`text-black text-gray-500 mt-12`}>
                  <WifiIcon size={25} style={tw`text-black text-gray-500 `} />
                  <Text style={tw`font-bold text-white`}>Data</Text></View>

              <View style={tw`text-black text-gray-500 mt-12`}>
                  <TvIcon size={25} style={tw`text-black text-gray-500 ml-3`} />
                  <Text style={tw`font-bold text-white`}>Tv Sub</Text></View>
          </View><View style={tw`flex flex-row justify-center gap-10 h-32 bg-[#00ccbb] rounded-lg mt-16 mr-4 ml-4`}>
              <View style={tw`text-black text-gray-500 mt-12`}>
                  <BoltIcon size={28} style={tw`text-black text-gray-500 ml-5 `} />
                  <Text style={tw`font-bold text-white`}>Electricity</Text></View>


                  <View style={tw`text-black text-gray-500 mt-12`}>
                  <AcademicCapIcon size={28} style={tw`text-black text-gray-500 ml-4`} />
                  <Text style={tw`font-bold text-white`}>Education</Text>
                  </View>

              <View style={tw`text-black text-gray-500 mt-12`}>
                  <WalletIcon size={28} style={tw`text-black text-gray-500 ml-6`} />
                  <Text style={tw`font-bold text-white`}>Fund Wallet</Text></View>
          </View>
           
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    marginTop:100

  },
  search: {
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    position: 'absolute',
    right: 12,
    bottom: 40,
  },
  button: {
    backgroundColor: '#db3c2f',
    flexDirection: 'row',
    paddingRight: 4,
    paddingLeft: 4,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 5,
    color: 'white',
  },
});

export default HomeScreen;
