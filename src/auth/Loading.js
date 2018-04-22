import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import axios from 'axios';
import { Button } from '../shared/Button';

export class Loading extends Component {
    async componentDidMount() {
        const { navigate } = this.props.navigation;
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) throw new Error('Do not have token.');
            const url = 'https://auth1803.herokuapp.com/check'
            const response = await axios.post(url, { token });
            AsyncStorage.setItem('token', response.data.user.token);
            navigate('Account');
        } catch (error) {
            setTimeout(() => navigate('SignIn'), 1000);
            console.log(error);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text style={styles.title}>Loading Component</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDF5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 30
    }
});