const initialTabState = {
  tabOpen: false
}
const tabToggleReducer = (state = initialTabState, action) => {
  switch (action.type) {
    case 'OPEN_TAB': // fall-through
    case 'CLOSE_TAB': {
      const newState = Object.assign({}, state, {
        tabOpen: action.tabOpen
      });
      return newState;
    }
    default:
      return state;
  }
};

export default tabToggleReducer;