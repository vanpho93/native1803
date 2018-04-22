import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, AsyncStorage } from 'react-native';
import axios from 'axios';
import { Button } from '../shared/Button';

export class Loading extends Component {
    componentDidMount() {
        const { navigate } = this.props.navigation;
        AsyncStorage.getItem('token')
        .then(token => {
            if (!token) return navigate('Signin');
            const url = 'https://auth1803.herokuapp.com/check'
            axios.post(url, { token })
            .then(() => navigate('Account'))
            .catch(() => navigate('SignIn'))
        });
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