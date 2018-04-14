import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../shared/Button';

export class Init extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Init Component
                </Text>
                <Button title="Show" />
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
