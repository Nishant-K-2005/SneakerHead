import React from 'react'
import '../styles/tailwind.css'
import Input from './searchbar'
import Cart from '../images/Shoppingcart.svg'
import Heart from '../images/Wishlist.svg'
import user from '../images/User.svg'
import ToggleMenu from './ToggleMenu'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <nav className='w-screen mt-5 md:mt-2'>
                <div className='flex flex-col w-full md:flex-row md:gap-10 justify-center items-center h-full'>
                    <div className='flex w-full justify-around md:justify-around '>
                        <ToggleMenu />
                        <h1 className='kaushan-script-regular text-2xl text-center' >Sneaker's Head</h1>
                        <ul className='hidden lg:flex gap-8 items-center'>
                            <li className='italiana-regular text-lg'>Home</li>
                            <li className='italiana-regular text-lg'>Categories</li>
                            <li className='italiana-regular text-lg'>Services</li>
                            <li className='italiana-regular text-lg'>More</li>
                        </ul>
                        <div className='md:hidden flex gap-5'>
                            <img className='md:hidden' src={Cart}></img>
                            <img className='md:hidden' src={user}></img>
                            
                        </div>
                    </div>
                    <div className='flex flex-row-reverse w-full justify-around py-4 md:py-0 items-center text-2xl '>
                        <div className='hidden md:flex gap-5'>
                            <img src={Cart}></img>
                            <img className='hidden' src={user}></img>
                            <div className='text-lg poppins-regular'>
                                <Link to={'/login'}>Sign-In</Link>
                            </div>
                        </div>
                        <Input />
                    </div>

                </div>
            </nav>
        </header>
    )
}