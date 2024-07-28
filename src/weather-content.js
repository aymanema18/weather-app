import sunriseIcon from './images/sunrise.svg';
import sunsetIcon from './images/sunset.svg';
import { getGif } from './fetch-gif';

async function showWeather(
    temp,
    humidity,
    windSpeed,
    condition,
    sunrise,
    sunset,
    city,
    icon,
) {
    const nav = document.querySelector('nav');
    const sBtn = document.querySelector('.nav-search-btn');
    const inputNav = document.querySelector('#nav-city-name');
    const main = document.querySelector('main');
    const iconDiv = document.createElement('div');
    const iconContainer = document.createElement('div');
    const gifImg = document.createElement('img');
    const icDvTxt = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const dataDiv = document.createElement('div');
    const sunIconsDiv = document.createElement('div');
    const snrIcDv = document.createElement('div');
    const snrIcImg = document.createElement('img');
    const snrP = document.createElement('p');
    const snsIcDv = document.createElement('div');
    const snsIcImg = document.createElement('img');
    const snsP = document.createElement('p');
    const hNWs = document.createElement('div');
    const hP = document.createElement('p');
    const ws = document.createElement('p');

    main.innerHTML = '';
    iconDiv.classList = 'icon-div inp-n-wt-div';
    iconContainer.classList = 'icon-container';
    gifImg.classList.add('icon');
    icDvTxt.classList.add('icon-div-txt');
    dataDiv.classList = 'data-div inp-n-wt-div';
    sunIconsDiv.classList.add('sun-icons-div');
    snrIcDv.classList.add('sunrise-icon-div');
    snrIcImg.classList.add('sunrise-icon');
    snrP.classList.add('sunrise-time');
    snsIcDv.classList.add('sunset-icon-div');
    snsIcImg.classList.add('sunset-icon');
    snsP.classList.add('sunset-time');
    hNWs.classList.add('h-n-ws');
    main.classList = '';
    main.classList.add('weather-main');
    gifImg.setAttribute('alt', 'icon');
    gifImg.src = await getGif(icon);
    snrIcImg.setAttribute('alt', 'sunrise icon');
    snrIcImg.src = sunriseIcon;
    snsIcImg.setAttribute('alt', 'sunset icon');
    snsIcImg.src = sunsetIcon;
    h1.textContent = `${temp}°F`;
    h2.textContent = condition;
    h3.textContent = city;
    snrP.textContent = sunrise;
    snsP.textContent = sunset;
    hP.textContent = `Humidity: ${humidity}%`;
    ws.textContent = `Wind speed: ${windSpeed}km/h`;
    iconContainer.appendChild(gifImg);
    icDvTxt.appendChild(h1);
    icDvTxt.appendChild(h2);
    icDvTxt.appendChild(h3);
    iconDiv.appendChild(iconContainer);
    iconDiv.appendChild(icDvTxt);
    snrIcDv.appendChild(snrIcImg);
    snrIcDv.appendChild(snrP);
    snsIcDv.appendChild(snsIcImg);
    snsIcDv.appendChild(snsP);
    sunIconsDiv.appendChild(snrIcDv);
    sunIconsDiv.appendChild(snsIcDv);
    hNWs.appendChild(hP);
    hNWs.appendChild(ws);
    dataDiv.appendChild(sunIconsDiv);
    dataDiv.appendChild(hNWs);
    main.appendChild(iconDiv);
    main.appendChild(dataDiv);
    if (sBtn && inputNav) {
        inputNav.value = '';
    } else {
        const input = document.createElement('input');
        const btn = document.createElement('button');
        input.setAttribute('id', 'nav-city-name');
        btn.classList.add('nav-search-btn');
        btn.textContent = 'Search';
        nav.insertBefore(btn, nav.firstChild);
        nav.insertBefore(input, nav.firstChild);
    }
}

export { showWeather };
