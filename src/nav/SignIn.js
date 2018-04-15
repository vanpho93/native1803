import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '../shared/Button';

export class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign In Component</Text>
                <Button 
                    title="Login"
                    type="success"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CED1D9',
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

