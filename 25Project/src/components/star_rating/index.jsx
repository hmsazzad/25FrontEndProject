import { useState } from 'react'
import {FaStar} from 'react-icons/fa'


export default function StarRating( {noOfStars=5}){

    const [rating, setRating] = useState(-1);
    const [mark, setMark]= useState(-1);

    function handleClick(currentIndex)
    {
        setRating(currentIndex);
    }
    function handleMouseEnter(currentIndex)
    {
        setMark(currentIndex);
    }
    function handleMouseLeave(currentIndex)
    {
        setMark(rating);
    }



    return <div className='flex w-[600px] justify-center items-center mt-[200px]'>
        {
            [...Array(noOfStars)].map((_,index)=> {
                return <FaStar
                key={index}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40}

                className={index<=(mark||rating)?'text-pink-500':'text-pink-300'}
                />
            })
        }
    </div>
}