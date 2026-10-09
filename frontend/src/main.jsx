import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from './App.jsx'
import Layout from './layout.jsx'
import About from './pages/About.jsx';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import Contact from './pages/Contact.jsx'
import MyBookings from './pages/MyBookings.jsx'
import './index.css'
import Register from './pages/Register.jsx';
import {Provider} from 'react-redux'
import { store } from './app/store.js';

import Hotels from './pages/Hotels.jsx';
import { HotelDetails } from './pages/HotelDetails.jsx';
// Custom Error Page Component
function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-extrabold text-blue-500 mb-4">404</h1>
      <p className="text-xl font-semibold mb-2">Page Not Found</p>
      <p className="text-slate-400 text-sm mb-6">The page you are looking for does not exist or has been moved.</p>
      <a href="/" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
        Back to Home
      </a>
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {path:"",
        element:<Home />
      },
      {path:"about",
        element:<About />
      },
      {
        path:"login",
        element:<Login />

      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'mybookings',
        element:<MyBookings />
      },
      {
        path:'register',
        element:<Register />

      },
      {
        path:'hotels',
        element:<Hotels />
      },
      {
        path:'hotels/:id',
        element:<HotelDetails />
      }
      ,
      {path:"*",
        element:<NotFound />
      } 
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   
      <RouterProvider   router={router}/>
    </Provider>
  </StrictMode>,
)
