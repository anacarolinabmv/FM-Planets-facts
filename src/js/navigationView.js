class NavigationView {
  #parentElement = document.querySelector('.navigation__planets-list');
  #data;

  render(data) {
    this.#data = data;
    const markup = this.generateMarkup();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  generateMarkup() {
    return this.#data.reduce((markup, cur) => {
      markup += `<li class="navigation__list-item">
          <a href="#" class="navigation__link h4 navigation__link--${cur.name.toLowerCase()}">${cur.name}</a>
          </li>`;

      return markup;
    }, '');
  }
}

export default new NavigationView();
