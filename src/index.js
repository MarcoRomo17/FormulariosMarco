import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {//Esta linea haat la 7 no estaba
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CreacionDeFormulario } from './CreacionDeFormulario';
import { Login } from './Login';
import { Home } from './Home';
import FormularioValidado from './FormularioValidado';
import { RegistrarUsuario } from './RegistrarUsuario';
import { ModuloRC } from './ModuloRC';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "/CR",
    element: <CreacionDeFormulario/>,
  }, 
  {
    path: "/L",
    element: <Login/>,
  }, 
  {
    path: "/H",
    element: <Home/>,
  }, 
  {
    path: "/F",//Este es de prueba
    element: <FormularioValidado/>,
  }, 
  {
    path: "/RU",
    element: <RegistrarUsuario/>,
  }, 
  {
    path: "/MRC",
    element: <ModuloRC/>,
  }, 


]);//Se cambio e. componente que se quiere llamar

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//Linea 21 no estaba
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
