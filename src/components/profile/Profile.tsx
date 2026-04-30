import { Container, Typography, Button, Box, Grid, Card, CardContent } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      
      {/* HERO */}
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Hi, I'm Chand Rahmani 👋
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", mt: 2 }}>
          Frontend Developer (React • TypeScript • MUI)
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          View Projects
        </Button>
      </Box>

      {/* ABOUT */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Typography color="text.secondary">
          I build scalable and responsive web applications using React, TypeScript, and Material UI.
        </Typography>
      </Box>

      {/* SKILLS */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <Grid container spacing={2}>
          {["React", "TypeScript", "MUI", "JavaScript", "Git"].map(skill => (
            <Box key={skill} sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="outlined">{skill}</Button>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* PROJECTS */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>Projects</Typography>

        <Container sx={{ mb: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">E-commerce App</Typography>
                <Typography variant="body2">
                  Filters, cart, wishlist, responsive UI.
                </Typography>
              </CardContent>
            </Card>
          </Container>

          <Container sx={{ mb: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">Dashboard UI</Typography>
                <Typography variant="body2">
                  Clean admin dashboard with reusable components.
                </Typography>
              </CardContent>
            </Card>
          </Container>

      </Box>

      {/* CONTACT */}
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4">Contact</Typography>
        <Typography>Email: your@email.com</Typography>
      </Box>

    </Container>
  );
}

export default App;