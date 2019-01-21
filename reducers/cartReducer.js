export const cartTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE',
};

const initialCartState = {
  items: [],
};

export const cartActionCreators = {
  add: item => ({ type: cartTypes.ADD, payload: item }),
  delete: index => ({ type: cartTypes.DELETE, payload: index }),
};

const cartReducer = (state = initialCartState, action) => {
  const { items } = state;
  const { type, payload } = action;

  switch (type) {
    case cartTypes.ADD: {
      return {
        ...state,
        items: [payload, ...items],
      };
    }
    case cartTypes.DELETE: {
      return {
        ...state,
        items: items.filter(item => item.id !== payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
