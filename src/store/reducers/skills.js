const skillsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SKILLS':
        return state;
    case 'GET_SKILLS_SUCCESS':
    return action.data;
    default:
    return state

  }
}

export {skillsReducer as default}
