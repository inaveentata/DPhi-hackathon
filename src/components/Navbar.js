import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/icons/Logo.png'
import {Box} from '@mui/material';


function Navbar(){
  return (
    <Box
      component="header"
      sx={{
        px: "6rem",
      }}
    >
      <Link to="/">
        <img alt="DPhi logo" src={Logo} />
      </Link>
    </Box>
  );
}

export default Navbar