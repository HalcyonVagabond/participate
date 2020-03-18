import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SuccessModal = () => {
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    return (
        <Modal isOpen={modal} >
            <ModalHeader>Successful Login!</ModalHeader>
            <ModalBody>Session storage is now holding the information you typed as an object. One day that will actually mean something!</ModalBody>
            <ModalFooter>
                <Button color="success" onClick={toggle}>Get to Participating</Button>
            </ModalFooter>
        </Modal>
    )
};

export default SuccessModal;