import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../context/Context';


const Login = () => {

    const navigate = useNavigate();
    const {user, signIn} = useContext(AuthContext);
    const [successful, setSuccessful] = useState(null);
    const location = useLocation();


    let from = location.state?.from?.pathname || "/"; 

    const singInHandel = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(userCredential=>{
            console.log(userCredential);
            setSuccessful("login successful");
            navigate(from, { replace: true });
        })
        .catch(error=>{
            console.error(error);
        })

    }


    return (
        <div className='form_container'>
            <h1>Login</h1>
            <form onSubmit={singInHandel}>
            <label for="fname">Email:</label><br/>
            <input type="email"  name="email"/><br/>
            <label for="lname">Password:</label><br/>
            <input type="password"  name="password"/>
            <p>Don't have account please <Link to='/registration'>Register </Link></p>
            <p>{successful}</p>
            <button className='submit_btn' type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;