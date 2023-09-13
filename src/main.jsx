import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
/* 
CreateBrowserRouter
It enables navigation between views from different components in a React application,
allows the browser URL to be changed, and keeps the UI in sync with the URL.

RouterProvider
All data router objects are passed to this component to render your app and enable the rest of the data APIs.
*/

//import the router
import Header from './routes/Header'

//import the component
import Formulary from './components/Formulary'

//Create all the routes
const root = createBrowserRouter([
  {
    //main or index
    path: "/",
    //Element that it shows
    element: <Header/>,
    //Children of the element
    children:[
      {
        //route from URL
        path: "MyFormulary/:FormularyId?", //It can contain a Param
        //Element that it shows in the route
        element: <Formulary titulo={'JIJIJI'}/> 
      }
    ]
  }
])

//Select the element in index.html 
ReactDOM.createRoot(document.querySelector('#root')).render(
  //Provides the route in the element select
  <React.StrictMode>
    <RouterProvider router={root}/>
  </React.StrictMode>
)
