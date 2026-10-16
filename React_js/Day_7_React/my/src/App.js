import React from "react";

export default class App extends React.Component {

constructor()
  {

    super()

    this.state=({
      id:1,
      name:"Divya",
      skill:"HTML",
      techSTack:["HTML","JS","NextJS"]
    })
  }

 Demo2=()=>{
    alert("hello function inside class using this")
  }


  Demo3=()=>{
    alert("hello React JS event using Arrow function")
  }



  UpdateSKills=()=>{
  
    this.setState({
      skill:"NextJS"
    })

  }

  render() {

    console.log(this.state)


      function Demo()
      {
        alert("hello React JS events")
      }
      
    return (




      <>

        <h1>Name : {this.state.name} </h1>
        <h1>Skill : {this.state.skill}</h1>


      

      
        <button onClick={Demo}>Click Here</button>


        <button onClick={this.Demo2}>Click Here 2</button>

    
        <button onClick={()=>this.Demo3()}>Click Here 3</button>


        <hr />

        <button onClick={()=>this.UpdateSKills()}>Update Skills</button>
      

      </>
    )
  }
}



