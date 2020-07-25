import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTrack = (dispatch) => () => {};

const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTrack, createTrack },
  []
);
