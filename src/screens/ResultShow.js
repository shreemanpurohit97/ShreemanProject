import React,{useState, useEffect}from 'react';
import {View ,StyleSheet, Text, FlatList,Image} from 'react-native';
import yelp from './api/yelp';
import Color from '../../Constants/Color';

const ResultShow  = ({navigation}) => {
    const[result, setResult] = useState(null);
    const id = navigation.getParam('id');


    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
       setResult(response.data);
    };
useEffect (() => {
    getResult(id);
}, []);

if(!result){
   return null;     
}


     
    return(
        <View>
             <Text style={styles.textelement}>{result.name}</Text>
             <FlatList
             data={result.photos}
             keyExtractor={(photo) => photo}
             renderItem={({item}) => {
             return <Image style={styles.image} source={{uri : item}}/>
             }}
             />
        </View>
        )
};

export default ResultShow;
const styles = StyleSheet.create({
    image:{
        width:340,
        height:200,
        alignSelf:'center',
        marginBottom:15,
        borderRadius:15,
        
    },
 textelement:{
    textAlign:"center",
    marginBottom:14,
    marginTop:10,
    fontSize:20,
    fontWeight:'bold',
    color: 'red'
 }
});