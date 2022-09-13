import PropTypes from 'prop-types';

import style from './contactBook.module.css';

const ContactBook = ({ contacts, removeContact }) => {
  const elements =
    contacts &&
    contacts.map(({ name, number, id }) => {
      return (
        <li className={style.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={style.btn}
            onClick={() => removeContact(id)}
          >
            Delete
          </button>
        </li>
      );
    });

  return <ul>{elements}</ul>;
};

export default ContactBook;

ContactBook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
