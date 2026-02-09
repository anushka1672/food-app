import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UseContext from '../utils/UseContext';

class About extends React.Component {

  constructor(props){
    super(props);
    console.log("Parent - constructor")
  }

  render(){
    return (
      <div>About
      {/* <User  name={"Anushka, function"}/> */}
      <UserClass  name={"Anushka, class"}/>
      <UseContext.Consumer>
       {({userLogin})=><div>{userLogin}</div>
       }
      </UseContext.Consumer>
    </div>
  )
}
}
export default About;