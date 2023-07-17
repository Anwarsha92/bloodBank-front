import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Guidline.css'

function Guideline() {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

            <a variant="primary" onClick={handleShow}>
                GUIDELINE
            </a>

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header className='text-center' closeButton>
                    <h2 className='text-primary text-center'><strong>Guideline To Donors</strong></h2>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>You are aged between 18 and 65.</li>
                        * In some countries national legislation permits 16–17 year-olds to donate provided that they fulfil the physical and hematological criteria required and that appropriate consent is obtained. <br />
                        * In some countries, regular donors over the age of 65 may be accepted at the discretion of the responsible physician. The upper age limit in some countries are 60.
                        <li>You weigh at least 50 kg.</li>
                        * In some countries, donors of whole blood donations should weigh at least 45 kg to donate 350 ml ± 10%.
                        <li>You must be in good health at the time you donate.</li>
                        <li>You cannot donate if you have a cold, flu, sore throat, cold sore, stomach bug or any other infection.</li>
                        <li>If you have recently had a tattoo or body piercing you cannot donate for 6 months from the date of the procedure.</li>
                        <li>If you have visited the dentist for a minor procedure you must wait 24 hours before donating; for major work wait a month.</li>
                        <li>You must not donate blood If you do not meet the minimum haemoglobin level for blood donation.</li>
                    </ul>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default Guideline