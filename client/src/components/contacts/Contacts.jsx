import React from 'react'
import './contacts.css'
import { useContacts } from '../../contexts/ContactsProvider';

const Contacts = () => {
  const {contacts} = useContacts();
  console.log("In contact", contacts)
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