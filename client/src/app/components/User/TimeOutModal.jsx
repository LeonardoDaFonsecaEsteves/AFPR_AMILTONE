import React from 'react';

import './TimeOutModal.scss'

const TimeOutModal = ({ visible, TimedOutNav }) => {


  return (

    <div className={visible ? 'TimeOutModal ' : 'cache'}>
      <div className="ModalContent">
        <p>Le temps pour cette question s'est écoulé.</p>
        <div className="btnModal" onClick={() => TimedOutNav()}>
          <span > continuer</span>
        </div>
      </div>

    </div>

  )
}

export default TimeOutModal;