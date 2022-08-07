import React from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const NewConversation = ({openConversation, setOpenConversation}) => {
    return (
        <Modal
        className='modal'
            open={openConversation}
            onClose={() => setOpenConversation(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='grid-center modal-container'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                   Conversation
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
}

export default NewConversation