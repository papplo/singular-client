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

// Use this code if the geolocation API is not responding
// 
// const location = (state = {status: 'unloaded', body: ''}, action) => {
//     switch (action.type) {
//       case 'FETCH_LOCATION':
//           return {status: 'loading'};
//       case 'FETCH_LOCATION_FAILURE':
//           return {status: 200, body: {city: 'Barcelona'}}
//       case 'FETCH_LOCATION_SUCCESS':
//           return {status: 200, body: {city: 'Barcelona'}};
//       default:
//         return state;
//     }
//   }

// export default location;
