import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Appointments = props => {
    return(
        <View style={styles.wrapper}>
            <Text>This is the Appointments Screen</Text>
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

export default Appointments;