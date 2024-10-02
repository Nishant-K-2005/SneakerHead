import React from 'react'
import styled from "styled-components";

import Menu from '../images/toggleMenu.svg'
import Close from '../images/closeMenu.svg'

export default function ToggleMenu() {
    const openMenu = ()=>{
        document.getElementById('check').checked = 'true'
    }
    const closeMenu = ()=>{
        document.getElementById('check').checked = ''
    }
    return (
        <StyledWrapper className='lg:hidden'>
        {/* <div className=' h-20 items-center lg:hidden'> */}
            <input type="checkbox" id="check" />
            <img src={Menu} onClick={openMenu} alt="Open" id="openIcon" class="icon" />

            <ul class="navMenu">
                <img src={Close} onClick={closeMenu} alt="Close" id="closeIcon" class="icon" />
                <li class="menuItems" id="menuItem1">Home</li>
                <li class="menuItems" id="menuItem2">Categories</li>
                <li class="menuItems" id="menuItem3">Services</li>
                <li class="menuItems" id="menuItem4">More</li>
            </ul>
        {/* </div> */}
        </StyledWrapper>
    )
}
const StyledWrapper = styled.div`
*{
    padding: 0;
    margin: 0;
}


#openIcon{
    min-width: 30px;
    align-items: center;
    top: 1px;
    left: 1px;
}

#check{
    width: 30px;
    height: 30px;
    z-index: 100;
    position: absolute;
    -webkit-appearance: none;
}


.navMenu{
    height: 100%;
    width: 250px;
    background-color: black;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: 350ms ease;
    transform: translateX(-250px);
}


#closeIcon{
    align-items: center;
    width: 30px;
    filter: invert(100);

}

.navMenu h2{
    font-size: xx-large;
    font-weight: bolder;
    width: 100%;
    text-align: center;
    padding-bottom: 50px;
    color:red;
}
.menuItems{
    width: 100%;
    text-align: center;
    padding-top: 17px;
    padding-bottom: 17px;
    font-size: larger;
    transition:600ms ease;
}
.menuItems:hover{
    background-color: rgb(43, 33, 33);
    font-size: x-large;
}
#check:checked ~ .navMenu{
    transform: translateX(0);
}
`