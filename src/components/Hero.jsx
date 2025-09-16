import img1 from '../assets/head-shot.JPG';
import React, { useState, useEffect } from 'react';

function Hero() {

    const [typedName, setTypedName] = useState("");
    let n = "Joordan Nguyen"
    
    useEffect(() => {
        let i = 0;
        function type(){
            if(i < n.length){
                setTypedName(prev => prev + n.charAt(i));
                i++;
                setTimeout(type, 50);
            }
        }
        setTimeout(type, 1000);
    },[]);

    return(
        <section>
            <img id='head-shot' src={img1}/>
            <div id='hero-title-div'>
                <h1 id='hero-title-h1'>{ typedName }<span id='cursor'>_</span></h1>
                <hr style={{border: 'none', backgroundColor: 'black', width: '80%', height: '2px', margin: '0'}}></hr>
                <p id='hero-description-p'>Software Engineer | Mainframe Engineer</p>
                <div id='hero-button-div'>
                    <a href='../assets/resume.pdf' download className='button-a'>Download CV 📃</a>
                    <a className='button-a'>Contact Me 📞</a>
                </div>
            </div>
        </section>
    );
}


export default Hero