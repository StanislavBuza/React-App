import React, {useState} from 'react';
import {Button, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default function ConfirmationDelete(props) {
    const [isDisabledDeleteConfirmationButton, setIsDisabledDeleteConfirmationButton] = useState(true)

    const modalConfirmationUserInputChange = (event) => {
        const inputText = event.target.value;
        setIsDisabledDeleteConfirmationButton(inputText !== props.name);
    };
    // isVisible={}
    //             name={}
    //             onScuccess={removeConfirmed}
    //             onCancel={}
    const deleteButtonClick = () => {
        setIsDisabledDeleteConfirmationButton(true);
        props.onScuccess();
    }
    const cancelButtonClick = () => {
        setIsDisabledDeleteConfirmationButton(true);
        props.onCancel();
    }

    return (
        <Modal isOpen={Boolean(props.name)} toggle={props.onCancel}>
            <ModalHeader> Delete Confirmation</ModalHeader>
            <ModalBody>
                <p>Enter counter name: <strong>{props.name}</strong> to delete it
                </p>

                <FormGroup>
                    <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder"
                           onChange={modalConfirmationUserInputChange}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={deleteButtonClick}
                        disabled={isDisabledDeleteConfirmationButton}>Delete</Button>{' '}
                <Button color="secondary" onClick={cancelButtonClick}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}