import { Card, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TimerActionButton from "./TimerActionButton";
import { renderElapsedString } from "./Helpers";

export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  id,
  onTrashClick,
  onStartClick,
  onStopClick,
  onEditClick,
}) {
  const timer = renderElapsedString(elapsed, runningSince);

  function handleDelete() {
    onTrashClick(id);
  }

  function handleStartClick() {
    onStartClick(id);
  }
  function handleStopClick() {
    onStopClick(id);
  }
  function handleEditClick() {
    onEditClick(id);
  }

  return (
    <Container maxWidth="sm" style={{ marginBottom: "50px" }}>
      <Card
        sx={{
          maxWidth: 345,
          marginBottom: 15,
          margin: "auto",
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
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: "20",
          }}
        >
          <DeleteIcon onClick={handleDelete} />
          <EditIcon onClick={handleEditClick} />
        </Box>
        <TimerActionButton
          isTimerRunning={runningSince}
          onStartClick={handleStartClick}
          onStopClick={handleStopClick}
        />
      </Card>
    </Container>
  );
}
