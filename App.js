import React from 'react';
import ReactDOM from 'react-dom/client'


const TitleComponent = () =>{
    return (
    <h1>Namaste React using JSX</h1>
)
}

const number = 10000;
const ele = <span> React Element </span>

const title = (
    <h1>Hello My name is Suman 
    {ele},
    </h1>
)
   
const HeaderComponent = () =>{
    return (
    <div>
        {title}
        <h1>{ele}</h1>
        <TitleComponent />
        <h2>{100 + 200}</h2>
        {console.log("cxgdhdgdffgjhgfh")}
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent />)

