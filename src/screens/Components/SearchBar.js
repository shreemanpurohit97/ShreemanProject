import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar= ({term,onTermChange, onTermSubmit}) =>{
return(
    <View style={styles.backgroundStyle}>
        <Feather name="search" size={100} style={styles.iconstyle}/>
    <TextInput placeholder="Search" style={styles.inputstyle}
    value={term}
    onChangeText={onTermChange}
    onEndEditing={onTermSubmit}
    >
     
    </TextInput>
    </View>
);

};
const styles = StyleSheet.create(   {backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height:50,
    borderRadius: 5,
    marginTop:10,
    marginHorizontal:15,
    flexDirection: 'row'

},
inputstyle: {
    flex:1,
fontSize:18,

},
iconstyle:{
    alignSelf:'center',
    fontSize:15,
    marginHorizontal:15
}   



});

export default SearchBar;