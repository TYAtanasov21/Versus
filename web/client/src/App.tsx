import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import SignIn from './pages/signIn';

const router = createBrowserRouter([
  {path: "/", element: <LandingPage/>},
  {path: "/SignIn", element: <SignIn/>},
])


const App = () => {
  return (
    <RouterProvider router ={router}/>
  );
}
  export default App;


