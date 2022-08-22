import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button
} from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import { IngredientsView } from '../Components/IngredientsView';
import { ShareButton } from '../Components/ShareButton';


const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" fill="#BC4A57" />
);
const ShareIcon = (props) => (
    <Icon {...props} name="share" fill="white" />
);

export const CocktailScreen = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [info, setCocktailInfo] = useState([]);
  const { cocktailID } = route.params;
  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  
  //Get individual cocktail info 
  const getCocktailInfo = async () => {
    try {
      const response = await fetch(
        "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailID
      );
      const json = await response.json();
      setCocktailInfo(json.drinks[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCocktailInfo();
  }, []);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        alignment="center"
        title={" Cocktail Page"}
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.Layout}>
        <ScrollView style={styles.scrollView}>

            {/*Image header with name */}
            <View style={styles.imageContainer}>
                <Image source={{ uri: info.strDrinkThumb }} style={styles.Image} />
                <LinearGradient colors={["transparent", "rgba(0,0,0,0.5)"]} style={styles.gradient}/>
                <View style={styles.drinkNameWrapper}>
                    <Text style={styles.drinkName}>{info.strDrink}</Text>
                </View>
            </View>
          
            {/* Ingredients*/}
            <Text category="h1" style={styles.headText}>Ingredients</Text>
            <IngredientsView info={info} />

            {/* Instructions*/}
            <Text category="h1" style={styles.headText}>Instructions</Text>
            <View>
                <Text style={styles.text}>{info.strInstructions}</Text>
            </View>

            <View style={styles.Footer}>
              <ShareButton name={info.strDrink} instructions={info.strInstructions} />
            </View>

        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  Layout: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  scrollView: {
    flex: 1,
    width: "100%"
  },
  imageContainer: {
    justifyContent: "center",
  },
  Image: {
    height: 400,
    width: 400,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },
  drinkNameWrapper: {
    position: "absolute",
    bottom: 5,
    width: '90%',
    padding: 10,
  },
  drinkName: {
    fontSize: 45,
    color: "white"
  },
  section: {
    marginTop: 20,
    marginLeft: 10,
  },
  headText: {
    padding: 10,
    color:'#BC4A57',
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    padding: 10
  },
  Footer: {
    marginBottom: 10
  }
});
