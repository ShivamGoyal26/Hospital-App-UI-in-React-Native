import React from 'react';
import { StyleSheet, View, Text, ImageBackground, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';


const Signup = props => {
    return (
        <View style={styles.wrapper}>
            <StatusBar barStyle='light-content'
                backgroundColor="#39559e"
            />
            <ImageBackground
                source={{ uri: 'https://ojasvingroup.com/wp-content/uploads/2018/10/professional-facebook-ads-images.jpg' }}
                style={styles.bgImage}
            >
            <View style={{ flex: 1, backgroundColor: "#39559eA9" }}>
                <ScrollView>

                    <View>

                        {/* BUTTONS  */}

                        <View style={styles.button}>
                       
                       <TouchableOpacity onPress={() =>{
                           props.navigation.navigate('LoginScreen');
                       }}>
                       <Text style={styles.buttonText}>LOG IN</Text>
                       </TouchableOpacity>
                       
                       <TouchableOpacity onPress={() =>{
                           props.navigation.navigate('SignUpScreen');
                       }}>
                       <Text style={styles.buttonText}> SIGN UP </Text>
                       </TouchableOpacity>
                       
                   </View>

                        {/* LOGO  */}
                        <View style={styles.imageStyle}>
                            <Image
                                source={{ uri: 'https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png' }}
                                style={styles.logo}
                            />
                        </View>

                        {/* TITLE  */}
                        <View style={{alignItems: 'center', marginTop: -10,}}>
                        <Text style={{color: 'white', fontSize: 17}}>Patient Plus</Text>
                        </View>
                        

                        {/* LOGIN FORM BOX  */}

                        <View style={styles.form}>

                            {/* NAME  */}

                            <View style={styles.textBox}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                                    placeholderTextColor='red'
                                />
                            </View>

                            {/* EMAIL FIELD */}

                            <View style={styles.textBox}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor='red'
                                />
                            </View>



                            {/* PAITENT ID  */}

                            <View style={styles.textBox}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Patient ID"
                                    placeholderTextColor='red'

                                />
                            </View>

                            {/* PASSWORD FIELD  */}

                            <View style={styles.textBox}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor='red'

                                />
                            </View>

                            {/* CONFIRM PASSWORD FIELD  */}

                            <View style={styles.textBox}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    placeholderTextColor='red'

                                />
                            </View>

                            {/* BUTTON  */}

                            <TouchableOpacity
                                style={[styles.signIn, {
                                    borderColor: '#C2185B',
                                    borderWidth: 1,
                                    marginTop: 15,
                                }]}
                                onPress={() => {
                                props.navigation.navigate('Home')
                            }}
                            >
                                <Text style={styles.textSign}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                </View>
            </ImageBackground>


        </View>
    );
};

const styles = StyleSheet.create({
    forgotPassword: {
        marginVertical: 20,
        fontSize: 18,
        color: 'white'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    signIn: {
        width: '70%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70,
        backgroundColor: '#C2185B'
    },
    wrapper: {
        flex: 1
    },
    bgImage: {
        flex: 1,
    },

    login: {
        flex: 1,
        color: 'black',
        opacity: 0.5,
    },
    button: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    logo: {
        height: 150,
        width: 150,
    },
    imageStyle: {
        marginVertical: 30,
        alignItems: 'center'
    },
    textBox: {
        marginVertical: 10,
        width: '70%',
        height: 45,
    },
    form: {
        marginVertical: 20,
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    input: {
        padding: 12,
        fontSize: 18,
        backgroundColor: 'white',
        color: 'red'
    }
});

export default Signup;