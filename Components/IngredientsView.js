import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

export function IngredientsView(props) {

    return (
        <View style={styles.section}>
                    {
                        props.info.strIngredient1 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure1}</Text>
                            <Text category="s1">{props.info.strIngredient1}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient2 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure2}</Text>
                            <Text category="s1">{props.info.strIngredient2}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient3 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure3}</Text>
                            <Text category="s1">{props.info.strIngredient3}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient4 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure4}</Text>
                            <Text category="s1">{props.info.strIngredient4}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient5 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure5}</Text>
                            <Text category="s1">{props.info.strIngredient5}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient6 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure6}</Text>
                            <Text category="s1">{props.info.strIngredient6}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient7 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure7}</Text>
                            <Text category="s1">{props.info.strIngredient7}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient8 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure8}</Text>
                            <Text category="s1">{props.info.strIngredient8}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient9 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure9}</Text>
                            <Text category="s1">{props.info.strIngredient9}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient10 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure10}</Text>
                            <Text category="s1">{props.info.strIngredient10}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient11 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure11}</Text>
                            <Text category="s1">{props.info.strIngredient11}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient12 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure12}</Text>
                            <Text category="s1">{props.info.strIngredient12}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient13 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure13}</Text>
                            <Text category="s1">{props.info.strIngredient13}</Text>
                        </View>
                        ) : null
                    }
                    {
                        props.info.strIngredient14 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure14}</Text>
                            <Text category="s1">{props.info.strIngredient14}</Text>
                        </View>
                        ) : null
                    } 
                    {
                        props.info.strIngredient15 ? ( 
                        <View style={styles.textList}>
                            <Text category="s1">{props.info.strMeasure15}</Text>
                            <Text category="s1">{props.info.strIngredient15}</Text>
                        </View>
                        ) : null
                    }   
        </View>
    );
    }
    

const styles = StyleSheet.create({
    textList: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 10
    }
})
