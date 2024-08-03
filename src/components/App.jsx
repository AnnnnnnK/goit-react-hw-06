import React from "react";
import ContactsForm from "./ContactsForm/ContactsForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

const App = () => {
  return (
    <>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default App;
