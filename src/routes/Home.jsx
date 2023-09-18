import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import { hero1 } from '../assets'
import {Navbar} from '../components'

const Home = () => {
return (
    <div>
        <Navbar />
        <HomeHero info={{cName: "hero",image:hero1}} />
    </div>
)
}

export default Home
