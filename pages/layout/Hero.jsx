import React,{useCallback, useEffect} from "react";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Link from "next/link";
import Image from "next/image";

const Hero = () =>{
    const particlesInit = useCallback(async engine => { console.log(engine);
    await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return(
        <section id='home' className="relative">
            
             <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fullScreen: {
                    enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
                  },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: " #ffffff",
                    },
                    links: {
                        color: "#ff69b4",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <div className="mt-2  mx-auto pt-[8rem] text-white">
        <div className="flex gap-10 md:gap-0 flex-col md:flex-row w-full items-center justify-evenly">
                <div className="wow fadeInUp w-[90%] md:w-[50%]">
                    <p className="font-openSans mb-[1.2rem] text-[3.8rem] font-bold tex ">Stellar <span className=" text-[#ff69b4]">Redemption</span> Protocol</p>
                    <p className="text-[1.3rem] mb-[1.2rem] font-medium text-gray-400">Weekly polls are conducted, granting each member a single vote to determine the token that the SRP will acquire using the collected transaction taxes</p>
                    <div className="flex  text-[1.2rem] font-medium ">
                    <Link href="/">
                        <div className="p-2 bg-[#ff69b4] hover:text-[#ff69b4] hover:bg-black rounded-md mr-2 cursor-pointer  hover:text-white border border-2 hover:border-[#ff69b4]">
                            Buy $NBUL
                        </div>
                    </Link>
                    
                        <div className="p-2 border hover:border-[#ff69b4] hover:text-[#ff69b4] rounded-md mr-2 cursor-pointer">
                            Stake $NBUL
                        </div>
                    </div>
                </div>
                <div className=" wow slideInLeft ">
                    <Image src = "/nebulaEYE.png" alt="NebulaImg" height={5} width={350} />
                </div>
            </div>
            </div>
        </section>
    );
}

export default  Hero;