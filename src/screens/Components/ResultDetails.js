import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const ResultDetails = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} stars, {result.review_count} Reviews</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
  marginLeft: 15
    },
 image:{
    width:250,
    height: 120,
    marginBottom:5,
    borderRadius:4
 },
 name:{
     fontWeight: 'bold'
 }
});
export default ResultDetails;
