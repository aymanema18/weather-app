function showHome() {
    const main = document.querySelector('main');
    const div = document.createElement('div');
    const form = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const btn = document.createElement('button');
    const p = document.createElement('p');
    const navInput = document.querySelector('#nav-city-name');
    const navBtn = document.querySelector('.nav-search-btn');
    main.classList = '';
    main.innerHTML = '';
    p.classList.add('home-err-msg');
    main.classList.add('home-main');
    div.classList.add('input-div');
    div.classList.add('inp-n-wt-div');
    form.classList.add('form');
    label.setAttribute('for', 'city-name');
    input.setAttribute('id', 'city-name');
    btn.classList.add('search-btn');
    label.textContent = 'City:';
    btn.textContent = 'Search';
    btn.setAttribute('type', 'button');
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(p);
    form.appendChild(btn);
    div.appendChild(form);
    main.appendChild(div);

    if (navBtn && navInput) {
        navBtn.remove();
        navInput.remove();
    }

    input.addEventListener('keypress', () => {
        p.textContent = '';
    });
}

export { showHome };
