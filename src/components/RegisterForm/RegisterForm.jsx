import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Button, FormRegister, Label } from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

const initialValues = { name: '', email: '', password: '' };

const userSchema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  email: Yup.string().min(2).max(70).required(),
  password: Yup.string().min(2).max(70).required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    actions.resetForm();
  };

  return (
    <FormRegister>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label>
            Username
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </Label>
          <Label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </Label>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </FormRegister>
  );
};
