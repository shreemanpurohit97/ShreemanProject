import React from 'react';
import {Text,  StyleSheet, View,KeyboardAvoidingView,TextInput ,TouchableHighlight,Button} from 'react-native';
import Colors from '../../Constants/Color';
import {withNavigation} from 'react-navigation';
const  LoginScreen = props => {

 return(
    <KeyboardAvoidingView
    behavior="padding"
    keyboardVerticalOffset={50}
    style={styles.screen}
  >
    <View style={styles.formControl}>
    <Text style={styles.label}>Email</Text>
    <TextInput
      style={styles.textInput}
      placeholder="Enter email"
      keyboardType="email-address"
      autoCapitalize="none"
      
    />
  </View>
  <View style={styles.formControl}>
  <Text style={styles.label}>Password</Text>
  <TextInput
    style={styles.textInput}
    secureTextEntry
    placeholder="Enter password"
    autoCapitalize="none"
    keyboardType="default"
    
  />
</View>
<TouchableHighlight style={styles.buttonContainer}>
        <Button
          color={Colors.primary}
          title='Log In'
          onPress={() => props.navigation.navigate('Search')}
          
        />
      </TouchableHighlight>
</KeyboardAvoidingView>
 )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 40,
        paddingHorizontal: 20,
      },
      formControl: {
        marginVertical: 10,
      },
      label: {
        fontWeight: "bold",
      },
      textInput: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 3,
      },
      buttonContainer: {
        width: "100%",
        borderRadius: 10,
        marginVertical: 20,
      },
      errorText: {
        color: "red",
        fontSize: 13,
      },
      loader: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: "#afafaf",
        justifyContent: "center",
        alignItems: "center",
      },
});
export default  withNavigation(LoginScreen);