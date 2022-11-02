import React from 'react'
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function ChallengeCard({cardData}) {
  return (
    <Card sx={{ maxWidth: 345 }} key={cardData.title}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cardData.image}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button variant="contained" size="small">
          {cardData.status}
        </Button>
        <Typography variant="body2" color="#000" sx={{ textAlign: "center" }}>
          {cardData.title}
        </Typography>
        <Typography>{cardData.eventShedule}</Typography>
        <Button variant="contained" size="small" color="success">
          <Link
            to={`/challenge/${cardData.title}`}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <TaskAltIcon style={{marginBottom:'-7px',marginRight:'2px'}} />
            Participate Now{" "}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ChallengeCard