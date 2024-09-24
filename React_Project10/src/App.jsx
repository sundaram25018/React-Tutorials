import { children, useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './componets/Home';
import About from './componets/About';
import Contact from './componets/Contact';
import Navbar from './componets/Navbar';
import Course from './componets/Course';
import Classes from './componets/Classes';
import Student from './componets/Student';
const router = createBrowserRouter(
  [
    {
    path:"/",
    element: <div>
    <Navbar/>
    <Home />
    </div>

  },
    { path:"/About",
      element: <div>
        <Navbar/>
        <About />
        </div>
    },
    { 
      path:"/Contact",
      element: <div>
      <Navbar/>
      <Contact />
      </div>,
      children:[
        { 
        path:'course',
        element: <Course/>
      },
      { 
        path:'student',
        element: <Student/>
      },
      { 
        path:'classes',
        element: <Classes/>
      },
    ]
    }
  ]
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <RouterProvider router={router}/>
     
    </div>
  )
}

export default App
