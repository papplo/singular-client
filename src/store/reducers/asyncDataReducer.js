const asyncDataReducer = (actionName) => (state = {status: 'unloaded', body: {}}, action) => {
    switch (action.type) {
        case actionName:
            return {status: 'loading', body: state.body};
        case actionName + '_FAILURE':
            return {status: 'failure'};
        case actionName + '_SUCCESS':
            return action.responseObject;
        case actionName + '_CLEAR':
            return {status: 'unloaded', body: {}};
        case actionName + '_CLEAR_STATUS':
            return {status: 'unloaded', ...state};
      default:
        return state;
    }
}

export const profile = asyncDataReducer('FETCH_PROFILE');
export const updateProfile = asyncDataReducer('UPDATE_PROFILE');
export const user = asyncDataReducer('FETCH_USER');
export const skills = asyncDataReducer('FETCH_SKILLS');
export const createSkill = asyncDataReducer('CREATE_SKILL');
export const idSkill = asyncDataReducer('ID_SKILL');
export const genreSkills = asyncDataReducer('FETCH_SKILLS_CATEGORY');
export const deleteSkill = asyncDataReducer('DELETE_SKILL');
export const conversation = asyncDataReducer('FETCH_CONVERSATION');
export const createConversation = asyncDataReducer('CREATE_CONVERSATION');
export const acceptOrRejectConversation = asyncDataReducer('ACCEPT_OR_REJECT_CONVERSATION');
export const createReview = asyncDataReducer('CREATE_REVIEW');
export const createMessage = asyncDataReducer('CREATE_MESSAGE');
export const categories = asyncDataReducer('FETCH_CATEGORIES');

export default asyncDataReducer;