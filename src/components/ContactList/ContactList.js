import PropTypes from 'prop-types';
import s from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export default function ContactList({ contactsData }) {
  // const { contacts } = useSelector(state => state);
  const dispatch = useDispatch();

  const deleteContactClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {contactsData.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.name}>{name}</p>
          <p className={s.number}>{number}</p>
          <button className={s.button} onClick={() => deleteContactClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactsData: PropTypes.array,
};
