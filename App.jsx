
import React from 'react';
import { StyleSheet, Text, View ,Animated,Dimensions,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigations/Navigator';
//import { Carousel } from 'react-native-ui-lib';
//import Home from '../src/screens/Home';

//import {  createSwitchNavigator,  createAppContainer,  createDrawerNavigator,  createStackNavigator  } from '<react-native /navigation';  


const App = () => {
  return(
    <NavigationContainer>
      <HomeStackNavigator/>
   </NavigationContainer>

    
  )
}
export default App;

