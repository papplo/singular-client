const chatToggle = (state = {render: false, conversationID: 0}, action) => {
  switch (action.type) {
    case 'CHAT_TOGGLE':
        return {render: action.render, conversationID: action.conversationID};
    default:
      return state;
  }
}

export default chatToggle;