const initialState = {
  isLabelsTextVisible: false,
  currPopover: {
    elPos: null,
    name: "",
    PopoverProps: null,
  },
};

export function appReducer(state = initialState, action) {
  var newState = state;

  switch (action.type) {
    case "TOGGLE_LABELS":
      newState = { ...state, isLabelsTextVisible: !state.isLabelsTextVisible };
      break;
    case "SET_POPOVER":
      newState = {
        ...state,
        currPopover: {
          name: action.popoverName,
          elPos: action.elPos,
          popoverProps: action.popoverProps,
        },
      };
      break;
    case "CLOSE_POPOVER":
      newState = {
        ...state,
        currPopover: {
          name: "",
          elPos: null,
          popoverProps: null,
        },
      };
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
