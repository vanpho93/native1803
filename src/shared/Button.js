import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export class Button extends Component {
    render() {
        const { title } = this.props;
        return (
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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

