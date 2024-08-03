import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <>
      {contacts.items.length > 0 && (
        <input
          type="search"
          onChange={(e) => {
            dispatch(changeFilter(e.target.value));
          }}
          placeholder="Find name"
        />
      )}
    </>
  );
};

export default Filter;
