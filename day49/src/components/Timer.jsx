import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TimerActionButton from "./TimerActionButton";
import { renderElapsedString } from "./Helpers";

export default function Timer({ id, title, project, elapsed, runningSince }) {
  const timer = renderElapsedString(elapsed, runningSince);

  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          maxWidth: 345,
          marginBottom: 5,
        }}
      >
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <DeleteIcon />
          <ModeEditIcon />
        </Box>
        <TimerActionButton
          isTimerRunning={runningSince}
          onStartClick={() => {
            console.log("start");
          }}
          onStopClick={() => {
            console.log("stop");
          }}
        />
      </Card>
    </Container>
  );
}
