import React from 'react';
import './Signin.css';

class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    emailInputChange = (event) =>{
        this.setState({email:event.target.value});
        // this.setState({email:"hi@gmail.com"});

    }
    passwordInputChange = (event) =>{
        this.setState({password:event.target.value});
        // this.setState({password:"hi"});
 
    }

    onSigninClick = () =>{
        fetch('https://stark-crag-71277.herokuapp.com/signin', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.id){
                this.props.onPageRouteChange('mainPage');  
                this.props.onSignin(data);
            }
            else{
                console.log('wrng');
            }
        })
    }
    hi=()=>{
        console.log('Sign-in');
    }

render(){
return(
<div className='signin'>
    <main>
    <form>
    <div className="titlecontainer">
        <h2>Sign In</h2>
    </div>

    <div className="container">
        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required onChange={this.emailInputChange}/>

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required onChange={this.passwordInputChange}/>
            
        <input className="sbutton"
        onClick={this.onSigninClick} onChange={this.hi} value='SIGN IN'/>
        <p onClick={()=>this.props.onPageRouteChange('registerPage')}>REGISTER</p>
    </div>

    </form>
    </main>
</div>
);
}
}

export default Signin;