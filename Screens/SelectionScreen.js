import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, FlatList } from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Card,
} from '@ui-kitten/components';



export const SelectionScreen = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [description, setDescription] = useState([]);
  const { liquor } = route.params;

  //navigation settings
  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateCocktail = (idDrink) => {
    navigation.navigate('Cocktail', {
      cocktailID: idDrink,
    });
  };
  const navigateDescription = () => {
    navigation.navigate('Description', {
      liquor: liquor,
    });
  };

  //top nav icons & actions
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const InfoAction = () => (
    <TopNavigationAction icon={InfoIcon} onPress={navigateDescription} />
  );

  const BackIcon = (props) => (
    <Icon {...props} name="arrow-back" fill="#BC4A57" />
  );
  const InfoIcon = (props) => (
    <Icon {...props} name="info-outline" fill="#2981D2" />
  );
  
  
  //Drink Card Component
  const DrinkHeader = () => (
    <Image
      style={styles.headImage}
      source={require("../assets/pickcocktail.png")}
    />
  );
  const RenderDrinkCard = ({ item }) => (
    <Card style={styles.drinkCard} onPress={() => navigateCocktail(item.idDrink)}>
      <View>
        <Text category="h5" style={styles.drinkCardText}>
          {item.strDrink}
        </Text>
        <Text style={styles.drinkCardText}>Alcoholic</Text>
        <Image style={styles.drinkThumb} source={{ uri: item.strDrinkThumb }} />
      </View>
    </Card>
  );

  
  //Fetch cocktails from cocktailDB
  const fetchCocktails = async () => {
    try {
      const response = await fetch(
        "http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor
      );
      const json = await response.json();
      setCocktails(json.drinks);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useMemo(() => {
    fetchCocktails();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation alignment="center" title={liquor + " Cocktails"} accessoryLeft={BackAction} accessoryRight={InfoAction}/>
      <Divider />
      <Layout style={styles.Layout}>
        
        {/*Drink Card List !!!Consider use memo*/}
        <FlatList
          data={cocktails}
          ListHeaderComponent={DrinkHeader}
          renderItem={RenderDrinkCard}
          keyExtractor={(item) => item.idDrink}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch="10"
        />

        <View style={styles.drinkList}></View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Layout: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headImage: {
    height: 125,
    width: 125,
    marginTop: 25,
    marginBottom: 25,
    alignSelf: "center",
  },
  drinkList: {
    marginTop: 20,
  },
  drinkCard: {
    marginBottom: 20,
    width: 300,
  },
  drinkThumb: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  drinkCardText: {
    marginBottom: 10,
  },
});
