class PlanetView {
  #parentElement = document.querySelector('.planet');
  #data;
  #planetObj;
  #planetName;

  addHandler() {}
  render(data, view = 'overview') {
    this.#data = data;
    this.#planetObj = data.planets.find((entry) => entry.name === data.query);
    this.#planetName = this.#planetObj.name.toLowerCase();
    let markup;

    console.log(data);

    if (view === 'overview') markup = this.#generateMarkupOverview();

    if (view === 'structure') markup = this.#generateMarkupStructures();

    if (view === 'geology') markup = this.#generateMarkupGeology();

    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  #clear() {
    this.#parentElement.innerHTML = '';
  }

  #generateMarkupOverview() {
    return ` <div class="planet__picture-box">
        <img src="assets/images/planet-${this.#planetName}.svg" class="planet__picture" alt="Picure ${
      this.#planetName
    } " />
      </div>
      <div class="planet__text">
        <h1 class="h1">${this.#planetObj.name}</h1>
        <p class="paragraph">${this.#planetObj.overview.content}</p>
        <small class="planet__source paragraph"
          >Source: <span><a href="${
            this.#planetObj.overview.source
          }" class="planet__source-link paragraph" target="_blank">Link <img src="assets/images/icon-source.svg" /></a></span>
         </small>
        <button class="btn btn--${this.#planetName} active h3"><span class="btn-number">01</span>Overview</button>
        <button class="btn btn--${this.#planetName} h3"><span class="btn-number">02</span>Internal Structure</button>
        <button class="btn btn--${this.#planetName} h3"><span class="btn-number">03</span>Surface Geology</button>
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

  #generateMarkupStructures() {
    return ` <div class="planet__picture-box">
        <img src="assets/images/planet-${this.#planetName}-internal.svg" class="planet__picture" alt="Picure ${
      this.#planetName
    } " />
      </div>
      <div class="planet__text">
        <h1 class="h1">${this.#planetObj.name}</h1>
        <p class="paragraph">${this.#planetObj.structure.content}</p>
        <small class="planet__source paragraph"
          >Source: <span><a href="${
            this.#planetObj.overview.source
          }" class="planet__source-link paragraph" target="_blank">Link <img src="assets/images/icon-source.svg" /></a></span>
         </small>
        <button class="btn btn--${this.#planetName}  h3"><span class="btn-number">01</span>Overview</button>
        <button class="btn btn--${
          this.#planetName
        } active h3"><span class="btn-number">02</span>Internal Structure</button>
        <button class="btn btn--${this.#planetName} h3"><span class="btn-number">03</span>Surface Geology</button>
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
  #generateMarkupGeology() {
    return ` <div class="planet__picture-box">
        <img src="assets/images/planet-${this.#planetName}.svg" class="planet__picture" alt="Picure ${
      this.#planetName
    } " />
    <img src="assets/images/geology-${this.#planetName}.png" />
      </div>
      <div class="planet__text">
        <h1 class="h1">${this.#planetObj.name}</h1>
        <p class="paragraph">${this.#planetObj.overview.content}</p>
        <small class="planet__source paragraph"
          >Source: <span><a href="${
            this.#planetObj.overview.source
          }" class="planet__source-link paragraph" target="_blank">Link <img src="assets/images/icon-source.svg" /></a></span>
         </small>
        <button class="btn btn--${this.#planetName} h3"><span class="btn-number">01</span>Overview</button>
        <button class="btn btn--${this.#planetName} h3"><span class="btn-number">02</span>Internal Structure</button>
        <button class="btn btn--${
          this.#planetName
        } active h3"><span class="btn-number">03</span>Surface Geology</button>
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
