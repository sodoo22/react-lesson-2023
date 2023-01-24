import { Box, Card } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";

export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  runningTime,
}) {
  const [timerRunning, setTimerRunning] = useState(false);
  const [runningInterval, setRunningInterval] = useState(0);
  const timer = renderElapsedString(elapsed, runningSince);
  console.log(timer);

  //   setRunningInterval(() => {});

  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
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
        >
          <h1>{runningTime}</h1>
        </Box>
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
            marginBottom: 5,
          }}
        >
          <DeleteIcon />
          <EditIcon />
        </Box>
        <TimerActionButton
          isTimerRunning={timerRunning}
          onStartClick={() => {
            setTimerRunning(true);

            console.log("on start click");
          }}
          onStopClick={() => {
            setTimerRunning(false);
            console.log("on stop click");
          }}
        />
      </Card>
    </Container>
  );
}
