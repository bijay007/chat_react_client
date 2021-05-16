const initialState = {
  currentChat: undefined
}
const chatToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_CURRENT':
      return { currentChat: undefined }
    case 'OPEN_NEW':
      return { currentChat: action.currentChat }
    default:
      return state;
  }
}

export default chatToggleReducer;
