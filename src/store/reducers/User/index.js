const user = (state = {status: 'unloaded'}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
        return {status: 'loading'};
    case 'FETCH_USER_FAILURE':
        return {status: 'failure'};
    case 'FETCH_USER_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

export default user;
