import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
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
        const { startGetWeather, gotError, gotWeather } = this.props;
        startGetWeather();
        const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q='
        const { txtCityname } = this.state;
        axios.get(URL + txtCityname)
        .then(response => {
            gotWeather(txtCityname, response.data.main.temp);
            this.setState({ txtCityname: '' });
        })
        .catch(error => {
            gotError();
            this.setState({ txtCityname: '' });
            alert(error);
        })
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
