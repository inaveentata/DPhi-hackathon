import React from 'react'
import { Box } from '@mui/material'
import ChallengeCard from './ChallengeCard';
import DataScienceImg from '../assets/cardimage/Group 1000002771.png'
import ButterflyImg from '../assets/cardimage/Group 1000002766.png'
import WeatherImg  from '../assets/cardimage/Group 1000002466.png'
import PassengerImg from '../assets/cardimage/Group 1000002772.png'
import EngineeringImg from '../assets/cardimage/Group 1000002773.png'
import TravelInsurenceImg from '../assets/cardimage/Group 1000002466.png'


const challengesData = [
  {image: DataScienceImg ,
    status: 'upcoming',
    title: 'Data Science Bootcamp - Graded Datathon',
    eventShedule: '00:15:22',
  },
  {image: ButterflyImg ,
    status: 'upcoming',
    title: 'Data Sprint 72 - Butterfly Identification',
    eventShedule: '00:15:34',
  },
  {image: WeatherImg ,
    status: 'upcoming',
    title: 'Data Sprint 71 - Weather Recognition',
    eventShedule: '00:17:10',
  },
  {image: PassengerImg ,
    status: 'upcoming',
    title: 'Data Sprint 70 - Passenger satisfaction',
    eventShedule: '00:15:22',
  },
  {image: EngineeringImg ,
    status: 'Past',
    title: 'Engineering Graduates Employment Outcomes',
    eventShedule: '00:15:22',
  },
  {image: TravelInsurenceImg ,
    status: 'Past',
    title: 'Tralvel Insurence Claim Prediction',
    eventShedule: '16th May `22 09:00 PM',
  },
]

function ChallengesContainer() {
  return (
    <Box
      sx={{
        backgroundColor: "#003145",
        px: "6rem", py:'4rem',
        display: "grid",
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 4
      }}
      >
      {
        challengesData.map(item=><ChallengeCard cardData={item} />)
          }
    </Box>
  );
}

export default ChallengesContainer