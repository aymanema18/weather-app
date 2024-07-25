import { getWeather } from './fetch-weather-data';

async function extractData(name) {
    const data = await getWeather(name);
    const temp = data.currentConditions.temp.toFixed();
    const humidity = data.currentConditions.humidity.toFixed();
    const windSpeed = data.currentConditions.windspeed.toFixed();
    const condition = data.currentConditions.conditions;
    const icon = data.currentConditions.icon;
    const sunrise = data.currentConditions.sunrise;
    const sunset = data.currentConditions.sunset;

    return { temp, humidity, windSpeed, condition, icon, sunrise, sunset };
}

export { extractData };
