import { useDispatch } from 'react-redux';
import { logIn } from "redux/auth/authOperarions";
import { Form, FormLabel } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Email
        <input type="email" name="email" />
      </FormLabel>
      <FormLabel >
        Password
        <input type="password" name="password" />
      </FormLabel>
      <button type="submit">Log In</button>
    </Form>
  );
};
