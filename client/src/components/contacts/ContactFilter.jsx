import React, { useContext, useRef, useEffect } from 'react';
import { CSSTransition, TransistionGroup } from 'react-transition-group';
import { ContactContext } from '../../context/contact/ContactContext';
export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (!filtered) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Your contacts'
        onChange={onChange}
      />
    </form>
  );
};
