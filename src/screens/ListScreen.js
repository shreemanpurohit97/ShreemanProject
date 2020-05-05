import React from 'react';
import { StyleSheet, View, Text ,FlatList} from 'react-native';



const ListScreen = () => {
const friend = [
{name: 'age 20'},
{name: 'age 30'},
{name: 'age 40'},
{name: 'age 50'},

];
return(
<FlatList
horizontal
showsHorizontalScrollIndicator={false}
data={friend}
renderItem={({ item }) => {
return <Text>{item.name}</Text>;
}}></FlatList>
);
};


const styles = StyleSheet.create({

});
export default ListScreen;