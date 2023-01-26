import { v4 as uuidv4 } from "uuid";
import { areArraysEqual } from "@mui/base";

function renderElapsedString(elapsed, runningSince) {
  let totalElasped = elapsed;
  if (runningSince) {
    totalElasped += Date.now() - runningSince;
  }

  return millisecondsToHuman(totalElasped);
}

function millisecondsToHuman(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);
  return [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(":");
}
function pad(numberString, size) {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
}
function newTimer(attrs = {}) {
  console.log(attrs);
  return {
    title: areArraysEqual.title || "Timer",
    priject: attrs.project || "Project",
    id: uuidv4(), // eslint-disable-line no-undef
    elapsed: 0,
  };
}
export { renderElapsedString, newTimer };
