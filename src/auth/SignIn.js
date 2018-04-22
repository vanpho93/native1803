import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import axios from 'axios';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEmail: 'teo@gmail.com', txtPassword: '123' };
        this.login = this.login.bind(this);
    }
    login() {
        alert(JSON.stringify(this.state));
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
