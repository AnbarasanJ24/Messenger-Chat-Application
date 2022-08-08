import React from 'react'
import './contacts.css'
import { useContacts } from '../../contexts/ContactContextProvider';

const Contacts = () => {
  const {contacts} = useContacts();
  return (
    <ul className='context-container'>
      {
        contacts.map(contact =>{
          return <li key={contact.id}>{contact.name}</li>
        })
      }
    </ul>
  )
}

export default Contacts