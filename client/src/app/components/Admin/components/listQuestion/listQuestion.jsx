import React from 'react';
import "./listQuestion.style.scss"
const ListQuestion = () => {
    return (
        <div className="listQuestion container-fluid">
            <h3 className="listQuestion-heading">Liste des Question</h3>

            <table className="table  table-striped ">
                <thead>
                    <tr>
                        <th >Question</th>
                        <th >Langage</th>
                        <th >Dificulté</th>
                        <th >Date de création</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Question ICI ?</td>
                        <td >React</td>
                        <td >Junior</td>
                        <td >12/12/2012</td>
                        <td>
                            <div>Sup</div>
                            <div>Edite</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListQuestion;