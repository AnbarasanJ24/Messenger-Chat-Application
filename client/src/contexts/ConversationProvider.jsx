import React, {useContext,useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';

const conversationsContext = React.createContext()

export const useConversation = () => {
    return useContext(conversationsContext);
}

const ConversationProvider = ({ children }) => {

    const [conversations, setConversations] = useLocalStorage('conversations', []);
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

    const {contacts}= useContacts();

    const createConversation = (recipients) => {
        setConversations(prevConversations =>{
            return [...prevConversations, {recipients, messages : []}]
        })
    }

    const formattedConversations =  conversations.map((conversation,index)=>{
        const recipients = conversation.recipients.map(recipient=>{
            const contact =  contacts.find(contact => contact.id === recipient);
            const name = (contact && contact.name) || recipient;
            return {id : recipient, name}
        })
        const selected = index === selectedConversationIndex
        return {...conversation, recipients, selected}
    })

    return (
        <conversationsContext.Provider value={{ conversations : formattedConversations, createConversation
        ,selectedConversationIndex : setSelectedConversationIndex }}>
            {children}
        </conversationsContext.Provider>
    )
}

export default ConversationProvider