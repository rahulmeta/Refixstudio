import React from 'react'
import Marquee from './Marquee'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const LandingPage = () => {

    useGSAP(() => {
        gsap.to(".overlayDark", 2, {
            top: "-100%",
            ease: "power3.inOut",
            delay: 4.3
        })
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
        gsap.from(".marquee", {
            bottom: "-50%",
            opacity: 0,
            ease: "power3.inOut",
            duration: 6
        })
    })
    return (
        <>
        <div className="landingPage">
        <div className="overlayLight"></div>
            <Marquee />
            <div className="overlayDark"></div>
            <div className="content">
                <div className="nav row">
                    <div className="col">Refix Studio</div>
                    <div className="col">(Conatct)</div>
                    <div className="col">(Services)</div>
                    <div className="col">(Selected Projects)</div>
                    <div className="col">(Members)</div>
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
                    <div className="col">A Collective of Creative Things</div>
                    <div className="col">+1000 1000 1000</div>
                    <div className="col">Art Direction</div>
                    <div className="col">NBC Sports</div>
                    <div className="col">Alejandro Tores Viera</div>
                </div>
                <div className="divider"></div>
                <div className="row ">
                    <div className="col">Smarter,newer and more memorable.</div>
                    <div className="col"></div>
                    <div className="col">Brand Positioning</div>
                    <div className="col">Dona Chai</div>
                    <div className="col">Annie Panouspolouse</div>
                </div>
                <div className="divider"></div>
                <div className="row ">
                    <div className="col"></div>
                    <div className="col">USA</div>
                    <div className="col">Brand & Identity Design</div>
                    <div className="col">Equinox</div>
                    <div className="col">Konstantinos Ridinos</div>
                </div>
                <div className="divider"></div>
                <div className="row ">
                    <div className="col">We believe that function is the substance of</div>
                    <div className="col">214 Sullivan St #3B</div>
                    <div className="col">Creative Direction</div>
                    <div className="col">Giant</div>
                    <div className="col">Ryan Levitan</div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">aesthetic experience. This principle guides clearer</div>
                    <div className="col">New York, NY 10012</div>
                    <div className="col">Design Direction</div>
                    <div className="col">KPRS</div>
                    <div className="col">Tucker Shanley</div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">user intertaces. stronger branding devices and</div>
                    <div className="col"></div>
                    <div className="col">Packaging</div>
                    <div className="col">microDrive</div>
                    <div className="col">Zachary Ruden</div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">more cohesive design systems. Whether</div>
                    <div className="col">For Job.Press and</div>
                    <div className="col">Motion</div>
                    <div className="col">Union</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">designing multi-platform experiences or building</div>
                    <div className="col">General inquiries:</div>
                    <div className="col">Prototyping</div>
                    <div className="col">Univision</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">enterprise applications, we make things to solve</div>
                    <div className="col"></div>
                    <div className="col">Product Strategy</div>
                    <div className="col">ProVen</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">problems.</div>
                    <div className="col">hello@Refix.studio</div>
                    <div className="col">Testing & Research</div>
                    <div className="col">Social Studies</div>
                    <div className="col">Tucker Shanley</div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">UX/UI Design</div>
                    <div className="col">Study Hall</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">Instagram</div>
                    <div className="col">Web Develoomeni</div>
                    <div className="col">The Post</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">Linkedin</div>
                    <div className="col"></div>
                    <div className="col">Newtok</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">Tovala</div>
                    <div className="col"></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">LunarCrush</div>
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
        </div>
        </>
    )
}

export default LandingPage
