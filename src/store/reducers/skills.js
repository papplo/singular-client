const skillsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SKILLS':
        return {status: 'loading'};
    case 'GET_SKILLS_FAILURE':
        return {status: 'failure'};
    case 'GET_SKILLS_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

export default skillsReducer;