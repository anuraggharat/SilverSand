import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link } from "react-router-dom"
import RoomsContainer from '../components/RoomsContainer'
export default function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title='OUR ROOMS'>
                    <Link to="/" className="btn-primary">Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer></RoomsContainer>
        </div>
    )
}
