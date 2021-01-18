import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Message = props => {
    return (
        <View style={styles.wrapper}>
            <Text>This is the Message Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Message;