class NavigationView {
  navBtn = document.querySelector('.navigation__btn');
  #parentElement = document.querySelector('.navigation__planets-list');
  #data;

  addHandlerNavLinks(handler) {
    this.#parentElement.addEventListener('click', function (e) {
      if (!e.target.classList.contains('navigation__link')) return;
      const query = e.target.textContent;

      handler(query);
    });
  }

  addHandlerNavBtn() {
    this.navBtn.addEventListener('click', function () {
      const navigationBar = this.closest('.navigation').querySelector('.navigation__planets-list');

      navigationBar.classList.toggle('show');
    });
  }

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  #generateMarkup() {
    return this.#data.reduce((markup, cur) => {
      markup += `<li class="navigation__list-item">
                <a href="#" class="navigation__link h4 navigation__link--${cur.name.toLowerCase()}">${cur.name}</a>
          <span class="icon--arrow"><i class="fa-solid fa-chevron-right"></i></span>
          </li>`;

      return markup;
    }, '');
  }
}

export default new NavigationView();
