import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/tailwind.css';
import Google from '../images/google.svg';
import Facebook from '../images/Facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SignImage from '../images/signuppage.png';

export default function Signup() {

    const [user, setUser] = useState({
        fullname: '',
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const registerUser = () => {
        const { fullname, email, password } = user
        console.log(user);
        if (fullname && email && password) {
            axios.post("http://localhost:5000/register", user)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        else {
            alert("invalid input")
        }
    }

    return (
        <div className="poppins-regular bg-[#A7CCCE] h-screen flex">
            <div className='hidden lg:flex lg:flex-col text-white p-4 xl:text-[32px] text-[25px] h-full '>
                <h1 className='kaushan-script-regular'>Sneaker Head</h1>
                <p className='telex-regular font-light xl:leading-[43.68px] mt-14  xl:ml-[50.48px] xl:tracking-widest'>Sign up with us and begun <br /> your sneakers collection <br />journey now.</p>
            </div>
            <img className='hidden lg:block absolute  bottom-0 scale-90 xl:scale-100  xl:right-2/4 right-10/12 object-contain z-50' src={SignImage} />
            <div className='lg:w-7/12 w-full md:h-full h-screen bg-white absolute z-0 md:right-0 md:rounded-l-3xl'>
                <h3 className="text-[#A1A1A1] text-right md:mt-8 mt-4 tracking-widest font-light">Engish(UK)</h3>
                <form action="#" autoComplete="off" className='flex flex-col justify-center items-center md:p-2 py-8'>

                    <h1 className='text-left md:text-[36px] text-[25px] telex-regular h-full font-extrabold'>
                        Create Account
                    </h1>
                    <div className='flex mt-6 md:flex md:flex-row md:gap-10  gap-2 justify-center w-full px-4'>
                        <button type="button" class="text-xs border-2 border-[#D8D3D3] outline-none  font-normal rounded-lg md:px-3 md:py-2 px-1.5 py-1.5 text-center inline-flex items-center me-2 mb-2"> <img className='md:w-8 w-6 mr-2' src={Google} /> Sign in with Google
                        </button>
                        <button type="button" class="text-xs border-2 border-[#D8D3D3] outline-none  font-normal rounded-lg px-3 py-2 text-center inline-flex items-center me-4 mb-2"><img className='md:w-6 w-4 mr-2' src={Facebook} /> Sign in with Facebook
                        </button>
                    </div>
                    <span className='text-[#797979] mt-8 md:text-[26px] font-light'>-OR-</span>
                    <div className='flex flex-col justify-center items-center w-full gap-7 mt-6 px-10'>
                        <input
                            value={user.fullname}
                            onChange={handleChange}
                            name='fullname'
                            className='text-[19px] font-[#5C5C5C] font-light border-b-2 outline-none py-3 md:w-6/12 w-full border-[#C4C4C4]'
                            type='text' placeholder='Full Name*'
                        />
                        <input
                            value={user.email}
                            onChange={handleChange}
                            name='email'
                            className='text-[19px] font-[#5C5C5C] font-light border-b-2 outline-none py-3 md:w-6/12 w-full border-[#C4C4C4]'
                            type='email' placeholder='Email Address*'
                        />
                        <div className='md:w-1/2 w-full relative border-b-2 border-[#C4C4C4] py-3'>
                            <input
                                value={user.password}
                                name='password'
                                onChange={handleChange}
                                className='text-[19px] font-[#5C5C5C] font-light outline-none'
                                type={showPassword ? 'text' : 'password'} placeholder='Password*'
                            />
                            <button className='absolute right-4 text-slate-400' onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>

                        <input
                            className='text-white bg-[#A7CCCE] p-2 md:w-1/2 w-full rounded-xl text-[19px] tracking-widest py-3 mb-4 cursor-pointer'
                            onClick={registerUser}
                            type='submit' value='Create Account'></input>
                    </div>
                    <p className='tracking-wide md:text-[16px] text-sm font-light'>Already have an Account?  <Link to='/login' className='text-[#A7CCCE]'>Log in</Link></p>
                </form>
            </div>
        </div>

    )
}

