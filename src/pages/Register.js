import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, Image } from 'react-native';

export default class Register extends Component {
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
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={name => this.setState({ name })}
          placeholder={'Name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder={'Email'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput style={{ height: 40, borderWidth: 1 }}
           onChangeText={address => onChangeText(address)}
           placeholder={'Address'}
           secureTextEntry={true}
        />
        <View style={styles.buttonStyle}>
          <Button
            rounded
            success
            title={'Register!'}
            color="#65c756"
            onPress={this.onLogin.bind(this)}
          />
          <Button
            rounded
            success
            title={'Login!'}
            color="#65c756"
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