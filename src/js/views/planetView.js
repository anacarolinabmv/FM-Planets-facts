class PlanetView {
  #parentElement = document.querySelector('.planet');
  #data;
  #planetObj;
  #planetName;
  #view;

  addHandler(handler) {
    this.#parentElement.addEventListener('click', (e) => {
      const btnClicked = e.target.closest('.btn--view');
      if (!btnClicked) return;

      handler(btnClicked.dataset.view);
    });
  }

  render(data, view = 'overview') {
    this.#data = data;
    this.#view = view;
    this.#planetObj = this.#data.planets.find((entry) => entry.name === `${data.query ? data.query : 'Mercury'}`);
    this.#planetName = this.#planetObj.name.toLowerCase();

    const markup = this.#generateMarkup();

    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  #clear() {
    this.#parentElement.innerHTML = '';
  }

  #generateImgMarkup() {
    const imgPath1 = `<img src="assets/images/planet-${this.#planetName}.svg" class="planet__picture" alt="Picure ${
      this.#planetName
    } " />`;
    const imgPath2 = `
      <img src="assets/images/planet-${this.#planetName}-internal.svg" class="planet__picture" alt="Picure ${
      this.#planetName
    } " />`;

    if (this.#view === 'overview') return imgPath1;
    if (this.#view === 'structure') return imgPath2;
    if (this.#view === 'geology') {
      return imgPath1 + `<img class="planet__picture--geology" src="assets/images/geology-${this.#planetName}.png" />`;
    }
  }

  #generateMarkup() {
    return `<div class="planet__picture-box">
       ${this.#generateImgMarkup()}
      </div>
      <div class="planet__text">
        <h1 class="h1">${this.#planetObj.name}</h1>
        <p class="paragraph">${this.#planetObj[this.#view].content}</p>
        <small class="planet__source paragraph"
          >Source: <span><a href="${
            this.#planetObj[this.#view].source
          }" class="planet__source-link paragraph" target="_blank">Link <img src="assets/images/icon-source.svg" /></a></span>
         </small>
        <button class="btn btn--view btn--${this.#planetName} ${
      this.#view === 'overview' ? 'btn--active' : ''
    }  h3" data-view="overview"><span class="btn-number">01</span>Overview</button>
        <button class="btn btn--view btn--${this.#planetName} ${
      this.#view === 'structure' ? 'btn--active' : ''
    } h3" data-view="structure"><span class="btn-number">02</span>Internal Structure</button>
        <button class="btn btn--view btn--${this.#planetName} ${
      this.#view === 'geology' ? 'btn--active' : ''
    } h3" data-view="geology"><span class="btn-number">03</span>Surface Geology</button>
      </div>
      <div class="planet__info-boxes">
        <div class="planet__info-box">
          <h4 class="planet__info-box__heading h4">Rotation Time</h4>
          <h2 class="h2">${this.#planetObj.rotation}</h2>
        </div>
        <div class="planet__info-box">
          <h4 class="planet__info-box__heading h4">RevolutionTime</h4>
          <h2 class="h2">${this.#planetObj.revolution}</h2>
        </div>
        <div class="planet__info-box">
          <h4 class="planet__info-box__heading h4">Radius</h4>
          <h2 class="h2">${this.#planetObj.radius}</h2>
        </div>
        <div class="planet__info-box">
          <h4 class="planet__info-box__heading h4">Average Temp.</h4>
          <h2 class="h2">${this.#planetObj.temperature}</h2>
        </div>
      </div>`;
  }
}

export default new PlanetView();
