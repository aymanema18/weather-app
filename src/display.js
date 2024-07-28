import { showHome } from './home';
import { showWeather } from './weather-content';
import { extractData } from './extract-data';

async function display() {
    const homeBtn = document.querySelector('.home');
    let flag = false;

    showHome();
    const btn = document.querySelector('.search-btn');
    btn.addEventListener(
        'click',
        async (event) => {
            event.preventDefault();
            const cityName = document.querySelector('#city-name').value;
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
            const navSearchBtn = document.querySelector('.nav-search-btn');
            navSearchBtn.addEventListener('click', async function cb() {
                const cityName = document.querySelector('#nav-city-name').value;
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
                setTimeout(() => {
                    // do nothing
                }, 1000);
            });
        },
        { once: true },
    );

    homeBtn.addEventListener('click', () => {
        showHome();
        const searchBtn = document.querySelector('.search-btn');
        searchBtn.addEventListener(
            'click',
            async (event) => {
                event.preventDefault();
                const cityName = document.querySelector('#city-name').value;
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

                const nvSearchBtn = document.querySelector('.nav-search-btn');
                nvSearchBtn.addEventListener('click', async function cb2() {
                    const cityName =
                        document.querySelector('#nav-city-name').value;
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
                    setTimeout(() => {
                        // do nothing
                    }, 1000);
                });
                setTimeout(() => {
                    // do nothing
                }, 2000);
            },
            { once: true },
        );
    });
}

export { display };
