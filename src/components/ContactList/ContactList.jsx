import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log(contacts);
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <ul>
        {contacts.items.map(({ name, number, id }) => (
          <li key={id} className={css.item}>
            <p>
              {name}: {number}
            </p>
            <button className={css.btn} onClick={() => handleDelete(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
