import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export class Input extends Component {
    render() {
        const { placeholder, onChangeText } = this.props;
        return (
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={onChangeText}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: 5
    }
});

