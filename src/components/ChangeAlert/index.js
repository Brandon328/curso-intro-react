import React from 'react';
import './ChangeAlert.css';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize);
  if (show)
    return (
      <div className='change-alert-container'>
        <div className='change-alert-container__alert'>
          <span>There were some changes</span>
          <button
            type="button"
            onClick={() => toggleShow()}
          >
            Reload
          </button>
        </div>
      </div>
    );
  else
    return null;
}

export { ChangeAlert };