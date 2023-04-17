// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';

import { Form, FormLabel } from "./RegisterForm.styled";

export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

  return (
    <Form  autoComplete="off">
      <FormLabel >
        Username
        <input type="text" name="name" />
      </FormLabel>
      <FormLabel >
        Email
        <input type="email" name="email" />
      </FormLabel>
      <FormLabel >
        Password
        <input type="password" name="password" />
      </FormLabel>
      <button type="submit">Register</button>
    </Form>
  );
};
