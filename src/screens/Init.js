import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';

export class Init extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEmail: '', txtPassword: '' }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Init Component
                </Text>
                <Input
                    placeholder="Email"
                    onChangeText={text => this.setState({ txtEmail: text })}
                />
                <Input
                    placeholder="Password"
                    onChangeText={text => this.setState({ txtPassword: text })}
                />
                <Text>Email: {this.state.txtEmail}</Text>
                <Text>Password: {this.state.txtPassword}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
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
