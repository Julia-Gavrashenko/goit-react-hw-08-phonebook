import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperarions';
import { Formik } from 'formik';
// import * as Yup from 'yup';

import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  RegisterBtn,
  LoginField,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <LoginField>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        // validationSchema={UpdateContactSchema}
        onSubmit={values => {
          dispatch(
            register({
              name: values.name,
              email: values.email,
              password: values.password,
            })
          );
        }}
      >
        <Form>
          <FormField>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="p" />
          </FormField>
          <FormField>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" />
          </FormField>

          <FormField>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" />
          </FormField>

          <RegisterBtn type="submit">Register</RegisterBtn>
        </Form>
      </Formik>
    </LoginField>
  );
};






