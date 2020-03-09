import React from 'react';

import './libre.style.scss'

const Libre = ({ value, handleChange }) => {

    return (
        <div className="form-group">
            <input type="text" placeholder="response" value={value} onChange={(e) => handleChange("posibilite", e.target.value)} />
        </div>
    )
}

export default Libre;