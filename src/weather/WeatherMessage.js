import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export class WeatherMessage extends Component {
    render() {
        return <Text style={styles.message}>Saigon is now 20˚C</Text>
    }
}

const styles = StyleSheet.create({
    message: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    }
});
