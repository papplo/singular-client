const userLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOCATION':
        return {status: 'loading'};
    case 'USER_LOCATION_FAILURE':
        return {status: 'failure'};
    case 'USER_LOCATION_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

export default userLocationReducer;
