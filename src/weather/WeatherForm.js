import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';

export class WeatherForm extends Component {
    state = { txtCityname: '' };
    render() {
        return (
            <View>
                <Input
                    placeholder="Enter your city name"
                    onChangeText={text => this.setState({ txtCityname: text })}
                />
                <Button title="Get Weather" type="success" />
            </View>
        );
    }
}

