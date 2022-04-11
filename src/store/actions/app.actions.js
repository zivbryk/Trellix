export function toggleListCardLabels() {
  return (dispatch) => {
    dispatch({ type: "TOGGLE_LABELS" });
  };
}

export function openPopover(popoverName, elPos, popoverProps) {
  return (dispatch) => {
    const action = {
      type: "SET_POPOVER",
      popoverName,
      elPos,
      popoverProps,
    };
    dispatch(action);
  };
}

export function closePopover() {
  return (dispatch) => {
    const action = {
      type: "CLOSE_POPOVER",
    };
    dispatch(action);
  };
}
