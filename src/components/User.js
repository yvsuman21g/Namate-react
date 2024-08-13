import { useState } from 'react';
const User = (props) =>{

    const[count] = useState(0);
    const[count2] = useState(1);

    const{name, location} = props;

    return(
        <div className="user-container">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @sumanyv21</h4>
        </div>
    )
}
export default User;