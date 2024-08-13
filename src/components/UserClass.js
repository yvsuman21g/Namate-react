import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name, "constructor")

        this.state = {
           userInfo:{
            name: "dummy",
            location: "default"
           }
        }
    }


async componentDidMount(){
    console.log(this.props.name, "componentDidMount");

    const data = await fetch('https://api.github.com/users/suman');
    const json = await data.json();
    // console.log(api);
    this.setState({
        userInfo: json
    });

    // 
    this.timer = setInterval(()=>{
        console.log("Namaste React OP from UserClass")
    },1000)
}

componentDidUpdate(){
    console.log("ComponentDidUpdate")
}

componentWillUnmount(){
    console.log("componnetWillUnmout");
    clearInterval(this.timer)
}
    render() {

        const {name, location, avatar_url} = this.state.userInfo;

        console.log(this.props.name, "render");

        return (
            <div className="w-52 border rounded-lg">
                <img className="pb-2" src={avatar_url} />
                <h2 className="pb-2">Name: {name}</h2>
                <h3 className="pb-2">Location: {location}</h3>
                <h4>Contact: @sumanyv21g</h4>
            </div>
        )
    }
}
export default UserClass;
