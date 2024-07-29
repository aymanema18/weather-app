async function getWeather(name) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?key=JXU97QH5WVG99HN5XRWK8HGJ6`,
            { mode: 'cors' },
        );
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        // do nothing
    }
}

export { getWeather };
