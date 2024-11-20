import React from 'react'
import "./NZERO.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const NZERO = () => {

    useGSAP(() => {
        gsap.from(".divider", 3, {
            scaleX: 0,
            ease: "power3.inOut",
            delay: 1,
            stagger: {
                amount: 1
            }
        })
        gsap.from(".row > .col", 2, {
            opacity: 0,
            y: 40,
            ease: "power3.inOut",
            delay: 2,
            stagger: {
                amount: 1.5
            }
        })

        gsap.to(".movingTextContainer", {
            x: "-1000%",
            duration: 2000
        })
        gsap.from(".movingTextContainer", {
            y: "200%",
            duration: 5
        })
    })
    return (
        <div className="">
            <div className="content bg-black text-white">
                <div className="nav row">
                    <div className="col">Refix Studio</div>
                    <div className="col">(INFO)</div>
                    <div className="col">(SERVICES)</div>
                    <div className="col">(CONTRIBUTORS)</div>
                </div>
                <div className="divider navDivider"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">NZero is a real-time data and decarbonization platform for</div>
                    <div className="col">NZero</div>
                    <div className="col">User Experience</div>
                    <div className="col">Marc Rabinowitz Experience Strategy</div>
                </div>
                <div className="divider"></div>
                <div className="row ">
                    <div className="col">sustainability leaders. We created a brand identity and premium</div>
                    <div className="col">2024</div>
                    <div className="col">Web Design</div>
                    <div className="col">Paloma Aelyon Brand Strategy</div>
                </div>
                <div className="divider"></div>
                <div className="row ">
                    <div className="col">digital experience that reflects the standard of their products. We've</div>
                    <div className="col"></div>
                    <div className="col">Design Direction</div>
                    <div className="col">Ingamana Web Development</div>
                </div>
                <div className="divider"></div>
                <div className="row ">
                    <div className="col">crafted a brand identity and polished digital experience that mirrors</div>
                    <div className="col">nzero.com</div>
                    <div className="col">Motion Design</div>
                    <div className="col">Jon Krause Illustrations</div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">the excellence they hold their products to. To set NZero apart in the</div>
                    <div className="col"></div>
                    <div className="col">Brand Identity</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">climate tech arena, we pushed the boundaries of cutting-edge</div>
                    <div className="col"></div>
                    <div className="col">Development</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">innovation and environmental studies, resulting in a modern, sleek,</div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">and airy feel that radiates their net-zero mission.</div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
            </div>
            <div className="movingText absolute top-[60%] w-full flex items-center overflow-hidden text-white">
                <div className="movingTextContainer flex items-center gap-3">
                    <h1 className='text-[17vw]'>NZERO</h1><div className="imgCont h-[26vh] w-[15vw]"><img className='h-[100%] w-[100%] object-cover' src="src/assets/Images/img11.webp" alt="" /></div>
                    <h1 className='text-[17vw]'>NZERO</h1><div className="imgCont h-[26vh] w-[15vw]"><img className='h-[100%] w-[100%] object-cover' src="src/assets/Images/img7.webp" alt="" /></div>
                    <h1 className='text-[17vw]'>NZERO</h1><div className="imgCont h-[26vh] w-[15vw]"><img className='h-[100%] w-[100%] object-cover' src="src/assets/Images/img5.webp" alt="" /></div>
                    <h1 className='text-[17vw]'>NZERO</h1><div className="imgCont h-[26vh] w-[15vw]"><img className='h-[100%] w-[100%] object-cover' src="src/assets/Images/img20.webp" alt="" /></div>
                    <h1 className='text-[17vw]'>NZERO</h1><div className="imgCont h-[26vh] w-[15vw]"><img className='h-[100%] w-[100%] object-cover' src="src/assets/Images/img21.webp" alt="" /></div>
                    <h1 className='text-[17vw]'>NZERO</h1><div className="imgCont h-[26vh] w-[15vw]"><img className='h-[100%] w-[100%] object-cover' src="src/assets/Images/img7.webp" alt="" /></div>
                    <h1 className='text-[17vw]'>NZERO</h1><div className="imgCont h-[26vh] w-[15vw]"><img className='h-[100%] w-[100%] object-cover' src="src/assets/Images/img7.webp" alt="" /></div>
                    <h1 className='text-[17vw]'>NZERO</h1>
                </div>
            </div>
            <div className='videoContainer h-[100vh] w-[100vw]'>
                <video loop muted autoPlay className='h-[100%] w-[100%] object-cover' src="src/assets/Videos/video1.mp4"></video>
            </div>
            <div className="container1 min-h-[120vh] w-[100vw] p-[2vw]">
                <div className="container1Top">
                    <div className="topRow border-solid border-y-[0.05vw] border-black flex items-center justify-between px-[1vw]">
                        <h3 className='uppercase text-[1vw]'>A brand identity that inspires trust</h3>
                        <h3 className='text-[0.9vw]'>We rebranded NZero from the ground up while fitting them with a new robust and powerful marketing engine. Through a</h3>
                    </div>
                    <div className="topRow border-solid border-b-[0.05vw] border-black flex items-center justify-between px-[1vw]">
                        <h3 className='uppercase text-[1vw]'></h3>
                        <h3 className='text-[0.9vw]'>contemporary visual identity, we showcase NZero's expertise and unwavering dedication to tackling pressing issues. We</h3>
                    </div>
                    <div className="topRow border-solid border-b-[0.05vw] border-black flex items-center justify-between px-[1vw]">
                        <h3 className='uppercase text-[1vw]'></h3>
                        <h3 className='text-[0.9vw]'>established a set of guidelines including color, typography, photography, iconography, illustration and layout usage</h3>
                    </div>
                    <div className="topRow border-solid border-b-[0.05vw] border-black flex items-center justify-between px-[1vw]">
                        <h3 className='uppercase text-[1vw]'></h3>
                        <h3 className='text-[0.9vw]'>at positioning NZero as the leader in their space.</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default NZERO
