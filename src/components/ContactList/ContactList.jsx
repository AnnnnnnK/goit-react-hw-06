import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);

  const contactsToShow = filter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <>
      {contacts.length > 0 && <h2 className={css.title}>Contacts</h2>}
      <ul>
        {contactsToShow.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
