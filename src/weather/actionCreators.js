import axios from 'axios';

function startGetWeather() {
    return { type: 'START_GET_WEATHER' };
}

function gotError() {
    { type: 'GOT_ERROR' };
}

function gotWeather(cityName, temp) {
    return { type: 'GOT_WEATHER', cityName, temp };
}

export function getWeather(cityName) {
    return dispatch => {
        dispatch({ type: 'START_GET_WEATHER' });
        const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q='
        axios.get(URL + cityName)
        .then(response => {
            dispatch({ type: 'GOT_WEATHER', cityName, temp: response.data.main.temp });
        })
        .catch(error => {
            dispatch({ type: 'GOT_ERROR' });
            alert(error);
        });
    }
}
