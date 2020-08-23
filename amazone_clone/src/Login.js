import React, {useState} from 'react';
import "./stylesheets/Login.css";
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';



function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth)=>{
            history.push('/')
            //login success, redirect to homepage
        }).catch((e) => {alert(e.message)})
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            //creation success, redirect to homepage
            history.push('/')
        }).catch((e) => {alert(e.message)})
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button type="submit" className="login__signinButton" onClick={login}>Sign in</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
