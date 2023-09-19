import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import "../../all.css"
import { useNavigate } from 'react-router-dom';

export default function Footer() {

const   navigate  = useNavigate()



    return (
        <div className='footer'>
            <button   onClick={()=>  navigate('/home')}  >
                <CiHome color='#AABB5D' size="35px" />
                home
            </button>
            <button  onClick={()=>  navigate('/like')} >
                <CiHeart color='#333333' size="35px" />
                Likes
            </button>
            <button  onClick={()=> navigate('/bag')}>
                <CiHome color='#AABB5D' size="35px" />
                home
            </button>
            <button  onClick={()=> navigate('/user')}>
                <CiHeart color='#333333' size="35px" />
                Likes
            </button>
            <button  onClick={()=>  navigate('/setting')}>
                <CiHeart color='#333333' size="35px" />
                Likes
            </button>


        </div>
    )
}
