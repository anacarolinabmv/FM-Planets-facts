import * as model from './model.js';

import navigationView from './views/navigationView.js';
import planetView from './views/planetView.js';

//Render the navigation

const getPlanet = function (query = 'Mercury') {
  model.state.query = query;

  planetView.render(model.state, 'geology');
};

const controlButtons = function () {
  planetView.render(model.state);
};

const init = async function () {
  await model.getData();

  navigationView.render(model.state.planets);

  getPlanet();

  navigationView.addHandler(getPlanet);
  planetView.addHandler(controlButtons);
};

init();
