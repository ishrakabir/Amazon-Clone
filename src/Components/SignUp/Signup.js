import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
const Signup = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        setError(null);
        if (password.length < 6) {
            setError('Your password should be atleast six characters');
            return;
        }
        if (password !== confirm) {
            setError('Your Password did not match');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type='password' name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type='password' name="confirm" id="confirm" required />
                </div>
                <input className='btn-submit cursor-pointer' type="submit" value="Sign Up" />
            </form>
            <p className='text-error'>{error}</p>
            <p ><small>Already have an account? <Link className='cursor-pointer hover:text-blue-500' to="/login">Login</Link></small></p>
        </div>
    );
};

export default Signup;