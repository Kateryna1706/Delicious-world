import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Profile } from 'pages/Profile';
import { Recipes } from 'pages/Recipes';
import { Register } from 'pages/Register';
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
