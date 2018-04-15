import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { WeatherForm } from './WeatherForm';
import { WeatherMessage } from './WeatherMessage';

export class Weather extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WeatherMessage />
                <WeatherForm />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C4B7D7',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
