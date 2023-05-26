import React from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row grid gap-20 md:grid-cols-2">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-10">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>

                    {/* Don't have an account? */}
                    <p className='text-center pb-10'>New to Smart Car? <Link className='text-orange-600 font-semibold' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;