import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { name, number, id } = contact;
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        delete
      </button>
    </>
  );
};

export default Contact;
