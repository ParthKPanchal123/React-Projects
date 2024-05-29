import React, { useState } from 'react'
import images from './img/images.jpeg'
import './Hook.css';

export default function Content() {


    const [name, setName] = useState("Hello world !!")
    const [counter, setCounter] = useState(5)
   
    


    const changeState = () => {
        if (name === "Hello world !!") {
            setName("Jay Shree Ram")
        } else {
            setName("Hello world !!")
        };


    };
    return (
        <>
            <div id="inst">
                <img src={images} alt="" />

                <button onClick={() => setCounter(counter + 5)}><i class="bi bi-heart-fill"></i></button>
                <h2>{counter}</h2>

                <button id="mesg" onClick={() => setCounter(counter - 5)}><i class="bi bi-heartbreak-fill"></i></button>
                <h2 id="count1">{counter}</h2>

               

                <button id="save"><i class="bi bi-bookmark"></i></button>
            </div>

        </>
    )
}
