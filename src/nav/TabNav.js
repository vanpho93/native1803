import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button } from '../shared/Button';

class Account extends Component {
    render() {
        return (
            <View style={styles.accountContainer}>
                <Text style={styles.title}>Account Component</Text>
                <Button 
                    title="Log out"
                    type="warning"
                />
            </View>
        );
    }
}

class SignIn extends Component {
    render() {
        return (
            <View style={styles.signInContainer}>
                <Text style={styles.title}>Sign In Component</Text>
                <Button 
                    title="Login"
                    type="success"
                />
            </View>
        );
    }
}

export const TabNav = TabNavigator({
    SignIn: { screen: SignIn },
    Account: { screen: Account }
});

const styles = StyleSheet.create({
    accountContainer: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInContainer: {
        backgroundColor: '#C4B7D7',
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

