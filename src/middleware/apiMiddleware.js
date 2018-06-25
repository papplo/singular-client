export const API = Symbol('API');

export default serverUrl => store => next => action => {
  if (action[API]) {
    const options = {
      // headers: {
      //   'Content-Type': 'Application/JSON',
      //   'Authorization': action.authorization || '',
      // },
      method: action[API].method || 'GET',
      // mode: 'no-cors',
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


    // const fetchAsync = async () => {
    //   let response = await fetch(action[API].endpoint, options);
    //   let data = response.json();
    //   return data;
    // }

    fetch(action[API].endpoint, options)
      .then(data => data.json())
      .then(data => {
        console.log('success', data);
        let newAction = {...action, data}
        newAction.type = action.type + '_SUCCESS';
        //else newAction.type = action.type + '_FAILURE';
        delete newAction[API];
        store.dispatch(newAction);
      })
      .catch(e => console.log('error', e))


  }
  next(action);

}
