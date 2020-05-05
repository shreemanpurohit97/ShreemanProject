import React,{ useState} from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";


const HomeScreen = () => { 
  const[name, setname] = useState('');
  
  return(
    <View>
     <Text>Hello i am shreeman</Text>
      <TextInput
      value = {name}
      onChangeText={newvalue => setname(newvalue)}
      />
   <Text>my name is {name}</Text>
     </View>
  )
};


const styles = StyleSheet.create({
  input: {
   
    margin:15

  }
});

export default HomeScreen;
