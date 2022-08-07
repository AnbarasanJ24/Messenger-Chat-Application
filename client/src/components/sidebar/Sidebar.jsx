import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Conversation from '../conversation/Conversation';
import Contacts from '../contacts/Contacts';
import { useState } from 'react';

import './sidebar.css'
import NewConversation from './NewConversation';
import NewContact from './NewContact';

const Sidebar = ({ id }) => {

    const [activeIndex, setActiveIndex] = useState('1');
    const [openConversation, setOpenConversation] = useState(false);
    const [openContact, setOpenContact] = useState(false);

    const handleActiveIndex = (event, newValue) => {setActiveIndex(newValue)}

    return (
        <section className='sidebar-container' >
            <TabContext value={activeIndex}>
                <Box >
                    <TabList onChange={handleActiveIndex} aria-label="lab API tabs example">
                        <Tab label="Conversation" value="1" />
                        <Tab label="Contacts" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Conversation /></TabPanel>
                <TabPanel value="2"><Contacts /></TabPanel>
            </TabContext>
            <div>
                <h2>Session Id: {id}</h2>
                {
                    activeIndex === '1'?
                    <button className="btn" onClick={()=> setOpenConversation(true)}>New Conversation</button>:
                    <button className="btn" onClick={()=> setOpenContact(true) }>New Contact</button>

                }
            </div>
            <NewConversation openConversation={openConversation} setOpenConversation={setOpenConversation} />
            <NewContact openContact={openContact}  setOpenContact={setOpenContact} />
            
        </section>
    )
}

export default Sidebar