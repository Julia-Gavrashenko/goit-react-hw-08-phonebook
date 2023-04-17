
import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationLink  to="/">
        Home
      </NavigationLink >
        <NavigationLink  to="/contacts">
        Contacts
      </NavigationLink >
      {/* {isLoggedIn && (
        <NavigationLink  to="/tasks">
          Tasks
        </NavigationLink >
      )} */}
    </nav>
  );
};