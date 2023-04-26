const UPDATE_ID = 'UPDATE_ID';

const defaultState = {
  id: null,
}

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_ID:
      return { ...state, id: action.payload };

    default:
      return state;
  }
}

export const updateIdAction = payload => ({ type: UPDATE_ID, payload });