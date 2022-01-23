import { Box, Container, Grid, Typography } from "@mui/material";
import TourCard from "../components/TourCard";
import cities from "../data.json";

const Home = () => {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map((city, i) => (
          <Box key={i}>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} tours
            </Typography>

            <Grid container spacing={2}>
              {city.tours.map((tour, j) => (
                <TourCard tour={tour} key={j} />
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default Home;
