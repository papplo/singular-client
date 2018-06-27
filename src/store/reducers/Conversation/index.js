const conversations = (state = {status: 'unloaded'}, action) => {
  switch (action.type) {
    case 'FETCH_CONVERSATION':
        return {status: 'loading'};
    case 'FETCH_CONVERSATION_FAILURE':
        return {status: 'failure'};
    case 'FETCH_CONVERSATION_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

const createConversation = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'CREATE_CONVERSATION':
          return {status: 'loading'};
      case 'CREATE_CONVERSATION_FAILURE':
          return {status: 'failure'};
      case 'CREATE_CONVERSATION_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

const acceptConversation = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'ACCEPT_CONVERSATION':
          return {status: 'loading'};
      case 'ACCEPT_CONVERSATION_FAILURE':
          return {status: 'failure'};
      case 'ACCEPT_CONVERSATION_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

const rejectConversation = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'REJECT_CONVERSATION':
          return {status: 'loading'};
      case 'REJECT_CONVERSATION_FAILURE':
          return {status: 'failure'};
      case 'REJECT_CONVERSATION_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

const createReview = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'CREATE_REVIEW':
          return {status: 'loading'};
      case 'CREATE_REVIEW_FAILURE':
          return {status: 'failure'};
      case 'CREATE_REVIEW_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

const createMessage = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'CREATE_MESSAGE':
          return {status: 'loading'};
      case 'CREATE_MESSAGE_FAILURE':
          return {status: 'failure'};
      case 'CREATE_MESSAGE_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

export {
    conversations,
    createConversation,
    acceptConversation,
    rejectConversation,
    createReview,
    createMessage,
}