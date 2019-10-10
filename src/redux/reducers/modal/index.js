const initialState = {
  status: false
};

export default function modalState(state = initialState, action) {
  if (action.type === 'SET_MODAL') {
    return {...state, status: !state.status};
  } else {
    return state
  }
}