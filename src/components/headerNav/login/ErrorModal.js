import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ErrorModal = ({error}) => {
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    return (
        <Modal isOpen={modal} >
            <ModalHeader>Error :-/</ModalHeader>
    <ModalBody>{error}</ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={toggle}>Try Again</Button>
            </ModalFooter>
        </Modal>
    )
};

export default ErrorModal;