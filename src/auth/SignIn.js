import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import axios from 'axios';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEmail: 'teo@gmail.com', txtPassword: '123' };
        this.login = this.login.bind(this);
    }

    // componentDidMount() {
    //     AsyncStorage.getItem('token')
    //     .then(value => alert('token: ' + value));
    // }

    login() {
        const { txtEmail, txtPassword } = this.state;
        const { navigate } = this.props.navigation;
        const url = 'https://auth1803.herokuapp.com/signin';
        axios.post(url, { email: txtEmail, password: txtPassword })
        .then(response => {
            AsyncStorage.setItem('token', response.data.user.token);
            navigate('Account');
        })
        .catch(error => alert('Check User Login Infomation.'));
    }

    render() {
        const { txtEmail, txtPassword } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign In Component</Text>
                <Input
                    placeholder="Email"
                    value={txtEmail}
                    onChangeText={txtEmail => this.setState({ txtEmail })}
                />
                <Input
                    placeholder="Password"
                    value={txtPassword}
                    onChangeText={txtPassword => this.setState({ txtPassword })}
                    secureTextEntry
                />
                <Button 
                    style={{ width: 300 }}
                    title="Login"
                    type="success"
                    onPress={this.login}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D6CFE2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20
    }
});
