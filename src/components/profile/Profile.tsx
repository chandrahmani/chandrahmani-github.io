import { useMemo, useState } from "react";
import img from "../../../public/IMG_(2).jpg";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  createTheme,
  CssBaseline,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Profile = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1976d2" : "#90caf9",
          },
          background: {
            default: mode === "light" ? "#fafafa" : "#121212",
          },
        },
        shape: { borderRadius: 12 },
      }),
    [mode]
  );

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const skills = [
    { title: "React", desc: "Building modern web UIs" },
    { title: "TypeScript", desc: "Strongly typed JS" },
    { title: "MUI", desc: "Elegant component library" },
    { title: "Next.js", desc: "Fullstack React framework" },
    { title: "JavaScript", desc: "Backend with JavaScript" },
    { title: "GitHub", desc: "Version control & CI/CD" },
    { title: "GitHub", desc: "Version control & CI/CD" },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal website built with React + MUI.",
      link: "https://github.com/chandrahmani/portfolio",
    },
    {
      title: "Clothing Store",
      desc: "E-commerce store with cart, filters & wishlist.",
      link: "https://github.com/chandrahmani/clothing-store",
    },
    {
      title: "Tour & Travel",
      desc: "Travel booking site using Next.js & MUI.",
      link: "https://www.hellotravelindia.in/",
    },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh" }}>
          {/* Hero Section */}
          <Box
            sx={{display:'flex' , flexDirection:{xs: 'column' , md:'row'} , alignItems:'center' , p:3}}
          >
            <Box textAlign="center">
              <Image src={img} width={200} height={300} alt='Me'/>
              <Typography variant="h5" fontWeight="bold" mt={2}>
                Chandrahmani
              </Typography>
              <Typography variant="subtitle1">💻 Software Engineer</Typography>
              <Typography variant="body2">📍 Delhi, IND 🇮🇳</Typography>
              <Typography variant="body2">
                🌐 Languages: English, Hindi
              </Typography>
            </Box>
            <Box maxWidth={500}>
              <Typography variant="h6">Hi 👋 Good evening ☁️</Typography>
              <Typography variant="body1" mt={1}>
                My name is Chandrahmani, I am a senior front-end developer. I
                enjoy solving problems and building efficient, creative
                solutions.
              </Typography>
              <Typography variant="body2" mt={1}>
                "I love coding, photography, and traveling."
              </Typography>
              <Box mt={2}>
                <Button variant="contained" sx={{ mr: 2 }}>
                  Say Hi
                </Button>
                <Button variant="outlined">Book my calendar</Button>
              </Box>
            </Box>
          </Box>

          <Divider />

          <Box textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h6" color="text.secondary">
              Developer • Designer • Problem Solver
            </Typography>
          </Box>

          {/* Skills Section */}
          <Box sx={{ maxWidth: "1000px", width: "100%", mb: 8 }}>
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              gutterBottom
            >
              Skills
            </Typography>
            <Grid container spacing={3}>
              {skills.map((skill, i) => (
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {skill.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.desc}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Box>

          {/* Projects Section */}
          <Box sx={{ maxWidth: "1000px", width: "100%", mb: 8 }}>
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              gutterBottom
            >
              Projects
            </Typography>
            <Grid container spacing={3}>
              {projects.map((proj, i) => (
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {proj.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {proj.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component={Link}
                      href={proj.link}
                      target="_blank"
                      rel="noopener"
                    >
                      View on GitHub
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Box>

          {/* Contact Section */}
          <Box
            sx={{
              textAlign: "center",
              py: 4,
              borderTop: "1px solid",
              borderColor: "divider",
              mt: "auto",
              width: "100%",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              📧 Contact
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Have a project in mind? Let’s connect!
            </Typography>
            <Typography variant="body1">
              Email
              <Link href="mailto:chandrahmani@example.com">
                chandrahmani@example.com
              </Link>
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Profile;
