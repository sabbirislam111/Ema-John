import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login.css';
import { AuthContext } from '../../../context/Context';

const Registration = () => {

    const [checkPass, setCheckPass] = useState(null);
    const {registrationHandel} = useContext(AuthContext);
    const handelRegistration = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;
        console.log(email, password, conPassword);
        if(password !== conPassword){
            setCheckPass("Password didn't match");
            return;
        }
        else{
            setCheckPass("Password  match"); 
        }

        registrationHandel(email, password)
        .then(userCredential => {
            console.log(userCredential);
        })
        .catch(error=>{
            console.error(error);
        })

        form.reset();
        


    }

    return (
        <div>
            <div className='form_container'>
            <h1>Register</h1>
            <form onSubmit={handelRegistration}>
            <label for="fname">Email:</label><br/>
            <input type="email"  name="email"/><br/>
            <label for="lname">Password:</label><br/>
            <input type="password"  name="password"/><br/>
            <label for="lname">Confirm Password:</label><br/>
            <input type="password" name="conPassword"/> 
            <p>{checkPass}</p>
            <p> have an account please <Link to='/login'>Login </Link></p>
            <button className='submit_btn' type='submit'>Register</button>
            </form>
        </div>
        </div>
    );
};

export default Registration;