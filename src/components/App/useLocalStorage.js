import React from 'react';

// Custom hook. Debemos usar la palabra 'use' al inicio del custom hook
function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState(initialValue));
  const {
    item,
    loading,
    error,
    synchronizedItem
  } = state;

  const onSuccess = (parsedItem) => dispatch({
    type: actionTypes.success, payload: parsedItem
  });
  const onError = (error) => dispatch({
    type: actionTypes.error, payload: error
  })
  const onSave = (newItem) => dispatch({
    type: actionTypes.save, payload: newItem
  })
  const onSynchronize = () => dispatch({
    type: actionTypes.synchronize
  })

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        }
        else {
          parsedItem = initialValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        }
        onSuccess(parsedItem);
      }
      catch (error) {
        onError(error);
      }
    }, 1000)
  }, [synchronizedItem]);

  function saveItem(newItem) {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    }
    catch (err) {
      onError(err);
    }
  }

  const synchronizeItem = () => {
    onSynchronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  };
}

const initialState = (initialValue) => ({
  item: initialValue,
  loading: true,
  error: false,
  synchronizedItem: false,
})

const actionTypes = {
  success: 'SUCCESS',
  error: 'ERROR',
  save: 'SAVE',
  synchronize: 'SYNCHRONIZE'
}
const reducerObject = (state, payload) => ({
  [actionTypes.success]: {
    ...state,
    item: payload,
    loading: false,
    synchronizedItem: true
  },
  [actionTypes.error]: {
    ...state,
    error: payload
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.synchronize]: {
    ...state,
    loading: true,
    synchronizedItem: false
  }
})
const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}
export { useLocalStorage };