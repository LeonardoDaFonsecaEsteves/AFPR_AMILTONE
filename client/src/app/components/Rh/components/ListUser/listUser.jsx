import React from 'react';
import "./list.styles.scss"
import loupeLogo from "../../../../../img/loupe.svg"

const ListUser = ({ state, CHANGE_DASH, GET_ID_USER, logOut }) => {

    const getUserDetails = (userId) => {
        CHANGE_DASH("histo")
        GET_ID_USER(userId)
    }
    return (
        <div className="register-list">
            <div>
                <div className="list-header">
                    <h3 className="register-heading-list">Liste des candidats</h3>
                    <div className="search-list input-group col-md-4">
                        <img width="20px" src={loupeLogo} alt="Loupe" />
                        <input type="text" placeholder="Recherche" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="logout" onClick={() => logOut("logout")} >
                        <span>Déconnexion</span>
                    </div>
                </div>
                <table className="table table-fixed table-striped table-borderless">
                    <thead>
                        <tr>
                            <th >Nom</th>
                            <th >Prénom</th>
                            <th >E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.userList.map((user, i) => {
                            return (
                                <tr onClick={() => getUserDetails(user.id)} key={i}>
                                    <td ><p>{user.lastname}</p></td>
                                    <td ><p>{user.firstname}</p></td>
                                    <td ><p>{user.email}</p></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListUser;