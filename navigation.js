import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './Screens/HomeScreen';
import { SelectionScreen } from './Screens/SelectionScreen';
import { CocktailScreen } from './Screens/CocktailScreen';
import { DescriptionScreen } from './Screens/DescriptionScreen';
import { DrinkSearch } from './Components/DrinkSearch';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Selection' component={ SelectionScreen}/>
    <Screen name='Cocktail' component={ CocktailScreen}/>
    <Screen name='Description' component={ DescriptionScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);