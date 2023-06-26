import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type='password' name="password" id="" required />

                </div>
                <input className='btn-submit cursor-pointer' type="submit" value="Login" />
            </form>
            <p ><small>New to Ema-john? <Link className='cursor-pointer hover:text-blue-500' to="/signup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;