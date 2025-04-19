import React from 'react';
import ContactItem from './ContactItem';

export default function ContactList({ contacts, onDelete, onEdit }) {
    return (
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    );
  }