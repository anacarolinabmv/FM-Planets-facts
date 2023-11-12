export const state = {
  planets: {},
};

export const getData = async function () {
  const response = await fetch('../../assets/data/data.json');
  const data = await response.json();

  state.planets = data;
};
