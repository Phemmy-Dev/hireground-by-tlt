import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import AcademyHero from '../components/sections/AcademyHero'
import AcademyFeatures from '../components/sections/AcademyFeatures'
import WhoThisIsFor from '../components/sections/WhoThisIsFor'
import ProgramStructure from '../components/sections/ProgramStructure'
import HowToApply from '../components/sections/HowToApply'
import FaqSection from '../components/sections/FaqSection'
import Footer from '../components/Footer'

const Academy = () => {
    return (
        <>
            <Helmet>
                <title>HireGround Academy | Free 6-Week Career Readiness Program</title>
                <meta name="description" content="Join HireGround Academy's free 6-week employability program. Get CV support, interview training, soft skills development, and access to our talent pool. Applications now open for Cohort 1." />
                <meta name="keywords" content="HireGround Academy, career training, employability program, job seekers, CV writing, interview preparation, soft skills, career development, Nigeria" />
            </Helmet>
            <Navbar />
            <AcademyHero />
            <AcademyFeatures />
            <WhoThisIsFor />
            <ProgramStructure />
            <HowToApply />
            <FaqSection />
            <Footer />
        </>
    )
}

export default Academy
