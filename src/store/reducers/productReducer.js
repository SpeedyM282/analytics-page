const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const defaultState = [];

export const productReducer = (state = defaultState, action) => {
  const data = action.payload;

  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, data];
    
    case DELETE_PRODUCT:
      return state.filter(e => e.id !== data);

    case UPDATE_PRODUCT:
      return state.map(e => e.id === data.id ? {...e, [data.key]: data.value} : e);

    default:
      return state;
  }
}

export const addProductAction = payload => ({ type: ADD_PRODUCT, payload });

export const deleteProductAction = payload => ({ type: DELETE_PRODUCT, payload });

export const updateProductAction = payload => ({ type: UPDATE_PRODUCT, payload });