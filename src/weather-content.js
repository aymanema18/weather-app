import sunriseIcon from './images/sunrise.svg';
import sunsetIcon from './images/sunset.svg';

function showWeather(
    temp,
    humidity,
    windSpeed,
    condition,
    icon,
    sunrise,
    sunset,
    city,
) {
    const nav = document.querySelector('nav');
    const input = document.createElement('input');
    const btn = document.createElement('button');
    const main = document.querySelector('main');

    main.innerHTML = '';
    main.classList = '';
    main.classList.add('weather-main');
    input.setAttribute('id', 'city-name');
    btn.textContent = 'Search';
    nav.insertBefore(btn, nav.firstChild);
    nav.insertBefore(input, nav.firstChild);
}

export { showWeather };
