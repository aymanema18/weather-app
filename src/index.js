import { display } from './display';
import './style.css';
import logo from './images/weather-app-logo.svg';

window.addEventListener('DOMContentLoaded', async () => {
    const img = document.querySelector('.logo');
    img.src = logo;
    await display();
});
