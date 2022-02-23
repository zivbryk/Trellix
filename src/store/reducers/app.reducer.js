const initialState = {
  isLabelsTextVisible: false,
};

export function appReducer(state = initialState, action) {
  var newState = state;

  switch (action.type) {
    case "TOGGLE_LABELS":
      newState = { ...state, isLabelsTextVisible: !state.isLabelsTextVisible };
      break;

      break;
    default:
  }
  // For debug:
  window.appState = newState;
  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
  return newState;
}
