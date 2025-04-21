import React, { useEffect, useState } from 'react';

export default function ContactForm({ onAdd, onUpdate, editingContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

   useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, email };

    if (editingContact) {
      onUpdate({ ...contact, id: editingContact.id });
    } else {
      onAdd(contact);
    }

    // Reset form
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingContact ? 'Edit' : 'Add'} Contact</h2>
      <input
        type='text'
        value={name}
        required
        placeholder='Enter your name'
        onChange={e => setName(e.target.value)}
      />
      <input
        type='text'
        value={email}
        required
        placeholder='Enter your email'
        onChange={e => setEmail(e.target.value)}
      />
      <button type='submit'>{editingContact ? 'Update' : 'Add'}</button>
    </form>
  );
}
