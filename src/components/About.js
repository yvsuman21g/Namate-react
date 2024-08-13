import React from 'react';
import UserClass from './UserClass';

class About extends React.Component{
    constructor(props){
        super(props);
            console.log("Parent constructor")
    }

componentDidMount(){
    console.log("Parent componentDidMount");
    
}

    render(){
        console.log("Parent render")
        return(
            <div className='m-4 p-4 w-72 bg-yellow-100'>
                <h1 className='pb-4'>About Page</h1>
                <h2 className='pb-4'>This is Namaste React Web series</h2>
                <UserClass name={"First"} location={"varanasi"} />
            </div>
        )
    }
}
export default About;