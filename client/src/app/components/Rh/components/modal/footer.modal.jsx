import React from 'react';


const FooterModal = ({ close }) => {


    return (
        <div className="Footer">
            <div className="btn closeModal" onClick={() => close()}>
                <span className="title">Fermer</span>
            </div>
            <div className="btn print">
                <span className="title">Imprimer</span>
            </div>
        </div>
    )
}

export default FooterModal;