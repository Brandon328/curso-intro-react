import React from 'react';

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener({ synchronize }) {
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
    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  }
}

export { withStorageListener };