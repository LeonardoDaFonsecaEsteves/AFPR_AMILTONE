import React from 'react';
import "./listTest.style.scss"

const ListTest = () => {

    return (
        <div className="listTest container-fluid">
            <h3 className="listTest-heading">Liste des tests</h3>

            <table className="table  table-striped ">
                <thead>
                    <tr>
                        <th >Langage</th>
                        <th >Dificulté</th>
                        <th >Date de création</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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

export default ListTest;