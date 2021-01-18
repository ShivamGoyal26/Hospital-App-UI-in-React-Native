import React from 'react';
import MainHeader from '../Header/Header';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Home = props => {
    return (
        <View style={styles.home}>
            <MainHeader onSelect={() => {
                props.navigation.toggleDrawer();
            }} 
            title = "Home"
            />

            {/* COMPONENT ONE  */}

            <View style={[styles.component, { backgroundColor: '#819ee5', marginTop: 20 }]}>
                <MaterialCommunityIcons name='heart-plus' size={26} color={'white'} style={styles.icon} />
                <Text style={styles.text}>Find a Location</Text>
            </View>

            {/* COMPONENT TWO  */}

            <View style={[styles.component, { backgroundColor: '#5774ba', }]}>
                <Fontisto name='doctor' size={26} color={'white'} style={styles.icon} />
                <Text style={styles.text}>Choose a doctor</Text>
            </View>

            {/* COMPONENT THREE  */}

            <View style={[styles.component, { backgroundColor: '#39559e', }]}>
                <MaterialCommunityIcons name='clock-time-eight-outline' size={26} color={'white'} style={styles.icon} />
                <Text style={styles.text}>Make an appointment</Text>
            </View>

            {/* COMPONENT FOUR  */}

            <View style={[styles.component, { backgroundColor: '#819ee5', }]}>
                <Fontisto name='date' size={26} color={'white'} style={styles.icon} />
                <Text style={styles.text}>ER waiting period</Text>
            </View>

            {/* COMPONENT FIVE  */}

            <View style={[styles.component, { backgroundColor: '#e1395f', }]}>
                <Fontisto name='nursing-home' size={26} color={'white'} style={styles.icon} />
                <Text style={styles.text}>Find an Urgent Care Location</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    component: {
        margin: 10,

        flexDirection: 'row',
        height: 90,
        borderRadius: 15,
    },
    text: {
        color: 'white',
        padding: 30,
        fontSize: 18,
    },
    icon: {
        color: 'white',
        paddingLeft: 30,
        paddingVertical: 30,
    },

});

export default Home;