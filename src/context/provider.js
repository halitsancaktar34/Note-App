import React, {useState} from 'react';
import MyContext from '.';
import {mockData} from '../utils/mockData';

const Provider = ({children}) => {
  const [notes, setNotes] = useState(mockData);

  const addNote = item => {
    if (item) {
      setNotes([...notes, item]);
    }
  };

  const updateNote = (id, item) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? {...note, title: item.title, description: item.description} : note,
    );
    setNotes(updatedNotes);
  };

  const deleteNote = id => {
    const updatedNotes = notes.filter(i => i.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <MyContext.Provider value={{notes, addNote, updateNote, deleteNote}}>
      {children}
    </MyContext.Provider>
  );
};
export default Provider;
