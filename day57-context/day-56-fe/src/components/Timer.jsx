import Container from "@mui/material/Container";
import { Box, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TimerActionButton from "./TimerActionButton";
import { renderElapsedString } from "./Helpers.js";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

export default function Timer({
  title,
  project,
  onStartClick,
  onTrashClick,
  onEditClick,
  onStopClick,
  id,
  elapsed,
  runningSince,
}) {
  const elapsedString = renderElapsedString(elapsed, runningSince);

  const [timers, setTimers] = useContext(TimerContext);

  function handleDelete() {
    onTrashClick(id);
  }

  function handleEdit() {
    onEditClick(id);
  }

  function handleStartClick() {
    onStartClick(id);
  }

  function handleStopClick() {
    console.log("handling stop click");
    onStopClick(id);
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345, margin: "0 auto", marginBottom: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
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
            <h2>{elapsedString}</h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <DeleteIcon onClick={handleDelete} />
            <ModeEditIcon onClick={handleEdit} />
          </Box>
          <TimerActionButton
            timerIsRunning={runningSince}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
          />
        </CardContent>
      </Card>
    </Container>
  );
}
