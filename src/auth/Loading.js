import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Button } from '../shared/Button';

export class Loading extends Component {
    componentDidMount() {
        setTimeout(() => this.props.navigation.navigate('Account'), 1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text style={styles.title}>Loading Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDF5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 30
    }
});