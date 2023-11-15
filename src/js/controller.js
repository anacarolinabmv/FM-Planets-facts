import * as model from './model.js';

import navigationView from './views/navigationView.js';
import planetView from './views/planetView.js';

//Render the navigation

const controlNavButtons = function (query = 'Mercury') {
  model.state.query = query;
  planetView.render(model.state);
};

const controlViewButtons = function (view) {
  planetView.render(model.state, view);
};

const init = async function () {
  //1) Get data
  await model.getData();

  //2) Render the navigation
  navigationView.render(model.state.planets);

  //3) Render Mercury view
  planetView.render(model.state);

  //3) Add the handlers to the views
  navigationView.addHandler(controlNavButtons);
  planetView.addHandler(controlViewButtons);
};

init();
