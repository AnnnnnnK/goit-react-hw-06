import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const contactsToShow = filter
    ? contacts.items.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts.items;

  const dispatch = useDispatch();
  return (
    <>
      {contacts.items.length > 0 && <h2 className={css.title}>Contacts</h2>}
      <ul>
        {contactsToShow.map(({ name, number, id }) => (
          <li key={id} className={css.item}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
