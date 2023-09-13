import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
/*
UseParams
The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> .

useOutletContext
The useOutletContext hook is a function that returns the context object of the parent route. 
*/

//This function had a element to the router or header
export default function Formulary({titulo}) { //it can be params into the funtion and the element
    //const of the param pass in the main from URL
    const {FormularyId} = useParams();
    //const of the variable from the Outlet Context
    const [nombre]=  useOutletContext();
    //Element contains in the router  'Formulary'
    return (
    <div>
        <h1>{titulo}</h1>
        <h2>Formulary</h2>
        <p>{nombre}</p>
        <h6>Number: {FormularyId}</h6>
    </div>
    )
}

//Default params of the element
Formulary.defaultProps = {
    titulo: 'Formulary Default'
}