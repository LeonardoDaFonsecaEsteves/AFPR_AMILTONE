import React, { useReducer } from 'react';
import "./admin.style.scss"
import logo from '../../../img/Logo.svg'
import ListQuestion from './components/listQuestion/listQuestion';
import ListTest from './components/listTest/listTest';
import CreeQuestion from './components/creeQuestion/creeQuestion';
import CreeTest from './components/creeTest/creeTest';
import { initialState, admin } from "../../../reducers/admin.reducer/reducer"

const Admin = ({ logOut }) => {
    const [state, dispatch] = useReducer(admin, initialState)

    const CHANGE_DASH = (view) => {
        dispatch({ type: "CHANGE_DASH", payload: view })
    }


    return (
        <div className="container-fluid Admin">
            <div className="row">
                <div className="navigation">
                    <img src={logo} alt='' />
                    <img alt="" />
                    <div className="btn" onClick={() => CHANGE_DASH("listTest")}>
                        <span>Liste des tests</span>
                    </div>
                    <div className="btn" onClick={() => CHANGE_DASH("creeTest")}>
                        <span>Crée un test</span>
                    </div>
                    <div className="btn" onClick={() => CHANGE_DASH("listQuestion")}>
                        <span>Liste des questions</span>
                    </div>
                    <div className="btn" onClick={() => CHANGE_DASH("creeQuestion")}>
                        <span>Crée une question</span>
                    </div>
                    <div className="btn logout" onClick={() => logOut("logout")}>
                        <span>Déconnexion</span>
                    </div>
                </div>
                <div className="View">
                    {state.dashbord === "listTest" && <ListTest />}
                    {state.dashbord === "creeTest" && <CreeTest />}
                    {state.dashbord === "listQuestion" && <ListQuestion />}
                    {state.dashbord === "creeQuestion" && <CreeQuestion />}
                </div>
            </div>
        </div>
    )
}

export default Admin;