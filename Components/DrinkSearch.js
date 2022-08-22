import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Input, Text, Spinner, Card, Modal, TopNavigation, TopNavigationAction, Icon,  Menu, MenuItem  } from '@ui-kitten/components';


export const DrinkSearch = (props) => {
    const [searchValue, onChangeText] = useState('');
    const [results, setResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    //navigate to cocktail screen
    const navigateCocktail = (idDrink) => {
        setModalVisible(false)
        props.navigation.navigate('Cocktail', {
            cocktailID: idDrink,
        });
    };

    //Search cocktail from DB
    const cocktailSearch = async () => {
        try {
            //initiate loading and set modal to visible
            setLoading(true);
            setModalVisible(true);
            findSuggestions();
            //fetch search results
            const searchResponse = await fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchValue.trim());
            const searchJson = await searchResponse.json();
            setResults(searchJson.drinks);
            setTimeout( () => {setLoading(false), onChangeText('')},1000);
        } catch (error) {
            console.error(error);
            onChangeText('');
            setLoading(false)
            }
    };
    
    //Find cocktail suggestion
    const findSuggestions = async () => {
        try {
            //fetch suggestion results
            const suggestionResponse = await fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + searchValue.charAt(0));
            const suggestionsJson = await suggestionResponse.json();
            setSuggestions(suggestionsJson.drinks);
        } catch (error) {
            console.error(error);
            }
    };
    
    //Close Modal
    const closeModal = () => (
        <TopNavigationAction icon={CloseIcon} onPress={() => setModalVisible(false)} />
    );
    const CloseIcon = (props) => (
        <Icon {...props} name='close-circle-outline' fill='#BC4A57' />
    );
    

    //Suggestion Component
    const Suggestion = ({ props }) => (
        <TouchableOpacity style={styles.suggestionWrapper} onPress={() => navigateCocktail(props.idDrink)}>
            <Text category='label' style={styles.suggestionLabel}>{props.strDrink}</Text>
        </TouchableOpacity>
    );


    //Drink Card Component
    const RenderDrinkCard = ({ item }) => (
        <Card style={styles.drinkCard} onPress={() => navigateCocktail(item.idDrink)}>
            <View>
                <Text category="s2" style={styles.drinkCardText}>
                    {item.strDrink}
                </Text>
                <Image style={styles.drinkThumb} source={{ uri: item.strDrinkThumb }} />
            </View>
        </Card>
    );


    return (
        <View style={styles.section}>
            {  isLoading ? 
                <View>
                    <Spinner status='primary' size='giant'/>
                </View>
                
                :
                <Input placeholder='Search for a cocktail...' 
                    style={styles.input} 
                    value={searchValue} 
                    onChangeText={onChangeText}
                    onSubmitEditing={cocktailSearch}
                />
            }
            <Modal
                visible={modalVisible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}>
                <Card disabled={true}>
                    { isLoading ? 
                        <Text category='h6' style={styles.loadingText}>Searching For Your Cocktail...</Text> 
                        :
                        <View>
                            <TopNavigation alignment="center" accessoryRight={closeModal}/>
                            { results ?
                                //No result modal with Suggestions
                                <View style={{alignItems: 'center'}}>
                                    <Text category='h6'style={styles.headText}>Search Results</Text> 
                                    <View style={styles.drinkCardContainer}>
                                        {results.slice(0,4).map((item) => <RenderDrinkCard key={item.idDrink} item={item}/>)}
                                    </View>
                                </View>
                            :
                                //Modal with Cocktail Results
                                <View>
                                    <Text category='s2'style={styles.headText}>Sorry we couldn't find that cocktail</Text>
                                    <Text category='h6'style={styles.headText}>Suggestions</Text>
                                    <View style={styles.suggestionContainer}>
                                        {suggestions.slice(0,10).map((item) => <Suggestion key={item.idDrink} props={item}/>)}
                                    </View>  
                                </View>
                            }
                        </View>  
                        
                    }
                </Card>
            </Modal>
        </View>
    );
    }
    

    const styles = StyleSheet.create({
        input: {
            width: '80%',
            borderRadius: 30
        },
        backdrop: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modal: {
            flex: 1,
            width: '95%'
        },
        loadingText: {
            color: '#474747'
        },
        suggestionContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        suggestionWrapper: {
            backgroundColor: '#2981D2',
            borderRadius: '50%',
            padding: 10,
            margin: 2,
        },
        suggestionLabel: {
            color: 'white',
            textAlign: 'center'
        },
        headText: {
            textAlign: 'center',
            paddingBottom: 10,
            color: '#BC4A57'
        },
        drinkCardContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center'
        },
        drinkCard: {
            width: 150,
            marginBottom: 20,
            marginLeft: 5,
            alignSelf: 'center',
        },
        drinkThumb: {
            width: 100,
            height: 100,
            alignSelf: "center",
        },
        drinkCardText: {
            marginBottom: 5,
            textAlign: 'center'
        }
    })
