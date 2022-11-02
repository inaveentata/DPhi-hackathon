import React from 'react'
import {Stack, Box, Typography, OutlinedInput, InputAdornment, FormControl,Button } from '@mui/material'

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SearchBar() {
  return (
    <Box
      sx={{
        backgroundColor: "#002a3b",
        px: "6rem",
        color: "#fff",
        pb: "8rem",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "28px",
          py: "4rem",
          textAlign: "center",
        }}
      >
        Explore Challenges
      </Typography>
      <Stack direction='row'>
        <FormControl fullWidth>
                  <OutlinedInput
                      placeholder='Search'
            size="small"
            sx={{ backgroundColor: "#fff" }}
            id="outlined-adornment-amount"
            value={""}
            onChange={""}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          sx={{
            color: "#000",
            backgroundColor: "#fff",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#fff",
              opacity: "0.9",
              boxShadow: "none",
                      },
            ml:'0.8rem'
          }}
          variant="outlined"
          endIcon={<KeyboardArrowDownIcon />}
        >
          Filter
        </Button>
      </Stack>
    </Box>
  );
}

export default SearchBar