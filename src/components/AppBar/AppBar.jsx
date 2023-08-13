import { NavLink } from 'react-router-dom';
import { LinkContainer, NavigationContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <NavigationContainer>
      <LinkContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Recipes">Recipes</NavLink>
      </LinkContainer>
      <LinkContainer>
        <NavLink to="/Register">Register</NavLink>
        <NavLink to="/Login">Login</NavLink>
      </LinkContainer>
      <NavLink to="/Profile">Profile</NavLink>
    </NavigationContainer>
  );
};
