import React, { useState } from 'react';


const Qcm = ({ value, handleChange }) => {
    const [Qcm, setQcm] = useState('');

    const handleSubmit = () => {
        handleChange("posibilite", Qcm)
        setQcm("")
    }

    return (
        <div className="Qcm">
            <ul> {value.length !== 0 ?
                value.map((value, i) => {
                    return (
                        <li>{value}</li>
                    )
                })
                : null
            }
            </ul>
            <input type="text" placeholder="posibilite" onChange={e => setQcm(e.target.value)} />
            <button onClick={() => handleSubmit()} >Ajoute posibilite</button>
        </div>
    )
}

export default Qcm;