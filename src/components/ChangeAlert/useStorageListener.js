import React from 'react';

function useStorageListener(synchronize) {
  const [storageChange, setStorageChange] = React.useState(false);
  window.addEventListener('storage', (event) => {
    if (event.key === 'TODOS_V1') {
      setStorageChange(true);
    }
  });
  const toggleShow = () => {
    synchronize();
    setStorageChange(false);
  }
  return {
    show: storageChange,
    toggleShow
  };
}

export { useStorageListener };