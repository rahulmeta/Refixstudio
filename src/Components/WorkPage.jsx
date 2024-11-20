import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger)

const WorkPage = () => {

    const { contextSafe } = useGSAP()
    useEffect(() => {
        const marqueeAnim = contextSafe(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    // markers: true,
                    trigger: ".workpage",
                    start: "-10% 50%",
                    end: "70% 80%",
                    scrub: 5
                }
            })

            tl
                .to(".projectContainer1", {
                    width: "100%",
                    height: "90vh",
                })
                .to(".projectContainer1", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim1")

                .to(".projectContainer2", {
                    width: "100%",
                    height: "90vh",
                }, "anim1")
                .to(".projectContainer2", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim2")

                .to(".projectContainer3", {
                    width: "100%",
                    height: "90vh",
                }, "anim2")
                .to(".projectContainer3", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim3")

                .to(".projectContainer4", {
                    width: "100%",
                    height: "90vh",
                }, "anim3")
                .to(".projectContainer4", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim4")

                .to(".projectContainer5", {
                    width: "100%",
                    height: "90vh",
                }, "anim4")
                .to(".projectContainer5", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim5")

                .to(".projectContainer6", {
                    width: "100%",
                    height: "90vh",
                }, "anim5")
                .to(".projectContainer6", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim6")

                .to(".projectContainer7", {
                    width: "100%",
                    height: "90vh",
                }, "anim6")
                .to(".projectContainer7", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim7")

                .to(".projectContainer8", {
                    width: "100%",
                    height: "90vh",
                }, "anim7")
                .to(".projectContainer8", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim8")

                .to(".projectContainer9", {
                    width: "100%",
                    height: "90vh",
                }, "anim8")
                .to(".projectContainer9", {
                    width: "0%",
                    height: "0vh",
                    transform: "translateX(100%)"
                }, "anim9")
        })
        marqueeAnim()
        const footerAnim = contextSafe(() => {
            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".footer",
                    // markers: true,
                    start: "30% 53%",
                    end: "57% 70%",
                    scrub: 2
                }
            })
            tl2
                .from(".footerBottomRow>h3", {
                    opacity: 0,
                    y: "150%",
                    ease: "power3.inOut",
                    // stagger:0.1,
                },"anim")
                .from(".footerBottomRow", {
                    borderBottom:"0",
                    borderTop:"0",
                    stagger:-0.15,
                    ease: "power3.inOut",
                    // stagger:0.1,
                },"anim")
        })
        footerAnim()
    }, [])

    return (
        <div className='workpage'>
            <div className="workConatiner">
                <div className="top">
                    <h3>NZERO</h3>
                    <h3 className='ml-[8vw]'>(2024)</h3>
                    <h3>Identity & Web Design</h3>
                </div>
                <div className="projectContainer projectContainer1">
       <img src="src/assets/Images/img11.webp" alt="" />
                </div>
            </div>
            <div className="workConatiner">
                <div className="top">
                    <h3>STURDY</h3>
                    <h3 className='ml-[8.5vw]'>(2023)</h3>
                    <h3>Web & Design Direction</h3>
                </div>
                <div className="projectContainer projectContainer2">
                    <img src="src/assets/Images/img12.webp" alt="" />
                </div>
            </div>
            <div className="workConatiner">
                <div className="top">
                    <h3>NPC SPORTS</h3>
                    <h3 className='mr-[1.5vw]'>(2022)</h3>
                    <h3>Web Design</h3>
                </div>
                <div className="projectContainer projectContainer3">
                    <img src="src/assets/Images/img13.webp" alt="" />
                </div>
            </div>
            <div className="workConatiner">
                <div className="top">
                    <h3>ALZA</h3>
                    <h3 className='ml-[5vw]'>(2023)</h3>
                    <h3>Brand Identity</h3>
                </div>
                <div className="projectContainer projectContainer4">
                    <img src="src/assets/Images/img14.webp" alt="" />
                </div>
            </div>
            <div className="workConatiner">
                <div className="top">
                    <h3>EQUINOX</h3>
                    <h3 className='ml-[3.5vw]'>(2021)</h3>
                    <h3>Digital Product</h3>
                </div>
                <div className="projectContainer projectContainer5">
                    <img src="src/assets/Images/img15.webp" alt="" />
                </div>
            </div>
            <div className="workConatiner">
                <div className="top">
                    <h3>TOVALA</h3>
                    <h3 className='ml-[1.5vw]'>(2022)</h3>
                    <h3>Web Design</h3>
                </div>
                <div className="projectContainer projectContainer6">
                    <img src="src/assets/Images/img16.webp" alt="" />
                </div>
            </div>
            <div className="workConatiner">
                <div className="top">
                    <h3>ARCADIA</h3>
                    <h3 className='ml-[1vw]'>(2023)</h3>
                    <h3>Web Design</h3>
                </div>
                <div className="projectContainer projectContainer7">
                    <img src="src/assets/Images/img17.webp" alt="" />
                </div>
            </div>
            <div className="workConatiner">
                <div className="top">
                    <h3>SIRIUSXM</h3>
                    <h3 className='ml-[4vw]'>(2023)</h3>
                    <h3>Digital Campaign</h3>
                </div>
                <div className="projectContainer projectContainer8">
                    <img src="src/assets/Images/img18.webp" alt="" />
                </div>
            </div>
            <div className="workConatiner">
                <div className="top">
                    <h3>TELEVISA UNIVISION</h3>
                    <h3 className='mr-[6vw]'>(2022)</h3>
                    <h3>Web & App</h3>
                </div>
                <div className="projectContainer projectContainer9">
                    <img src="src/assets/Images/img19.webp" alt="" />
                </div>
            </div>
            <div className="footer">
                <div className="footerTop">
                    <h1>(REFIX STUDIO)</h1>
                </div>
                <div className="footerBottom">
                    <div className="footerBottomRow" style={{ borderTop: "0.05vw solid white" }}>
                        <h3>Please reach out for work inquiries.</h3>
                        <h3>+1 212 457 3035</h3>
                        <h3>REFIX STUDIO</h3>
                        <h3>Credits</h3>
                        <h3>©2024</h3>
                    </div>
                    <div className="footerBottomRow">
                        <h3></h3>
                        <h3 className='ml-[12vw]'>Instagram</h3>
                        <h3></h3>
                        <h3></h3>
                        <h3>All Rights Reserved.</h3>
                    </div>
                    <div className="footerBottomRow">
                        <h3>We are always on the look out for top talent. If you</h3>
                        <h3 className='pr-[19vw]'>Linkedin</h3>
                        <h3 className='pr-[vw]'>Based in</h3>
                        <h3>Designed by</h3>
                        <h3></h3>
                    </div>
                    <div className="footerBottomRow">
                        <h3></h3>
                        <h3></h3>
                        <h3>Brooklyn, NY</h3>
                        <h3>REFIX STUDIO</h3>
                        <h3></h3>
                    </div>
                    <div className="footerBottomRow">
                        <h3>think you’d be a good fit at Fix Studio, drop us a line</h3>
                        <h3></h3>
                        <h3>04:05 PM EST</h3>
                        <h3>Coded by</h3>
                        <h3></h3>
                    </div>
                    <div className="footerBottomRow">
                        <h3>hello@REFIX.studio</h3>
                        <h3></h3>
                        <h3></h3>
                        <h3>ME</h3>
                        <h3></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkPage
