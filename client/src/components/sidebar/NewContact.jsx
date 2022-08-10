import React, { useRef } from 'react'
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useContacts } from '../../contexts/ContactsProvider';

const NewContact = ({openContact, setOpenContact}) => {
    const idRef = useRef();
    const contactRef = useRef();
    const {createContact} = useContacts();

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(idRef.current.value);
        console.log(contactRef.current.value);
        createContact(idRef.current.value, contactRef.current.value);
        setOpenContact(false);
    }

    return (
        <Modal
            className='modal'
            open={openContact}
            onClose={() => setOpenContact(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='grid-center modal-container'>
                <h4>Create Conversation</h4>
                <form onSubmit={handleSubmit} className='flex-col conversation-form'>
                    <div className='form-control'>
                        <label htmlFor="">Session Id</label>
                        <input type="text" ref={idRef} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Contact</label>
                        <input type="text" ref={contactRef} />
                    </div>
                    <button className='btn'>Create</button>
                </form>
            </Box>
        </Modal>
    )
}

export default NewContact