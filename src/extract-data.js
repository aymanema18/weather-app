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
    const city = data.address;
    console.log(data);
    console.log(city);
    console.log(`${temp}°F`);
    console.log(`${humidity}%`);
    console.log(`${windSpeed}km/h`);
    console.log(condition);
    console.log(icon);
    console.log(sunrise);
    console.log(sunset);

    return {
        temp,
        humidity,
        windSpeed,
        condition,
        icon,
        sunrise,
        sunset,
        city,
    };
}

export { extractData };
