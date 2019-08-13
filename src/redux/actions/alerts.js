import { ALERTS_FETCH, ALERTS_SELECT } from '../reducer/alerts';

export const fetchAlertConfigurations = (page) => {
  return async (dispatch) => {
    // fetch paginated data...
    const list = [{ email: 'a@a.com', query: 'soap', frequency: 30 },
      { email: 'b@a.com', query: 'raspberry pi', frequency: 10 },
      { email: 'c@a.com', query: 'ps4', frequency: 2 }];
    dispatch({
      type: ALERTS_FETCH,
      payload: { list },
    });
  };
};

export const selectAlertItem = (index) => {
  return (dispatch) =>
    dispatch({
      type: ALERTS_SELECT,
      payload: { selected: index },
    });
};
