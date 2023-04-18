
import { NavigationLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationLink  to="/">
        Home
      </NavigationLink >
        {/* <NavigationLink  to="/contacts">
        Contacts
      </NavigationLink > */}
      {isLoggedIn && (
        <NavigationLink  to="/contacts">
          Contacts
        </NavigationLink >
      )}
    </nav>
  );
};