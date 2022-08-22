import React, { useEffect, useState} from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Layout, Text, Icon, Divider} from '@ui-kitten/components';
import {
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';

export const DescriptionScreen = ({  route, navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const { liquor} = route.params;
    const [description, setDescription] = useState([]);

    
    //top nav icons & actions
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );
    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' fill='#BC4A57' />
    );
    const navigateBack = () => {
        navigation.goBack();
    };


    //fetch description
    const fetchDescription = async () => {
        try {
        const response = await fetch(
            "http://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + liquor
        );
        const json = await response.json();
        setDescription(json.ingredients[0].strDescription);
        setLoading(false);
        } catch (error) {
        console.error(error);
        }
    };
    useEffect(() => {
        fetchDescription();
    }, []);  
    
    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation alignment="center" title={ 'Learn more about ' + liquor + '!'} accessoryLeft={BackAction}/>
            <Divider />
            <Layout style={styles.Layout}>
            <ScrollView>
                <Text category='h1'style={styles.headText}>{liquor}</Text>
                <Text category='s1' style={styles.text}>{description}</Text>
            </ScrollView>
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
    headText: {
        textAlign: 'center',
        padding: 10,
        color: '#BC4A57'
    },
    text: {
        textAlign: 'left',
        padding: 20
    }
});