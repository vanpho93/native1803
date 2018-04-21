import React, { Component } from 'react';
import { View, StyleSheet, Text , Image} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button } from '../shared/Button';

import signInIcon from '../images/signin.png';
import accountIcon from '../images/account.png';
import aboutIcon from '../images/about.png';

import signInFocusIcon from '../images/signin-f.png';
import accountFocusIcon from '../images/account-f.png';
import aboutFocusIcon from '../images/about-f.png';

class Account extends Component {
    render() {
        return (
            <View style={styles.accountContainer}>
                <Text style={styles.title}>Account Component</Text>
                <Button 
                    title="Log out"
                    type="warning"
                />
            </View>
        );
    }
}

class About extends Component {
    render() {
        return (
            <View style={styles.aboutContainer}>
                <Text style={styles.title}>Account Component</Text>
                <Button 
                    title="Log out"
                    type="warning"
                />
            </View>
        );
    }
}

class SignIn extends Component {
    render() {
        return (
            <View style={styles.signInContainer}>
                <Text style={styles.title}>Sign In Component</Text>
                <Button 
                    title="Login"
                    type="success"
                />
            </View>
        );
    }
}

export const TabNav = TabNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title:'SignIn',
            tabBarIcon: ({ focused }) => {
                const source = focused ? signInFocusIcon : signInIcon;
                return <Image source={source} />
            },
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            title:'Account',
            tabBarIcon: ({ focused }) => {
                const source = focused ? accountFocusIcon : accountIcon;
                return <Image source={source} />
            },
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title:'About',
            tabBarIcon: ({ focused }) => {
                const source = focused ? aboutFocusIcon : aboutIcon;
                return <Image source={source} />
            }
        }
    }
});

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

