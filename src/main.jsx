import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Frontend from './components/Frontend.jsx';
import Backend from './components/Backend.jsx';
import Fullstack from './components/Fullstack.jsx';
// You can import other components like About, Contact etc.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='all' element={<Home />}/>
      <Route path='frontend' element={<Frontend />}/>
      <Route path='backend' element={<Backend />}/>
      <Route path='fullstack' element={<Fullstack />}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
