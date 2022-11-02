import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, Stack } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CarbonSkillLogo from "../assets/icons/carbon_skill-level-basic.svg";

function ChallegesDetail() {
  const {id} = useParams()
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundColor: "#003145",
          px: "6rem",
          py: "4rem",
        }}
      >
        <Typography
          sx={{
            backgroundColor: "#ffce5c",
            display: "inline-block",
            border: "1px solid ",
            borderRadius: "5px",
            verticalAlign: "center",
            p: "3px",
          }}
        >
          {" "}
          <AccessTimeIcon sx={{ mb: "-6px", mr: "2px" }} />
          Starts on 17th Jun'22 09:00 PM (India Standard Time)
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "40px",
            color: "#fff",
          }}
        >
          Data Sprint 72 - Butterfly Identification
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "18px",
            color: "#fff",
          }}
        >
          Identify the class to which each butterfly belongs to
        </Typography>
        <Typography
          sx={{
            backgroundColor: "#f8f9fd",
            display: "inline-block",
            border: "1px solid ",
            borderRadius: "5px",
            p: "3px 6px",
            color: "#003145",
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "14px",
            mt: "2rem",
          }}
        >
          <img
            src={CarbonSkillLogo}
            alt="skill logo"
            style={{ marginBottom: "-3px" }}
          />{" "}
          Easy
        </Typography>
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          px: "6rem",
          py: "0.6rem",
          border: "0.3px solid #DDE6ED",
          boxShadow: "0px 6px 12px #DDE6ED",
          backgroundColor: "#fff",
        }}
      >
        <Stack
          alignItems="center"
          sx={{
            mb: "-16px",
          }}
        >
          <Typography>Overview </Typography>
          <Box
            sx={{
              width: "125px",
              height: "4px",
              background: "#44924C",
              borderRadius: "20px",
              mt: "0.6rem",
            }}
          ></Box>
        </Stack>
        <Button
          variant="contained"
          color="success"
          sx={{
            ml: "auto",
            border: "1.2px solid #DC141",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{
            border: "1.2px solid #DC141",
            borderRadius: "10px",
            ml: "1rem",
            textTransform: "capitalize",
          }}
        >
          Delete
        </Button>
      </Stack>
      <Box sx={{ px: "6rem", py: "1rem",backgroundColor:'#fff' }}>
        <Box sx={{width:'75%',color: '#64607D'}}>
          <Typography variant="body1">
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
          </Typography>
          <Typography variant="body1" sx={{ my: "0.8rem" }}>
            {" "}
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </Typography>
          <Typography variant="body1">
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default ChallegesDetail;
