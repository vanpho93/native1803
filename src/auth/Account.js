import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Button } from '../shared/Button';

export class Account extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        AsyncStorage.removeItem('token');
        this.props.navigation.navigate('SignIn');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Account Component</Text>
                <Button 
                    title="Log out"
                    type="warning"
                    onPress={this.logOut}
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

