import React from 'react'
import { Link } from 'react-router-dom'
import {Stack,Typography,Button} from '@mui/material'

function Error() {
  return (
    <Stack component='section' alignItems='center' gap={5}>
      <Typography component='h2' variant='h5'>oops! you came to wrong page click below 👇 </Typography>
      <Button variant='contained' color='primary'>
        <Link to="/" style={{color:'#fff',textDecoration:'none'}}>
          back home
        </Link>
      </Button>
    </Stack>
  );
}

export default Error