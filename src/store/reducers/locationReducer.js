const location = (state = {status: 'unloaded', body: { city: ''}}, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION':
        return {status: 'loading'};
    case 'FETCH_LOCATION_FAILURE':
        return {status: 'failure'};
    case 'FETCH_LOCATION_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

export default location;
