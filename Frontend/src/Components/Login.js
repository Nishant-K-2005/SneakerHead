import React, { useState } from 'react';
import Google from '../images/google.svg';
import Facebook from '../images/Facebook.svg';
import Apple from '../images/apple.svg';
import '../styles/tailwind.css';
import Jordan from '../images/jordan.png';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


export default function Login() {

    const nav = useNavigate()

    const [user, setuser] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setuser({ ...user, [event.target.name]: event.target.value })
    }

    const loginUser = () => {
        const { email, password } = user
        console.log(email, password);
        axios.post('http://localhost:5000/login', user)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token)
                nav('/dashboard')
            })
    }

    return (
        <div className='bg-[#A7CCCE] h-screen text-white telex-regular'>
            <img className='md:hidden  absolute md:sticky mix-blend-darken w-20 top-10 ml-4' src={Jordan} />
            <h1 className='kaushan-script-regular md:text-[36px] text-[30px] md:px-4 py-4 px-12 text-center lg:text-left'>Sneaker Head</h1>
            <div className='flex gap-8 h-full md:items-center md:justify-center w-full md:h-10/12 bg-[#A7CCCE]'>
                <div className='hidden lg:flex lg:flex-col xl:p-4 p-2 tracking-widest w-6/12'>
                    <p className='xl:text-[32px] text-[25px] xl:py-24 py-10 xl:px-20 px-10'>Your ultimate destination for the
                        latest and trendiest sneakers.</p>
                    <p className='xl:text-[32px] lg:text-[25px] xl:px-20 px-10'>Discover exclusive collections<br />
                        and step up your style game<br />
                        with the freshest kicks.<br />
                    </p>
                </div>
                <div className=' w-full h-full lg:w-4/12 md:w-8/12 md:flex  bg-white text-black rounded-3xl md:py-10 py-6'>
                    <form method='#' autoComplete='off' className='w-full  flex flex-col  items-center md:pt-4 md:px-20 xl:p:20 px-9'>
                        <h1 className='md:text-[48px] text-[36px]  font-bold tracking-tighter'>LOGIN</h1>
                        <input
                            value={user.email}
                            onChange={handleInputChange}
                            name='email'
                            className='border border-black outline-none bg-white rounded-full w-full md:mt-10 lg:mt-6 mt-6 px-4 py-1.5 '
                            type='email' placeholder='Email*'></input>
                        <input
                            value={user.password}
                            onChange={handleInputChange}
                            name='password'
                            className='border border-black outline-none bg-white rounded-full w-full mt-4 px-4 py-1.5 '
                            type='password' placeholder='Password*'></input>
                        <span className='text-sm mt-2 cursor-pointer'>Forget Password? click here</span>
                        <input
                            className='bg-[#A7CCCE] text-white text-lg rounded-full w-full mt-4 px-4 py-1.5 hover:bg-[#a7cccea1]'
                            type='button'
                            value="Get Started"
                            onClick={loginUser}
                        ></input>
                        <Link to={'/signup'} className='text-sm mt-2'>Don't have an account? SignUp</Link>
                        <span className='mt-4 mb-1 md:mb-4'>OR</span>
                        <span className='text-xl font-bold tracking-wider'>Sign up using</span>
                        <div className='flex flex-col md:mt-6 mt-4 gap-2'>
                            <button type="button" class="text-xs border-2 border-[#D8D3D3] outline-none  font-normal rounded-lg px-3 py-2 text-center inline-flex items-center me-2 mb-3"> <img className='w-6 mr-2' src={Google} /> Sign in with Google
                            </button>
                            <button type="button" class="text-xs border-2 border-[#D8D3D3] outline-none  font-normal rounded-lg px-3 py-2 text-center inline-flex items-center me-2 mb-2"><img className='w-6 mr-2' src={Facebook} /> Sign in with Facebook
                            </button>
                            <button type="button" class="text-xs border-2 border-[#D8D3D3] outline-none  font-normal rounded-lg px-3 py-2 text-center inline-flex items-center me-2 mb-2"><img className='w-6 mr-2' src={Apple} /> Sign in with Facebook
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
