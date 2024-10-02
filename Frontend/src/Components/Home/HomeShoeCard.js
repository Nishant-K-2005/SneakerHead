import {React,useState} from 'react'
import '../../styles/tailwind.css';
// import {shoe}
// import RatingSize from './Rating';

export default function HomeShoeCard({ shoe, text , rating, setRating}) {
    
    return (
        <div className='w-[350px] h-[560px] bg-white p-5 '>
            <div className='blue-gradient w-full h-5/6 bg-gradient-to-t from-[#6DC2FF] to-white rounded-b-2xl'>
                <img src={shoe} className='py-60 scale-75 hover:scale-100 transition-all ease-linear duration-300' />

            </div>
            {/* <RatingSize /> */}
            <p className='interLight pt-5'>{text}</p>
        </div>
    )
}
