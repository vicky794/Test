import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, Image } from 'react-native';
//import AppNavigator from '.src/pages/AppNavigator';
export default class Login extends Component { 
 
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }
  onLogin() {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    
    return (
      //<AppNavigator/>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image style={styles.image} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
        </View>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.buttonStyle}>
          <Button
            rounded
            success
            title={'Login!'}
            color="#65c756"
            onPress={this.onLogin.bind(this)}
          />
          </View>
          <View style={styles.buttonStyle}>
          <Button
            rounded
            success
            title={'Register!'}
            color="#4d4dff" 
            onPress={() =>
              this.props.navigation.navigate('Register')
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 0.25,
    justifyContent: 'center'
  },
  container: { 
    backgroundColor: '#ffb3ff',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonStyle: {
    width: '90%',
    marginBottom: 4,
    alignSelf: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30, 
    fontSize: 18,
  },
});