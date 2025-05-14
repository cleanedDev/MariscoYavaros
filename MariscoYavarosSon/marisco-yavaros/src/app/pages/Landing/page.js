import React from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import MenuLanding from "@/components/MenuLanding/MenuLanding";
import Reservaciones from "@/components/Reservaciones/Reservacione";


function Landing(){
    return(
        <>
        <Hero/>
        <About/>
        <MenuLanding/>
        <Reservaciones/>
        </>
    )
}


export default Landing;