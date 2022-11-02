import React from 'react'
import { Box, Typography} from '@mui/material'
import CarbonNotebook from '../assets/icons/carbon_notebook-reference.svg'
import People from '../assets/icons/Vector.svg'
import Robot from '../assets/icons/Robot.svg'
import IdentificationCard from '../assets/icons/IdentificationCard.svg'

function ParticipateChallenges() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#fff",
        px: "6rem",
      }}
    >
      <Typography
        component="h3"
        variant="h4"
        sx={{
          my: "1rem",
          textAlign: "center",
        }}
      >
        Why Participate in AI Challenges?
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gridTemplateRows: "repeat(2,1fr)",
          gap: 3,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F8F9FD",
            p: "1.5rem",
            borderRadius: "13px",
          }}
        >
          <img src={CarbonNotebook} alt="note book " />
          <Typography>Prove your skills</Typography>
          <Typography>
            Gain substantial experience by solving real-world problems and pit
            against others to come up with innovative solutions.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F8F9FD",
            p: "1.5rem",
            borderRadius: "13px",
          }}
        >
          <img src={People} alt="group of people logo;" />
          <Typography>Learn from community</Typography>
          <Typography>
            One can look and analyze the solutions submitted by the other Data
            Scientists in the community and learn from them.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F8F9FD",
            p: "1.5rem",
            borderRadius: "13px",
          }}
        >
          <img src={Robot} alt="robot" />
          <Typography>Challenge yourself</Typography>
          <Typography>
            There is nothing for you to lose by participating in a challenge.
            You can fail safe, learn out of the entire experience and bounce
            back harder.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F8F9FD",
            p: "1.5rem",
            borderRadius: "13px",
          }}
        >
          <img src={IdentificationCard} alt="recognition card" />
          <Typography>Earn recognition</Typography>
          <Typography>
            You will stand out from the crowd if you do well in AI challenges,
            it not only helps you shine in the community but also earns rewards.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ParticipateChallenges