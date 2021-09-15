import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class BeastModal extends React.Component {

    render() {
        return (
            <div>
                <Modal show={this.props.display} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.beastTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <img src={this.props.image_url} width="400px" height="300" alt="" /> <br />
                        {this.props.description}
                    </Modal.Body>
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