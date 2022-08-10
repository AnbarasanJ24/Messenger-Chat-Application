import React from 'react'
import './conversation.css'
import { useConversation } from '../../contexts/ConversationProvider';

const Conversation = () => {
  const { conversations, selectedConversationIndex } = useConversation();
  console.log({ conversations });
  return (
    <ul className='conversation-container'>
      {
        conversations.map((conversation, index) => {
          const names = conversation.recipients.map(recipient => recipient.name);
          const concatNames = names.join(',')
          return (
            <li key={index}
             onClick={()=> selectedConversationIndex(index)}
             active={`${conversation.selected}`}
            >
              {concatNames}
            </li>)
        })
      }
    </ul>
  )
}

export default Conversation