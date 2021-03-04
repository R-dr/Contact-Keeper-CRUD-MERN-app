import React, { useReducer } from 'react';
import uuid from 'uuid';
import { ContactContext } from './ContactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'steve Jobs',
        email: 'steve@s.com',
        phone: '1300655506',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Selina Gomez',
        email: 'selina@s.com',
        phone: '86782020',
        type: 'professional',
      },
      {
        id: 3,
        name: 'mariah carie',
        email: 'test@t.com',
        phone: '123456790',
        type: 'personal',
      },
      {
        id: 4,
        name: 'Harry Potter',
        email: 'H@hogwarts.com',
        phone: '18006957',
        type: 'professional',
      },
      {
        id: 5,
        name: 'Emma Watson',
        email: 'e@england.co.uk',
        phone: '180085',
        type: 'personal',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add a contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // clear current contact
  const clearCurrent = contact => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //filter contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //clear filter
  const clearFilter = contact => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
