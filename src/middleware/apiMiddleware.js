export const API = Symbol('API');

export default serverUrl => store => next => action => {
  if (action[API]) {
    const options = {
      headers: action[API].headers,
      method: action[API].method || 'GET',
      body: JSON.stringify(action[API].body)
    }
    console.log(action);
    fetch(action[API].externalUrl || serverUrl+action[API].endpoint, options)
    .then(response => response.json().then(data => ({status: response.status, body: data})))
    .then(responseObject => {
        console.log('inside fetch: ', responseObject);
        let newAction = {...action, responseObject}
        newAction.type = responseObject.status >= 400 ? action.type + '_FAILURE' : action.type + '_SUCCESS'; 
        delete newAction[API];
        store.dispatch(newAction);
        
    })
    .catch(e => console.log('error', e))
  }
  next(action);

}
