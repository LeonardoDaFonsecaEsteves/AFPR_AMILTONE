import React, { useState } from 'react';
import "./CreeQuestion.style.scss"
import Libre from './libre/libre';
import Qcm from './qcm/qcm';

const CreeQuestion = () => {
    const [state, setState] = useState({
        typeQuestion: "",
        niveau: "",
        langage: "",
        question: "",
        choix: "",
        posibilite: "",
    })

    const handleChange = (type, value) => {
        console.log("Swithc ", type, value)
        switch (type) {
            case "type":
                setState({ ...state, typeQuestion: value })
                break;
            case "niveau":
                setState({ ...state, niveau: value })
                break;
            case "langage":
                setState({ ...state, langage: value })
                break;
            case "question":
                setState({ ...state, question: value })
                break;
            case "choix":
                setState({ ...state, choix: value })
                break;
            case "posibilite":
                if (state.typeQuestion === "Libre") {
                    setState({ ...state, posibilite: value })
                } else if (state.typeQuestion === "Qcm") {
                    const temp = [...state.posibilite]
                    temp.push(value)
                    setState({ ...state, posibilite: temp })
                }
                break;
            default:
                break;
        }
    }

    console.log(state)

    return (
        <div className="CreeQuestion container-fluid">
            <h3 className="CreeQuestion-heading">Crée une question</h3>
            <div className="col-md-15">
                <div className="form-group">
                    <select onChange={(e) => handleChange("langage", e.target.value)} >
                        <option>Langage</option>
                        <option>React</option>
                        <option>HTML</option>
                        <option>CSS</option>
                    </select>
                </div>
                <div className="form-group">
                    <select onChange={(e) => handleChange("niveau", e.target.value)}>
                        <option >niveau</option>
                        <option>Junior</option>
                        <option>Intermediaire</option>
                        <option>Senior</option>
                    </select>
                </div>
                <div className="form-group">
                    <select onChange={(e) => handleChange("type", e.target.value)} >
                        <option>type de question</option>
                        <option>Libre</option>
                        <option>Qcm</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Question à pose ?" onChange={(e) => handleChange("question", e.target.value)} />
                </div>
                {state.typeQuestion === "Libre" && <Libre value={state.posibilite} handleChange={(type, value) => handleChange(type, value)} />}
                {state.typeQuestion === "Qcm" &&
                    (
                        <>
                            <div className="form-group">
                                <select onChange={(e) => handleChange("choix", e.target.value)} >
                                    <option>type</option>
                                    <option>choix simple</option>
                                    <option>choix multiple</option>
                                </select>
                            </div>
                            <Qcm value={state.posibilite} handleChange={(type, value) => handleChange(type, value)} />
                        </>
                    )

                }
                <div className="btn">
                    <span>Ajouter la question</span>
                </div>
            </div>

        </div>
    )
}

export default CreeQuestion;