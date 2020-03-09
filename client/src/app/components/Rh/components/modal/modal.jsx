
import React from 'react';
import Modal from "react-modal"
import "./modal.style.scss"
import BodyModal from './body.modal';
import HeaderModal from './header.modal';
import FooterModal from './footer.modal';

const myModal = ({ SET_MODAL_VISIBLE, state }) => {
    return (
        <Modal
            className="inModal"
            isOpen={state.modalVisibel}
            onRequestClose={SET_MODAL_VISIBLE}>
            <div className="inModal">
                <HeaderModal test={state.detailInModal} user={state.userDetails} />
                <BodyModal responce={state.detailInModal.reponse_user} questions={state.detailInModal.questions} />
                <FooterModal close={() => SET_MODAL_VISIBLE()} />
            </div>
        </Modal>
    )
}

export default myModal;



