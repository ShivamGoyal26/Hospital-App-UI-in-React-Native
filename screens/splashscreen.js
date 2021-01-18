import React from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Splash = props => {
    return (
        <View style={styles.wrapper}>
         <StatusBar barStyle = 'light-content'
        backgroundColor = "#39559e"
         />
            <LinearGradient
                colors={['#39559e', '#ffffff']}
                style={styles.splash}
            >
                
                <Image
                    source={{ uri: 'https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png'}}
                    style={styles.logo}
                    resizeMode = 'stretch'
                />
                <Text style={styles.title}>Patient Plus</Text>
                <Text style={styles.subTitle}> We care for you and we are lifesavers! We are here 24*7</Text>

                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('LoginScreen');
                }} 
                >
                    <LinearGradient 
                    colors={['#5774ba', '#39559e']}
                    style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcon name='navigate-next' size={26} color = {'white'}/>
                        {/* <Text>H</Text> */}
                    </LinearGradient>
                </TouchableOpacity>

            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    signIn: {
        width: 150,
        height: 40,
        padding: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    wrapper: {
        flex: 1
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },

    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        height: 150,
        width: 150,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    subTitle: {
        width: '50%',
        marginVertical: 30,
        color: 'white'
        },
});

export default Splash;