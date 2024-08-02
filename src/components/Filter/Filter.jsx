import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="search"
      onChange={(e) => {
        dispatch(changeFilter(e.target.value));
      }}
      placeholder="Find name"
    />
  );
};

export default Filter;
