import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '../shared/Button';

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
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ txtEmail: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    secureTextEntry
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
    },
    textInput: {
        backgroundColor: 'white',
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: 5
    }
});
