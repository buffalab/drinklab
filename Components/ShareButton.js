import React from 'react';
import {
    View,
    StyleSheet,
    Share
} from 'react-native';
import { Button, Icon } from '@ui-kitten/components';

export function ShareButton(props) {
    const ShareIcon = (props) => (
        <Icon {...props} name="share" fill="white" />
    );
    const onShare = async () => {
        try {
            const result = await Share.share({
            message: props.name + ' | '+ props.instructions,
            });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
            // shared with activity type of result.activityType
            } else {
            // shared
            }
        } else if (result.action === Share.dismissedAction) {
        // dismissed
        }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View>
            <Button style={styles.Button} onPress={onShare} accessoryRight={ShareIcon}>Share Cocktail</Button>
        </View>
    );
};
export const styles = StyleSheet.create({
    Button: {
        width: 200,
        alignSelf:'center',
        borderRadius: '50%',
        marginTop: 20
    },
});