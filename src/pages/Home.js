import React from 'react'
import ChallengesContainer from '../components/ChallengesContainer'
import Hero from '../components/Hero'
import ParticipateChallenges from '../components/ParticipateChallenges'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
      <>
          <Hero />
          <ParticipateChallenges />
          <SearchBar />
          <ChallengesContainer />
      </>
  )
}

export default Home