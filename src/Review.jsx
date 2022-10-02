import React, { useState } from 'react'
import { reviews as people } from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
        console.log(number);
        return (number < 0 || number >= people.length) ? false : true
    }

    const prevPerson = () => {
        checkNumber(index - 1) ? setIndex(index - 1) : setIndex(index);
    }

    const nextPerson = () => {
        checkNumber(index + 1) ? setIndex(index + 1) : setIndex(index);
    }

    const randomPerson = () => {
        let randomPerson = Math.floor(Math.random() * people.length);
        setIndex(randomPerson);
    }

    return (
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight></FaQuoteRight>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft></FaChevronLeft>
                </button>
                <button className="prev-btn" onClick={nextPerson}>
                    <FaChevronRight></FaChevronRight>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
        </article>
    )
}
