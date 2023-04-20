import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperarions';
import { Formik } from 'formik';
// import * as Yup from 'yup';

import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  LoginBtn,
  LoginField,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <LoginField>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        // validationSchema={UpdateContactSchema}
        onSubmit={values => {
          dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          );
        }}
      >
        <Form>
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

          <LoginBtn type="submit">Log In</LoginBtn>
        </Form>
      </Formik>
    </LoginField>
  );
};
