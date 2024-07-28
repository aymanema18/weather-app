async function getGif(name) {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=We3LdMUbhG3kmfinwyTEq6VthQjd0TpD&s=${name}`,
        { mode: 'cors' },
    );
    const data = await response.json();
    return data.data.images.original.url;
}

export { getGif };
