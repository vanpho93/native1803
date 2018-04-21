import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Button } from '../shared/Button';

class Account extends Component {
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

