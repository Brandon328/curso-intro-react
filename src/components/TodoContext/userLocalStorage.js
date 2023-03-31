import React from 'react';

// Custom hook. Debemos usar la palabra 'use' al inicio del custom hook
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // React ejecuta el useEffect luego del render de React, pero antes del render en el navegador.
  // En cambio, React ejecuta el useLayoutEffect luego del render de React y del render en el navegador.
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        setItem(() => {
          const localStorageItem = localStorage.getItem(itemName);
          if (localStorageItem) {
            parsedItem = JSON.parse(localStorageItem);
          }
          else {
            parsedItem = initialValue;
            localStorage.setItem(itemName, JSON.stringify(parsedItem));
          }
          // setItem(parsedItem);
        }, 1500);
        setItem(parsedItem);
      }
      catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    }, 1500)
  }, []);

  function saveItem(newItem) {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }
    catch (err) {
      setError(err);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };