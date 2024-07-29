import { showHome } from './home';
import { showWeather } from './weather-content';
import { extractData } from './extract-data';

async function display() {
    const homeBtn = document.querySelector('.home');

    showHome();
    const btn = document.querySelector('.search-btn');
    const input = document.querySelector('#city-name');
    btn.disabled = true;
    input.addEventListener('change', () => {
        if (!(input.value === '')) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    });

    eventLisFun(btn);

    homeBtn.addEventListener('click', () => {
        showHome();
        const searchBtn = document.querySelector('.search-btn');
        const input = document.querySelector('#city-name');
        searchBtn.disabled = true;
        input.addEventListener('change', () => {
            if (!(input.value === '')) {
                searchBtn.disabled = false;
            } else {
                searchBtn.disabled = true;
            }
        });

        eventLisFun(searchBtn);
    });
}

function eventLisFun(btn) {
    btn.addEventListener(
        'click',
        async () => {
            try {
                const cityName = document.querySelector('#city-name').value;
                if (!isNaN(Number(cityName))) {
                    const p = document.querySelector('.home-err-msg');
                    p.textContent = 'Please enter a valid value.';
                    eventLisFun(btn);
                } else {
                    const data = await extractData(cityName);
                    await showWeather(
                        data.temp,
                        data.humidity,
                        data.windSpeed,
                        data.condition,
                        data.sunrise,
                        data.sunset,
                        data.city,
                        data.icon,
                    );
                    navEvLsFn();
                }
            } catch (error) {
                const p = document.querySelector('.home-err-msg');
                p.textContent = 'No such place.';
                eventLisFun(btn);
            }
        },
        { once: true },
    );
}

function navEvLsFn() {
    const navSearchBtn = document.querySelector('.nav-search-btn');
    const input = document.querySelector('#nav-city-name');
    const cb = function () {
        if (!(input.value === '')) {
            navSearchBtn.disabled = false;
        } else {
            navSearchBtn.disabled = true;
        }
    };
    navSearchBtn.disabled = true;
    input.removeEventListener('change', cb);
    input.addEventListener('change', cb);
    navSearchBtn.addEventListener(
        'click',
        async () => {
            try {
                const cityName = document.querySelector('#nav-city-name').value;
                if (!isNaN(Number(cityName))) {
                    const p = document.createElement('p');
                    const main = document.querySelector('main');

                    main.classList = '';
                    p.classList.add('error-msg');
                    main.classList.add('error-main');
                    main.innerHTML = '';
                    p.textContent = 'Please enter a valid value.';
                    main.appendChild(p);
                    navEvLsFn();
                } else {
                    const data = await extractData(cityName);
                    await showWeather(
                        data.temp,
                        data.humidity,
                        data.windSpeed,
                        data.condition,
                        data.sunrise,
                        data.sunset,
                        data.city,
                        data.icon,
                    );
                    navEvLsFn();
                }
            } catch (error) {
                const p = document.createElement('p');
                const main = document.querySelector('main');

                main.classList = '';
                p.classList.add('error-msg');
                main.classList.add('error-main');
                main.innerHTML = '';
                p.textContent = 'No such place.';
                main.appendChild(p);
                navEvLsFn();
            }
        },
        { once: true },
    );
}

export { display };
