import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    console.log(newContact);
    options.resetForm();
  };
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <label className={css.label}>Name: </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />

          <label className={css.label}>Number: </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
