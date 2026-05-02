import { Inter } from "next/font/google";
import Profile from "@/components/profile/Profile";
import { MySkills } from "@/components/mySkills/MySkills";
import { Footer } from "@/components/shared/footer/Footer";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Box>
        <Button
          onClick={() => setDarkMode(!darkMode)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1000,
            backgroundColor: darkMode ? "#555" : "#eee",
            color: darkMode ? "#fff" : "#000",
            "&:hover": { backgroundColor: darkMode ? "#666" : "#ddd" },
          }}
        >
          Toggle Dark Mode
        </Button>

        <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2, py: 4 }}>
          <Profile />
          <MySkills />
        </Box>
      </Box>
      <Footer />
      <style jsx global>{`
        body {
          background-color: ${darkMode ? "#333" : "#fff"};
          color: ${darkMode ? "#fff" : "#000"};
        }
      `}</style>

      <Box
        sx={{
          textAlign: "center",
          py: 4,
          backgroundColor: darkMode ? "#222" : "#f5f5f5",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; 2024 Chand Rahmani. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
