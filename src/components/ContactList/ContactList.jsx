import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const filter = useSelector((state) => state.filter.filter);
  const contacts = useSelector((state) => state.contacts.contacts);

  const contactsToShow = filter
    ? contacts.items.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts.items;

  const dispatch = useDispatch();
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
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
