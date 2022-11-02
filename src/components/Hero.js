import React from 'react'
import {Link} from 'react-router-dom'
import PicsArt from '../assets/icons/PicsArt_04-14-04.42 1.svg'
import AILogo from '../assets/icons/Group 1000002515.svg'
import ManLogo from '../assets/icons/Group 1000002516.svg'
import ChallengesLogo from '../assets/icons/Group 1000002518.svg'
import {Box,Typography,Button,Divider} from '@mui/material'
import { Stack } from '@mui/system';

function Hero() {
    return (
      <>
        <Box
          component="section"
          sx={{
            backgroundColor: "#003145",
            px: "6rem",
            py: "4rem",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "60%",
              color: "#fff",
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: "48px",
                fontWeight: "600",
                lineHeight: "56px",
              }}
            >
              Accelerate Innovation with Global AI Chanllengs
            </Typography>
            <Typography
              component="p"
              variant="subtitle2"
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "28px",
                my: "1.5rem",
              }}
            >
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </Typography>
            <Button
              variant="contained"
              sx={{
                
                backgroundColor: "#fff",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#fff",
                  opacity: "0.9",
                  boxShadow: "none",
                },
              }}
            >
              <Link to="/create-challenge" style={{ color: "#003145", textDecoration: "none" }}>
                Create Challenge
              </Link>
            </Button>
          </Box>
          <Box>
            <img src={PicsArt} alt="ai rocket" />
          </Box>
        </Box>
        {/* Impact section */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem color="#fff" />}
          sx={{
            backgroundColor: "#002a3b",
            px: "6rem",
            py: "3.5rem",
            color: "#fff",
          }}
        >
          <Stack direction="row" alignItems="center">
            <img src={AILogo} alt="ai logo" width="55px" height="55px" />
            <Box ml={2} sx={{ fontFamily: "Inter" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  letterSpacing: "0.8px",
                }}
              >
                100K+
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                AI model submissions
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center">
            <img src={ManLogo} alt="ai logo" width="55px" height="55px" />
            <Box ml={2} sx={{ fontFamily: "Inter" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  letterSpacing: "0.8px",
                }}
              >
                50K+
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Data Scientists
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center">
            <img
              src={ChallengesLogo}
              alt="ai logo"
              width="55px"
              height="55px"
            />
            <Box ml={2} sx={{ fontFamily: "Inter" }}>
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  letterSpacing: "0.8px",
                }}
              >
                100+
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                AI Challenges hosted
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </>
    );
}

export default Hero