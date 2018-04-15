import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '../shared/Button';

export class Account extends Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Account Component</Text>
                <Button 
                    title="Log out"
                    type="warning"
                    onPress={() => goBack()}
                />
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

