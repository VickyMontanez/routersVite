import React from 'react'
import {Link, Outlet} from 'react-router-dom'
/* 
Link
is an element that lets the user navigate to another page by clicking or tapping on it.
In react-router-dom , a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to.

Outlet
is used within the parent route element to indicate where a child route element should be rendered.
*/

//create a function to shows a menu in the router
export default function Header() {
  const nombre = "Vickysita";
  return (
    <>
        <ul>
            <li>
                <Link to={`/MyFormulary`}>Formulary</Link>
            </li>
        </ul>
        <Outlet context={[nombre]}/>
    </>
  )
}
