import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MainHeader from '../Header/Header';

const About = props => {
    return (
        <View style={styles.wrapper}>
        <MainHeader onSelect={() => {
            props.navigation.toggleDrawer();
        }} 
        title = "About"
        />
        <View style={styles.Settings}>
        <Text>This is the About Screen</Text>
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

export default About;