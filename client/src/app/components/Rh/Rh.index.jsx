import React, { useReducer, useEffect } from 'react';
import "./styles//rh.styles.scss"
import { initialState, rh } from "../../../reducers/rh.reducer/reducer"
import AddNewUser from './components/NewUser/addNewUser';
import ListUser from './components/ListUser/listUser';
import HistoriqueUser from './components/historiqueUser/historiqueUser';
import Modal from './components/modal/modal';
import listLogo from '../../../img/list.svg'
import listAdd from '../../../img/add.svg'
import logo from '../../../img/Logo.svg'
const Rh = ({ logOut }) => {
    const [state, dispatch] = useReducer(rh, initialState)

    useEffect(() => {
        dispatch({ type: "GET_ALL_USER" })
    }, [])

    const GET_ID_USER = (userId) => {
        dispatch({ type: "GET_DETAILS_USER", payload: userId })
    }

    const CHANGE_DASH = (view) => {
        dispatch({ type: "CHANGE_DASH", payload: view })
    }

    const SET_MODAL_VISIBLE = (userTestId) => {
        if (userTestId !== "") {
            dispatch({ type: "DETAILS_IN_MODAL", payload: userTestId })
        }
        dispatch({ type: "SET_MODAL_VISIBLE", payload: !state.modalVisibel })
    }

    const ADD_NEW_USER = (data) => {
        dispatch({ type: "ADD_NEW_USER", payload: data })
    }

    return (
        <div className="container-fluid Rh">
            <div className="row">
                <div className="navigation">
                    <img src={logo} alt="" />
                    <div className="btn" onClick={() => CHANGE_DASH("list")} >
                        <span><img width="40px" alt="list" src={listLogo} /></span>
                        <span>Liste des candidats</span>
                    </div>
                    <div className="btn" onClick={() => CHANGE_DASH("add")} >
                        <span><img alt="add" src={listAdd} /></span>
                        <span>Ajouter un candidat</span>
                    </div>
                </div>
                {/* view list or view add */}
                {
                    state.dashbord === "list" &&
                    <ListUser
                        state={state}
                        CHANGE_DASH={(view) => CHANGE_DASH(view)}
                        GET_ID_USER={(userId) => GET_ID_USER(userId)}
                        logOut={(role) => logOut(role)}
                    />
                }
                {
                    state.dashbord === "add" &&
                    <AddNewUser
                        ADD_NEW_USER={(data) => ADD_NEW_USER(data)}
                        logOut={(role) => logOut(role)}
                    />
                }
                {
                    state.dashbord === "histo" &&
                    <HistoriqueUser
                        state={state}
                        CHANGE_DASH={(view) => CHANGE_DASH(view)}
                        SET_MODAL_VISIBLE={(usertestId) => SET_MODAL_VISIBLE(usertestId)}
                        logOut={(role) => logOut(role)}
                    />
                }

                <Modal state={state} SET_MODAL_VISIBLE={() => SET_MODAL_VISIBLE()} />
            </div >
        </div>
    )
}

export default Rh;