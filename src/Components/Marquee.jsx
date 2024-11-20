import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Marquee = () => {

    const { contextSafe } = useGSAP()
    useEffect(() => {
        const marqueeAnim = contextSafe(() => {
            gsap.to(".marquee", {
                scale: 2.1,
                scrollTrigger: {
                    // markers: true,
                    trigger: ".landingPage",
                    start:"10% 0%",
                    end:"100% -40%",
                    scrub:4
                }
            })
        })
        marqueeAnim()
    }, [])

    return (
        <div className='marquee'>
            <div>
                <em>Creative</em> Media Technology <img src="src/assets/Images/img1.webp" alt="" /> <em>Creative</em> Media Technology <img src="src/assets/Images/img2.webp" alt="" /> <em>Creative</em> Media Technology <img src="src/assets/Images/img3.webp" alt="" /> <em>Creative</em> Media Technology <img src="src/assets/Images/img4.webp" alt="" /> <em>Creative</em> Media Technology <img src="src/assets/Images/img5.webp" alt="" /> <em>Creative</em> Media Technology <img src="src/assets/Images/img6.webp" alt="" /> <em>Creative</em> Media Technology <img src="src/assets/Images/img7.webp" alt="" /> <em>Creative</em> Media Technology <img src="src/assets/Images/img8.webp" alt="" /> <em>Creative</em> Media Technology <img src="src/assets/Images/img9.webp" alt="" /> <em>Creative</em> Media Technology
            </div>
        </div>
    )
}

export default Marquee
