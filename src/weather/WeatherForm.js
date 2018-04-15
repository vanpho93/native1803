import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import * as actionCreators from './actionCreators';

class WeatherFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtCityname: '' };
        this.getTempByCityName = this.getTempByCityName.bind(this);
    }

    getTempByCityName() {
        this.props.getWeather(this.state.txtCityname);
        this.setState({ txtCityname: '' });
    }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Input
                    value={this.state.txtCityname}
                    placeholder="Enter your city name"
                    onChangeText={text => this.setState({ txtCityname: text })}
                />
                <Button
                    title="Get Weather"
                    type="success"
                    style={{ width: 150 }}
                    onPress={this.getTempByCityName}
                />
            </View>
        );
    }
}

export const WeatherForm = connect(null, actionCreators)(WeatherFormComponent);
