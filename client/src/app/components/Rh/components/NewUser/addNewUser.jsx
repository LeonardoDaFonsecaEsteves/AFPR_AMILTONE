import React, { useState } from 'react';
import "./add.styles.scss"
import addLogo from "../../../../../img/add.svg"

const AddNewUser = ({ ADD_NEW_USER }) => {
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        langage: "",
        niveau: "",
    })

    const handleChange = (type, value) => {
        switch (type) {
            case "firstname":
                setState({ ...state, firstname: value })
                break
            case "lastname":
                setState({ ...state, lastname: value })
                break
            case "email":
                setState({ ...state, email: value })
                break
            case "langage":
                setState({ ...state, langage: value })
                break
            case "niveau":
                setState({ ...state, niveau: value })
                break
            default:
                break;
        }
    }

    const handleSubmit = () => {
        ADD_NEW_USER(state)
        setState({
            firstname: "",
            lastname: "",
            email: "",
            langage: "Langage",
            niveau: "Niveau",
        })
    }

    return (
        <div className="register-add">
            <h3 className="register-heading-add">Ajouter un nouveau candidat</h3>
            <div className="register-form-add">
                <div className="col-md-15">
                    <div className="form-group">
                        <input type="text" placeholder="Nom *" value={state.lastname} onChange={(e) => handleChange("lastname", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Prenom *" value={state.firstname} onChange={(e) => handleChange("firstname", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email *" value={state.email} onChange={(e) => handleChange("email", e.target.value)} />
                    </div>
                    <div className="form-group">
                        <select value={state.langage} onChange={(e) => handleChange("langage", e.target.value)}  >
                            <option >Langage</option>
                            <option>React</option>
                            <option>HTML</option>
                            <option>CSS</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select value={state.niveau} onChange={(e) => handleChange("niveau", e.target.value)}  >
                            <option >Niveau</option>
                            <option>Junior</option>
                            <option>Intermediaire</option>
                            <option>Senior</option>
                        </select>
                    </div>
                    <div className="btn" onClick={() => handleSubmit()} >
                        <span><img alt="add" src={addLogo} /></span>
                        <span>Ajouter le candidat</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewUser;