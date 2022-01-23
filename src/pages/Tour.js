import { Box, Container, Typography } from "@mui/material";
import React from "react";
import niagara from "../assets/images/niagara-falls.jpeg";
import ImageCollage from "../components/ImageCollage";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src={niagara} alt="" height={325} />

        <ImageCollage />
      </Box>
    </Container>
  );
};

export default Tour;
