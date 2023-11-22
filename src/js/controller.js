import * as model from './model.js';

import navigationView from './views/navigationView.js';
import planetView from './views/planetView.js';

const controlNavLinks = function (query) {
  model.state.query = query;
  planetView.render(model.state);
};

const controlViewButtons = function (view) {
  planetView.render(model.state, view);
};

const bleh = function () {
  console.log('bleh');
};

const init = async function () {
  //1) Get data
  await model.getData();

  //2) Render navigation buttons
  navigationView.render(model.state.planets);

  //3) Add handler to the nav button
  navigationView.addHandlerNavBtn(bleh);

  //3) Render app load view (Mercury)
  planetView.render(model.state);

  //3) Add the handlers to the views
  navigationView.addHandlerNavLinks(controlNavLinks);
  planetView.addHandler(controlViewButtons);
};

init();
