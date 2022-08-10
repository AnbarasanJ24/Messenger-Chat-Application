import React, {useState} from 'react'
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useContacts } from '../../contexts/ContactsProvider';
import { useConversation } from '../../contexts/ConversationProvider';

const NewConversation = ({ openConversation, setOpenConversation }) => {

    const [selectedId, setSelectedIds] = useState([]);

    const {contacts} = useContacts();
    const {createConversation} = useConversation();

    const handleSubmit = (event) => {
        event.preventDefault()
        createConversation(selectedId)
        setOpenConversation(false);
    }

    const handleCheckBox = (contactId)=>{
        setSelectedIds(prevId => {
            if(prevId.includes(contactId)){
                return prevId.filter(id => contactId !== id)
            }else{
                return [...prevId, contactId]
            }
        })
    }

    return (
        <Modal
            className='modal'
            open={openConversation}
            onClose={() => setOpenConversation(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='grid-center modal-container'>
                <h4>Create Conversation</h4>
                <form onSubmit={handleSubmit} className='flex-col conversation-form'>
                     <ul>
                        {
                            contacts.map(contact =>{
                                return <li key={contact.id}>
                                    <input type="checkbox" value={selectedId.includes(contact.id)} id={contact.name} onChange={()=> handleCheckBox(contact.id)} />
                                    <label htmlFor={contact.name}>{contact.name}</label>
                                </li>
                            })
                        }
                     </ul>
                    <button className='btn'>Create</button>
                </form>
            </Box>
        </Modal>
    )
}

export default NewConversation