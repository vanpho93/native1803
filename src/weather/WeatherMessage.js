import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

class WeatherMessageComponent extends Component {
    render() {
        const { temp, cityName, loading } = this.props;
        if (loading) return (
            <View style={styles.loadingStyle}>
                <ActivityIndicator />
                <Text style={styles.message}>Loading...</Text>
            </View>
        );
        if (!cityName) return <Text style={styles.message}>Enter your city name</Text>
        return <Text style={styles.message}>{cityName} is now {temp}˚C</Text>
    }
}

const mapState = state => ({
    temp: state.temp,
    cityName: state.cityName,
    loading: state.loading
});

export const WeatherMessage = connect(mapState)(WeatherMessageComponent);

const styles = StyleSheet.create({
    message: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10
    },
    loadingStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
});
