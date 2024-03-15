import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import SignIn from './pages/signIn';
import Register from './pages/register';
import MainApp from './pages/mainApp';

const router = createBrowserRouter([
  {path: "/", element: <LandingPage/>},
  {path: "/SignIn", element: <SignIn/>},
  {path: "/register", element: <Register/>},
  {path: "/mainApp", element: <MainApp/>}
])


const App = () => {
  return (
    <RouterProvider router ={router}/>
  );
}
  export default App;


