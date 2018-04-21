import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import axios from 'axios';
import { Button } from '../shared/Button';

class Account extends Component {
    constructor(props) {
        super(props);
        this.sendRequest = this.sendRequest.bind(this);
    }

    sendRequest() {
        // axios.get('http://192.168.1.13:3000/signin/teo@gmail.com/123')
        // .then(response => console.log(response))
        // .catch(error => console.log(error));
        const data = { email: 'tun@gmail.com', password: '123' };
        axios.post('http://192.168.1.13:3000/signin', data)
        // .then(response => alert(response.data.message))
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.accountContainer}>
                <Text style={styles.title}>Account Component</Text>
                <Button
                    title="Log out"
                    type="warning"
                    onPress={() => navigate('DrawerOpen')}
                />
                <Button
                    title="Send request"
                    type="success"
                    onPress={this.sendRequest}
                />
            </View>
        );
    }
}

class Menu extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.signInContainer}>
                <Text style={styles.title}>Menu Component</Text>
                <Button
                    title="Login"
                    type="success"
                    onPress={() => navigate('DrawerClose')}
                />
            </View>
        );
    }
}

export const Drawer = DrawerNavigator(
    { Account: { screen: Account } },
    { contentComponent: Menu }
);

const styles = StyleSheet.create({
    aboutContainer: {
        backgroundColor: '#EF4F21',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    accountContainer: {
        backgroundColor: 'lightblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInContainer: {
        backgroundColor: '#C4B7D7',
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

