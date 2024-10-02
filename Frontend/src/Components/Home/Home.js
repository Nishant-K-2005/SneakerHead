import React from 'react'
import HomeShoeCard from './HomeShoeCard'
import { Banner } from './Banner/Banner'
import { BlueShoeImg, ShoeBG, ShoeImg1, ShoeImg2, ShoeImg3, ShoeImg4, ShoeImg5, ShoeImg6, ShoeImg7, ShoeImg8, ShoeImg9, ManImg, Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7 } from '../../images/image'

const images = [
    Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7
].map((image) => ({
    id: crypto.randomUUID(),
    image
}));


export default function Home() {
    return (
        <div >
            {/* Home Page  Part-1 */}
            <div className='flex md:gap-20 md:h-screen w-full'>
                <div className='italiana-regular md:w-1/2 h-full md:ml-[112px] mt-10 md:mt-40 px-3'>
                    <p className='font-extrabold interBold'>50% Off Festive Super Sale</p>
                    <h1 className='font-extrabold text-3xl md:text-6xl'>Start Your Sneaker's<br />Collection Today !</h1>
                    <p className='interLight font w-2/3 leading-6 mt-2 hidden md:block'>Discover the latest in stylish, comfortable sneakers with a wide range of designs and brands at unbeatable prices. Elevate your footwear game with top-quality sneakers that combine fashion and function for every occasion</p>
                    <button className='bg-black mt-10 text-white p-2.5 md:p-0 md:w-[205px] md:h-[55px] rounded-xl text-2xl italiana-regular'>Explore Now</button>
                </div>
                <div className='hidden md:block w-1/2 h-full overflow-hidden p-20 '>
                    <img src={ShoeBG} className='absolute ml-10' />
                    <img src={BlueShoeImg} className='bg-transparent absolute' />
                </div>
            </div>


            {/* Home Page Part-2 */}
            <div className='relative mt-14 w-full'>
                <div className='bg-[#7BB7FF] h-[286px] flex flex-col justify-center items-center'>
                    <h1 className='rozha-one-regular text-[63px]'>New Collection</h1>
                    <p className='interLight'>Check out the newly released sneakers, blending fresh style with ultimate comfort.</p>
                </div>
                <div className='h-full w-full md:pl-36 gap-y-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 mb-14'>
                    <HomeShoeCard shoe={ShoeImg1} text={'Nishat Karena'} />
                    <HomeShoeCard shoe={ShoeImg2} text={'Rahul Singh Chouhan'} />
                    <HomeShoeCard shoe={ShoeImg3} text={'Rehan Khan'} />
                    <HomeShoeCard shoe={ShoeImg4} text={'Nishat Karena'} />
                    <HomeShoeCard shoe={ShoeImg5} text={'Rahul Singh Chouhan'} />
                    <HomeShoeCard shoe={ShoeImg6} text={'Rehan Khan'} />
                </div>
            </div>

            <div className='w-full h-fit z-50'>
                <div className='rozha-one-regular w-full text-center text-[40px] mb-5'>Top Brands</div>
                <Banner images={images} speed={10000} />
            </div>
            <div className='flex h-fit mb-10'>
                <img src={ManImg} className='mt-16 absolute' />
                <div className='mt-56 bg-[#7BB7FF] h-[610px] pt-12 w-2/3 rounded-tl-[120px] rounded-br-[120px] ml-[270px] text-center'>
                    <h1 className='text-[#002E65] text-[48px] rozha-one-regular'>Exclusive Deal of The Day !</h1>
                    <p className='text-[24px] text-left w-fit mx-auto interLight'>Grab today's exclusive deal on top-brand sneakers at unbeatable
                        <br />prices—limited time only!</p>
                </div>
            </div>
            <div className='h-full w-full md:pl-36 gap-y-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 mb-14'>
                <HomeShoeCard shoe={ShoeImg7} text={'Nishat Karena'} />
                <HomeShoeCard shoe={ShoeImg8} text={'Rahul Singh Chouhan'} />
                <HomeShoeCard shoe={ShoeImg9} text={'Rehan Khan'} />
            </div>
        </div>
    )
}
