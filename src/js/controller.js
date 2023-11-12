import * as model from './model.js';
import navigationView from './navigationView.js';

//Render the navigation
const init = async function () {
  await model.getData();

  navigationView.render(model.state.planets);
};

init();
