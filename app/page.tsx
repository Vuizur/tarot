"use client"

import { useState } from "react";
import { Button, Card, CardMedia, Container, Typography, Box } from "@mui/material";
import { Shuffle } from "@mui/icons-material";


// The number of tarot cards you have
const NUM_CARDS = 78;

// A function that returns a random integer between 1 and n (inclusive)
const randomInt = (n: number) => Math.floor(Math.random() * n) + 1;

// The main component of the app
const App = () => {
  // A state variable that stores the current card number
  const [card, setCard] = useState(randomInt(NUM_CARDS));

  // A function that shuffles the card
  const shuffleCard = () => {
    setCard(randomInt(NUM_CARDS));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={
        {
          height: "100vh",
          flexDirection: "column",
          display: "flex",
          p: 2,
        }
      }>
        <Typography variant="h4" align="center" gutterBottom>
          Draw a Tarot Card
        </Typography>
        <Card>
          <CardMedia
            component="img"
            image={`cards/card-${card}.jpg`}
            alt={`Tarot card ${card}`}
            sx={{ height: "100%",
            objectFit: "contain" }}
          />
        </Card>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Shuffle />}
          onClick={shuffleCard}
          fullWidth
        >
          Shuffle
        </Button>
      </Box>
    </Container >
  );
};

export default App;