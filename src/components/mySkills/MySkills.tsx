import { Box, LinearProgress, Typography } from "@mui/material";

export const MySkills = () => {
  return (
    //professional design skills

    <Box>
      <Typography variant="h4" gutterBottom>
        My Skills
      </Typography>
      <Box>
        <Typography variant="body1">HTML5</Typography>
        <LinearProgress variant="determinate" value={90} />
      </Box>
      <Box>
        <Typography variant="body1">CSS3</Typography>
        <LinearProgress variant="determinate" value={90} />
      </Box>
      <Box>
        <Typography variant="body1">Sass, Material Ui, Bootstrap</Typography>
        <LinearProgress variant="determinate" value={60} />
      </Box>
      <Box>
        <Typography variant="body1">Github, Git</Typography>
        <LinearProgress variant="determinate" value={90} />
      </Box>
      <Box>
        <Typography variant="body1">Responsive Web Design</Typography>
        <LinearProgress variant="determinate" value={90} />
      </Box>
      <Box>
        <Typography variant="body1">Next Js</Typography>
        <LinearProgress variant="determinate" value={60} />
      </Box>
      <Box>
        <Typography variant="body1">
          Windows / MS Office, Adobe Photoshop
        </Typography>
        <LinearProgress variant="determinate" value={70} />
      </Box>
      <Box>
        <Typography variant="body1">React Js</Typography>
        <LinearProgress variant="determinate" value={80} />
      </Box>
      <Box>
        <Typography variant="body1">JavaScript</Typography>
        <LinearProgress variant="determinate" value={60} />
      </Box>
    </Box>
  );
};
