import React from 'react';


const HeaderModal = ({ test, user }) => {
    return (
        <div className="header">
            <div className="title">
                <h1>Details du test</h1>
            </div>
            <div className="DetailsInfo">
                <span>Date : {test.date}</span>
                <span>Langage : {test.langage}</span>
                <span>Niveau :{test.niveau}</span>
                <span>Score : score</span>
                <span>Nom : {user.lastname}</span>
                <span>Prenom : {user.firstname}</span>
            </div>
        </div>
    )
}

export default HeaderModal;