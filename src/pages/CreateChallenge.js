import React, { useState } from "react";
import UploadIcon from "../assets/icons/bxs_cloud-upload.svg";

import {
  Box,
  Typography,
  Button,
  TextField,
  TextareaAutosize,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
// import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function CreateChallenge() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState("");
  const [level, setLevel] = React.useState("easy");

  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  console.log(startDate.$d, endDate);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f8f9fd",
          fontFamily: "Inter",
          py: "1rem",
          pl: "2rem",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: "24px",
            color: "#000000",
          }}
        >
          Challenge Details
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          fontFamily: "Inter",
          py: "1.5rem",
          px: "2rem",
        }}
      >
        <Typography sx={{ display: "block" }} component="label">
          Challenge Name
        </Typography>
        <TextField type="text" size="small" sx={{ width: "40%", my: "1rem" }} />
        <Typography component="label" sx={{ display: "block" }}>
          Start Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => (
              <TextField
                size="small"
                {...props}
                sx={{ my: "1rem", width: "40%" }}
                inputProps={{
                  ...props.inputProps,
                  placeholder: "Add start date",
                }}
              />
            )}
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
          />
        </LocalizationProvider>

        <Typography component="label" sx={{ display: "block" }}>
          End Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => (
              <TextField
                size="small"
                {...props}
                sx={{ my: "1rem", width: "40%" }}
                inputProps={{
                  ...props.inputProps,
                  placeholder: "Add end date",
                }}
              />
            )}
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
          />
        </LocalizationProvider>

        <Typography component="label" sx={{ display: "block" }}>
          Description
        </Typography>
        <TextareaAutosize
          style={{
            padding: "0.5rem",
            width: "60%",
            borderRadius: "0.35rem",
            borderColor: "#ccc",
            outlineColor: "blue",
            fontFamily: "sans-serif",
            fontSize: "1rem",
            letterSpacing: "1.2px",
            margin: "1rem 0",
          }}
          minRows={8}
          maxRows={8}
          aria-label="description"
        />
        <Typography component="label" sx={{ display: "block" }}>
          Image
        </Typography>

        <label htmlFor="upload-image">
          <input
            style={{ display: "none" }}
            id="upload-image"
            name="upload-image"
            type="file"
          />
          <Button
            variant="contained"
            component="span"
            sx={{
              backgroundColor: "#f4f4f4",
              display: "flex",
              textTransform: "capitalize",
              color: "#000",
              border: "1px solid #D9D9D9",
              boxShadow: "none",
              borderRadius: "5px",
              width: "240px",
              my: "1rem",
              "&:hover": {
                backgroundColor: "#fff",
                opacity: "0.9",
                boxShadow: "none",
              },
            }}
          >
            Upload
            <img
              src={UploadIcon}
              alt="upload icon"
              style={{ marginLeft: "3px" }}
            />
          </Button>
        </label>

        <Typography component="label" sx={{ display: "block" }}>
          Level Type
        </Typography>
        <FormControl sx={{ my: "1rem", minWidth: 250 }} size="small">
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={level}
            onChange={handleChange}
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>
        <Button
          color="success"
          variant="contained"
          sx={{ textTransform: "capitalize", display: "block", my: "1.5rem" }}
        >
          Create Challenge
        </Button>
      </Box>
    </>
  );
}

export default CreateChallenge;
