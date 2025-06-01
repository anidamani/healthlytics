import React from 'react'
import ToggleComponent from '../components/ToggleComponent'
import AboutHero from '../components/AboutUs/AboutHero'
import OurMission from '../components/AboutUs/OurMission'
import OurLeaderShip from '../components/AboutUs/OurLeaderShip'
import Posts from '../components/Home/Posts'
import OurPaterns from '../components/AboutUs/OurPaterns'

const Page = () => {
    return (
        <div>
           
           <AboutHero/>
           <OurMission/>
          <OurLeaderShip/>
          <OurPaterns/>
         
        </div>
    )
}

export default Page