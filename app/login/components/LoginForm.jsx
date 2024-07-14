"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react'


const loginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

   
    const validateForm = () => {
        if (!formData.Email || !formData.Password) {
          setError('All fields are required');
          return false;
        }
        return true;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    
        setLoading(true);
        setError(null);
    
        try {
          const response = await fetch('http://localhost:3000/api/auth', {
            method: 'POST',
            body: JSON.stringify(formData),
          });
    
          const result = await response.json();
          if (!response.ok) {
            throw new Error(result.message || 'Something went wrong');
          }
          if (result.statusMessage == "success") {
            router.push("home");
          }
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3 className="font-semibold text-2xl">Let's Get Started</h3>
            <p>Sign in to continue to EduAdmin.</p>
            <div className="relative w-full mt-4">
                <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">Email Address</label>
                <input
                    onChange={handleChange}
                    type="email" 
                    id="input-label"
                    name="Email"
                    className="border-1 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" 
                    placeholder="Example@gmail.com"
                />
            </div>
            <label className="font-medium block mb-1 mt-4 text-gray-700" htmlFor="password">
                Password
            </label>
            <div className="relative w-full">
                <input 
                    onChange={handleChange}
                    className=" border-1 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password" 
                    id="password" 
                    type="password" 
                    name="Password" 
                    autoComplete="off"
                    placeholder="*********" 
                    required 
                />
            </div>
            <div className="form-group mt-7">
                <div className="checkbox p-0">
                    <input id="checkbox1" type="checkbox"/>
                    <label className="text-muted" htmlFor="checkbox1">Remember password</label>
                </div>
            <div className="checkbox p-0">
    
                <a className="link text-blue-500" href="forget-password.html">Forgot password?</a>
            </div>
                <div className="text-end mt-6">
                    <button className="btn btn-primary btn-block rounded-md bg-slate-800 py-2 text-white w-full" type="submit">Sign in</button>
                </div>
            </div>
            <h6 className="text-muted mt-4 or font-medium">Or Sign in with</h6>
            <div className="social mt-4">
                <div className="btn-showcase text-center">
                    <a className="btn btn-light rounded-md inline-block" href="https://www.facebook.com/" target="_blank"><i className="txt-fb fa-brands fa-square-facebook"></i>  </a>
                    <a className="btn btn-light rounded-md inline-block" href="https://twitter.com/login?lang=en" target="_blank"><i className="txt-twitter fa-brands fa-twitter"></i>  </a>
                    <a className="btn btn-light rounded-md inline-block" href="https://www.linkedin.com/login" target="_blank"><i className="txt-linkedin fa-brands fa-linkedin-in"></i>  </a>
                    <a className="btn btn-light rounded-md inline-block" href="https://www.instagram.com/accounts/login/" target="_blank"><i className="txt-instagram fa-brands fa-instagram"></i>  </a>
                </div>
            </div>
            <p className="mt-4 !mb-0 text-center">Don't have account?<a className="ms-2 text-blue-500" href="auth_register.html">Create Account</a></p>
        </form>
    )
}

export default loginForm