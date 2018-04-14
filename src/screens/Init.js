import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class Init extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Init Component
                </Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Show</Text>
                </TouchableOpacity>
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
    buttonContainer: {
        backgroundColor: '#25C73A',
        padding: 10,
        borderRadius: 5,
        borderColor: '#3EA552',
        borderWidth: 1,
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
