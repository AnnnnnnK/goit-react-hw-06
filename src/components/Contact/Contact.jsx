import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <>
      {contact.map(({ name, number, id }) => (
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
    </>
  );
};

export default Contact;
