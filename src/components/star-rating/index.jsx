import { useState } from "react"
import {FaStar} from "react-icons/fa"
import "./styles.css"

export default function StarRanting({noOfStars = 5}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex){
        console.log(currentIndex)
        setRating(currentIndex)
    }

    function handleMouseEnter(currentIndex){
        console.log(currentIndex)
        setHover(currentIndex)
    }

    function handleMouseLeave(){
        console.log(rating)
        setHover(rating)
    }

    return (
    <div className="star-rating">
        {[...Array(noOfStars)].map((_,index)=> {
            index += 1;

            return (
                <FaStar
                    key={index}
                    className={index <= (hover || rating) ? "active" : "inactive"}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}
                />
            );
        })}
    </div>
    )
}