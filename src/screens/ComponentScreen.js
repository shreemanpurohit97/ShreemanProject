import React from 'react';
import {Text , StyleSheet, View } from 'react-native';



const ComponentScreen = () => {
    const greeting = ' hi there';
    return (
        <View>  
    <Text style={styles.textstyle}> hi its me</Text>
    <Text>{greeting}</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    textstyle: {
        fontSize:30

    }
});

export default ComponentScreen;