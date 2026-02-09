import React from 'react'

class UserClass extends React.Component {
   constructor(props){
       console.log("constructor render");
        super(props);

        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location",
            }
        }
   }

async componentDidMount(){
    const res = await fetch("https://api.github.com/users/anushka1672")
    const data = await res.json();
    console.log("componentDidMount data",data); 
    this.setState({
        userInfo:data,
    })
}


render(){
       const {name,location}=this.state.userInfo;
        console.log("class based render is  rendering");
        return(
    <div>
        <div>Name: {name}</div>
        <div>Location: {location}</div>
        <div>Age: 22</div>
    </div> 
        )
    }
 
}

export default UserClass;