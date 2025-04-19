import React, { useEffect, useState } from 'react';
import './App.css';
import _ from 'lodash'; 
import { getContacts, addContact, deleteContact, updateContact } from './api';
import ContactList from './Components/contactList';
import ContactForm from './Components/contactForm';

function App(){
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null); 

  useEffect(() => {
    getContacts()
      .then(res => setContacts(res.data))
      .catch(error => console.error(error));
  }, []); 

  const handleAdd = (contact) =>{
    addContact(contact).then(res=>setContacts([...contacts, res.data]))
  }

  const handleDelete = (id) =>{
    deleteContact(id).then(()=>{
      const updatedContacts = _.reject(contacts, {id})
      setContacts(updatedContacts)
    })
  }

  const handleUpdate = (updatedContact) =>{
    updateContact(updatedContact.id, updatedContact).then(res=>{
      setContacts(contacts.map(c=>(c.id===updatedContact.id ? res.data:c)))
      setEditingContact(null);
    })
  }

  return(
    <div className='container'>
      <h1>React Contact Manager</h1>
      <ContactForm onAdd = {handleAdd} onUpdate = {handleUpdate} editingContact = {editingContact}/>
      <ContactList contacts ={contacts} onDelete ={handleDelete} onEdit = {setEditingContact}/>
    </div>
  )
}

export default App; 