import { useDispatch } from 'react-redux';
import { Form, FormLabel } from "./RegisterForm.styled";
import { register } from 'redux/auth/authOperarions';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off" >
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
