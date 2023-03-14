import React from 'react';
import './Signin.css';

class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    nameInputChange = (event) =>{
        this.setState({name:event.target.value});
    }

    emailInputChange = (event) =>{ 
        this.setState({email:event.target.value});
    }

    passwordInputChange = (event) =>{
        this.setState({password:event.target.value});
    }

    onRegisterClick = () =>{
        fetch('https://stark-crag-71277.herokuapp.com/register', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                password:this.state.password
            })            
        })
        .then(response => response.json())
        .then(data => {
            if(data.id){
                this.props.onPageRouteChange('mainPage'); 
                this.props.onSignin(data);    
                // console.log('data1',data);    
            }
        })
    }

    hi=()=>{
        console.log('Register');
    }
render(){
return(
<div className='Register'>
    <main>
    <form>
    <div className="titlecontainer">
        <h2>Register</h2>
    </div>

    <div className="container">
        <label><b>Name</b></label>
        <input type="text" placeholder="Enter Name" name="name" required onChange={this.nameInputChange}/>

        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required onChange={this.emailInputChange}/>

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required onChange={this.passwordInputChange}/>
            
        <input className="sbutton"
        onClick={this.onRegisterClick} onChange={this.hi} value='Register'/>
        <p onClick={()=>this.props.onPageRouteChange('signinPage')}>Sign In</p>
    </div>

    </form>
    </main>
</div>
);
}
}

export default Signin;