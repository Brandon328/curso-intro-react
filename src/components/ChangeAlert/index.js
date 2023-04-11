import React from 'react';
import './ChangeAlert.css';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
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
    )
  else
    return null
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }