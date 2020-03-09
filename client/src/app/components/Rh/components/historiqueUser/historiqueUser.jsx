import React from 'react';
import "./historique.styles.scss"
const HistoriqueUser = ({ state, CHANGE_DASH, SET_MODAL_VISIBLE, logOut }) => {
    const user = state.userDetails
    const userTest = state.userDetailsTest
    return (
        <div className="details">
            <div className="dashbord">
                {/* info user */}
                <div className="header">
                    <div className="btn" onClick={() => CHANGE_DASH("list")}>
                        <span> {`<`} Retour </span>
                    </div>
                    <h1>Historique du candidat</h1>
                    <div className="logout" onClick={() => logOut("logout")} >
                        <span>Déconnexion</span>
                    </div>
                </div>
                <div className="userInfo">
                    <span className="Nom">{user.lastname}</span>
                    <span className="Prenom">{user.firstname}</span>
                    <span className="Email">{user.email}</span>
                </div>
                {/* ********** */}

                {/* Touts les tests */}
                <table className="table">
                    <thead>
                        <tr>
                            <th >Langage</th>
                            <th >Niveau</th>
                            <th >Score</th>
                            <th >Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userTest.map((test, i) => {
                            return (
                                <tr key={i} onClick={() => SET_MODAL_VISIBLE(test.id_test)}>
                                    <td>{test.langage}</td>
                                    <td>{test.niveau}</td>
                                    <td> 50%</td>
                                    <td >{test.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* ********** */}
            </div>
        </div>
    )
}

export default HistoriqueUser;