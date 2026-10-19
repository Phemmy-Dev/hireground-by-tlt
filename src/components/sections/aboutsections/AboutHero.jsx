import React from 'react'
import PageHero from '../../PageHero'
import herobg from '../../../assets/images/herobg.jpg' // Easy to change this import

const AboutHero = () => {
  return (
    <PageHero
      kicker="About HireGround"
      title="Empowering Careers, Transforming Lives"
      intro="HireGround is more than an event. It's a movement dedicated to bridging the gap between talent and opportunity, creating pathways for career success across Nigeria and beyond."
      image={herobg}
      imageAlt="The HireGround organising team in Ilorin"
    />
  )
}

export default AboutHero
