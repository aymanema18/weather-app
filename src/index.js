import { extractData } from './extract-data';
import { display } from './display';
import { showWeather } from './weather-content';
import './style.css';
import logo from './images/weather-app-logo.svg';

window.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.logo');
    img.src = logo;
    // display();
});
