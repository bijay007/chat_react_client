const initialTabState = {
  tabOpen: false
}
const tabToggleReducer = (state = initialTabState, action) => {
    const newState = Object.assign({}, state, {
      tabOpen: action.tabOpen
    });
    return newState;
};

export default tabToggleReducer;