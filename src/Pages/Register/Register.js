import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons8-message-64.png'
const Register = () => {
    return (
        <div className='py-4 space-y-6 h-screen flex  flex-col items-center  justify-center bg-gray-100'>
            <div className='space-y-6'>
                <div className='border-2 border-gray-400 rounded-lg'>

                    <img className='mx-auto p-3' src={logo} alt="whatsup logo" />
                </div>
                <h2 className='text-4xl font-medium'>Register</h2>
            </div>
            <div className='p-5 filter drop-shadow bg-white rounded-lg w-80'>
                <form action="" className='space-y-3 mx-auto w-full'>

                    <input className='px-3 py-2 bg-gray-200 rounded-md w-full' type="email" placeholder='Email' /> <br />
                    <input className='px-3 py-2 bg-gray-200 rounded-md w-full' type="password" placeholder='Password' /> <br />

                    <button className='bg-purple-500 text-white w-full px-3 py-2 rounded-md' type="submit">Register</button>

                    <hr />
                </form>
                <Link to='/login'><button className='bg-green-500 text-white w-full px-3 py-2 rounded-md'>Login</button></Link>

            </div>
        </div>
    );
};

export default Register;