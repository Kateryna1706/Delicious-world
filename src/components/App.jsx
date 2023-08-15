import { Home } from 'pages/HomePage';
import { Login } from 'pages/LoginPage';
import { Profile } from 'pages/ProfilePage';
import { Recipes } from 'pages/RecipesPage';
import { Register } from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element="Not Found" />
      </Routes>
    </>
  );
};
