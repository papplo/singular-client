const skills = (state = {status: 'unloaded'}, action) => {
  switch (action.type) {
    case 'FETCH_SKILLS':
        return {status: 'loading'};
    case 'FETCH_SKILLS_FAILURE':
        return {status: 'failure'};
    case 'FETCH_SKILLS_SUCCESS':
        return action.responseObject;
    default:
      return state;
  }
}

const createSkill = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'CREATE_SKILL':
          return {status: 'loading'};
      case 'CREATE_SKILL_FAILURE':
          return {status: 'failure'};
      case 'CREATE_SKILL_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

const idSkill = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'ID_SKILL':
          return {status: 'loading'};
      case 'ID_SKILL_FAILURE':
          return {status: 'failure'};
      case 'ID_SKILL_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

const genreSkills = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'FETCH_SKILLS_CATEGORY':
          return {status: 'loading'};
      case 'FETCH_SKILLS_CATEGORY_FAILURE':
          return {status: 'failure'};
      case 'FETCH_SKILLS_CATEGORY_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

const deleteSkill = (state = {status: 'unloaded'}, action) => {
    switch (action.type) {
      case 'DELETE_SKILL':
          return {status: 'loading'};
      case 'DELETE_SKILL_FAILURE':
          return {status: 'failure'};
      case 'DELETE_SKILL_SUCCESS':
          return action.responseObject;
      default:
        return state;
    }
}

export {
    skills,
    createSkill,
    idSkill,
    deleteSkill,
    genreSkills,
}