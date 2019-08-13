export const ALERTS_FETCH = 'ALERTS_FETCH';
export const ALERTS_SELECT = 'ALERTS_SELECT';

const INITIAL_STATE = {
  list: [],
  selected: null,
};

const alerts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERTS_FETCH:
      return {
        ...state,
        list: action.payload.list,
      };
    case ALERTS_SELECT:
      return {
        ...state,
        selected: action.payload.selected,
      };
    default:
      return state;
  }
};

export default alerts;
