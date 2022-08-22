import React from 'react';
import { SafeAreaView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { DrinkSearch } from '../Components/DrinkSearch';

export const HomeScreen = ({ navigation }) => {

  {/* Bottom drinks tabs navigation*/}
  const navigateVodka = () => {
    navigation.navigate('Selection', {
      liquor: 'Vodka',
    });
  };
  const navigateGin = () => {
    navigation.navigate('Selection', {
      liquor: 'Gin',
    });
  };
  const navigateRum = () => {
    navigation.navigate('Selection', {
      liquor: 'Rum',
    });
  };
  const navigateTequila = () => {
    navigation.navigate('Selection', {
      liquor: 'Tequila',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Layout style={styles.layout}>

          {/*Logo and search input*/}
          <View style={styles.top}>
            <Image style={styles.logo} source={require('../assets/drinklab.png')} />
            <DrinkSearch navigation={navigation}/>          
          </View>

          {/*Tagline*/}
          <View style={styles.tagline}>
            <Text style={styles.tagline}>PICK YOUR POISON!</Text>
          </View>
        
          {/* Bottom drinks tabs*/}
          <Swiper autoplay={true} activeDotColor='#BC4A57'>

            <TouchableOpacity style={styles.swipe} onPress={navigateVodka}>
              <Text category={'h6'} style={styles.label} appearance='hint'>Vodka</Text>
              <Image style={styles.logo} source={require('../assets/vodka.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.swipe} onPress={navigateGin}>
              <Text category={'h6'} appearance='hint'>Gin</Text>
              <Image style={styles.logo} source={require('../assets/gin.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.swipe} onPress={navigateRum}>
              <Text category={'h6'} appearance='hint'>Rum</Text>
              <Image style={styles.logo} source={require('../assets/rum.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.swipe} onPress={navigateTequila}>
              <Text category={'h6'} appearance='hint'>Tequila</Text>
              <Image style={styles.logo} source={require('../assets/tequila.png')} />
            </TouchableOpacity> 
          </Swiper>
        </Layout>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout:{
    flex: 1, 
    alignItems: 'center' 
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    width: '80%',
    borderRadius: 30
  },
  top: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
  },
  swipe: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    marginBottom: 10
  },
  tagline: {
    color:'#2981D2',
    fontWeight: '600',
    marginBottom: 20
  }
})