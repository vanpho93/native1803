export function startGetWeather() {
    return { type: 'START_GET_WEATHER' };
}

export function gotError() {
    { type: 'GOT_ERROR' };
}

export function gotWeather(cityName, temp) {
    return { type: 'GOT_WEATHER', cityName, temp };
}
