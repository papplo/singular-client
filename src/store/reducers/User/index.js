const profile = (state = {status: 'unloaded'}, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE':
        return {status: 'loading'};
    case 'FETCH_PROFILE_FAILURE':
        return {status: 'failure'};
    case 'FETCH_PROFILE_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

const updateProfile = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'UPDATE_PROFILE':
          return {status: 'loading'};
      case 'UPDATE_PROFILE_FAILURE':
          return {status: 'failure'};
      case 'UPDATE_PROFILE_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

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

// const asyncDataReducer = (actionName) => (state = {status: 'unloaded'}, action) => {
//     switch (action.type) {
//         case 'FETCH' + actionName:
//             return {status: 'loading'};
//         case 'FETCH' + actionName + '_FAILURE':
//             return {status: 'failure'};
//         case 'FETCH' + actionName + '_SUCCESS':
//             return action.responseObject;
//         default:
//           return state;
//       }
// }

export {
    profile,//: asyncDataReducer('PROFILE'),
    updateProfile,
    user,
}
