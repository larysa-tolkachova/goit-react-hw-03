import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const StyleSchema = Yup.object().shape({
    name: Yup.string().min(3, 'To Short!').max(50, 'To long!').required('Required'),
    number: Yup.string().min(3, 'To Short!').max(50, 'To long!').required('Required'),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    onAdd(newContact);
    actions.resetForm();
  };
  // ===============================================================
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={StyleSchema}>
      <Form className={css.container}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId}></Field>
          <ErrorMessage name="name" component="span"></ErrorMessage>
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field type="phone" name="number" id={numberId} placeholder="123-45-67"></Field>
          <ErrorMessage name="number" compponent="span"></ErrorMessage>
        </div>
        <button type="submit">Add contakt</button>
      </Form>
    </Formik>
  );
}
