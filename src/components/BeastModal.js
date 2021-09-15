import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class BeastModal extends React.Component {

    render() {
        return (
            <div>
                <Modal display={this.props.display} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>this.props.title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default BeastModal;