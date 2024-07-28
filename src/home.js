function showHome() {
    const main = document.querySelector('main');
    const div = document.createElement('div');
    const form = document.createElement('form');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const btn = document.createElement('button');
    const navInput = document.querySelector('#nav-search-btn');
    const navBtn = document.querySelector('.nav-search-btn');
    main.classList = '';
    main.innerHTML = '';
    main.classList.add('home-main');
    div.classList.add('input-div');
    div.classList.add('inp-n-wt-div');
    label.setAttribute('for', 'city-name');
    input.setAttribute('id', 'city-name');
    btn.classList.add('search-btn');
    label.textContent = 'City:';
    btn.textContent = 'Search';
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(btn);
    div.appendChild(form);
    main.appendChild(div);

    if (navBtn && navInput) {
        navBtn.remove();
        navInput.remove();
    }
}

export { showHome };
