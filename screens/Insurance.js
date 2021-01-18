import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainHeader from '../Header/Header';

const Insurance = props => {
    return (
        <View style={styles.wrapper}>
            <MainHeader onSelect={() => {
                props.navigation.toggleDrawer();
            }} 
            title = "Insurance"
            />
            <View style={styles.Settings}>
            <Text>This is the Insurance Screen</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    Settings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Insurance;