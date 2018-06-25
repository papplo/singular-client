export const API = Symbol('API');

export default serverUrl => store => next => action => {
  if (action[API]) {
    const options = {
      headers: {
        'Content-Type': 'Application/JSON',
        'Authorization': action.authorization || '',
      },
      method: action[API].method || 'GET',
    }
    
    switch (options.method) {
      case 'POST':
          options.body = JSON.stringify(action[API].requestBody)
        break;
      case 'PUT':
        options.body = JSON.stringify(action[API].requestBody)
      break;
      default:
        break;
    }

    fetch(serverUrl+action[API].endpoint, options)
    .then(response => response.json())
    .then(data => {
      const newAction = ({
        ...action,
        data
      })
      if (data.message.success) newAction.type = action.type + '_SUCCESS';
      else newAction.type = action.type + '_FAILURE';
      delete newAction[API];
      store.dispatch(newAction);
    })

  }
  next(action);

}