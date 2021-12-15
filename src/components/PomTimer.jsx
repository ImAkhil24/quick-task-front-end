import {
  Card,
  Paper,
  Box,
  Typography,
  Button,
  CardHeader,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { useState } from "react";
import soundFile from "../sound.wav";
import { useRef } from "react";
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';

// helper functions
const getSeconds = (time) => {
  let newTime = time % 60;
  newTime = newTime.toString().padStart(2, "0");
  return newTime;
};

const PomTimer = () => {
  const soundElement = useRef(null);

  // states

  const initialSessionDetail = {
    sessionTime: 300,
    breakTime: 300,
    currentSessionTime: 300,
    currentBreakTime: 300,
    active: "false", // false break session
    timer: null,
  };

  const [sessionDetail, setsessionDetail] = useState(initialSessionDetail);

  // handlers
  const sessionIncrementHandler = (e) => {
    setsessionDetail((prevState) => {
      let { sessionTime } = prevState;
      sessionTime = sessionTime + 300;
      return { ...prevState, sessionTime, currentSessionTime: sessionTime };
    });
  };

  const sessionDecrementHandler = (e) => {
    if (sessionDetail.sessionTime > 300) {
      setsessionDetail((prevState) => {
        let { sessionTime } = prevState;
        sessionTime = sessionTime - 300;

        return { ...prevState, sessionTime, currentSessionTime: sessionTime };
      });
    }
  };

  const breakIncrementHandler = () => {
    setsessionDetail((prevState) => {
      let { breakTime } = prevState;
      breakTime = breakTime + 300;
      return { ...prevState, breakTime, currentBreakTime: breakTime };
    });
  };

  const breakDecrementHandler = () => {
    if (sessionDetail.breakTime > 300) {
      setsessionDetail((prevState) => {
        let { breakTime } = prevState;
        breakTime = breakTime - 300;
        return { ...prevState, breakTime, currentBreakTime: breakTime };
      });
    }
  };

  const sessionStatusHandler = (e) => {
    const { active } = sessionDetail;

    if (active === "false") {
      const timer = setInterval(() => {
        setsessionDetail((prevState) => {
          // if the timers runs out then reset the timer.
          if (prevState.active === "break") {
            let { currentBreakTime } = prevState;
            if (currentBreakTime === 0) {
              soundElement.current.play();
              return {
                ...prevState,
                currentBreakTime: prevState.breakTime,
                active: "session",
              };
            } else {
              currentBreakTime = currentBreakTime - 1;
              return { ...prevState, currentBreakTime, active: "break" };
            }
          } else {
            let { currentSessionTime } = prevState;
            if (currentSessionTime === 0) {
              soundElement.current.play();
              return {
                ...prevState,
                currentSessionTime: prevState.sessionTime,
                active: "break",
              };
            } else {
              currentSessionTime = currentSessionTime - 1;
              return { ...prevState, currentSessionTime, active: "session" };
            }
          }
        });
      }, 1000);
      // toggle the state and set the interval id
      setsessionDetail((prevState) => {
        return { ...prevState, timer };
      });
    } else {
      setsessionDetail((prevState) => {
        clearInterval(prevState.timer);
        return initialSessionDetail;
      });
    }
  };

  //JSX

  let title;

  if (sessionDetail.active === "false") {
    title = "Start A Session";
  } else if (sessionDetail.active === "session") {
    title = "Session is Running";
  } else {
    title = "Break Time!";
  }

  return (
    <Card
      sx={{
        height: "50%",
        width: "100%",
        boxShadow: "3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <audio ref={soundElement}>
        <source src={soundFile} type="audio/wav" />
      </audio>

      <CardHeader
        title={
          <Typography variant="h4" align="center">
            {" "}
            {title}{" "}
          </Typography>
        }
      />
      <Paper
        sx={{
          height: "10rem",
          width: "10rem",
          borderRadius: "50%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ margin: "auto" }}>
          {Math.trunc(sessionDetail.currentSessionTime / 60) +
            ":" +
            getSeconds(sessionDetail.currentSessionTime)}
        </Typography>
        <Box>
          <Button sx={{ width: "50%" }} onClick={sessionStatusHandler}>
            {sessionDetail.active === "false" ? (
              <PlayArrowIcon fontSize="large" />
            ) : (
              <StopIcon fontSize="large" />
            )}
          </Button>
          {/* <Button>
          <VolumeUpIcon />
        </Button> */}
        </Box>

        <Typography variant="captian" sx={{ margin: "auto" }}>
          {Math.trunc(sessionDetail.currentBreakTime / 60) +
            ":" +
            getSeconds(sessionDetail.currentBreakTime)}
        </Typography>
      </Paper>

      <Box display="flex">
        <Box display="flex">
          <Button
            className="decrement"
            disabled={sessionDetail.active !== "false"}
            onClick={sessionDecrementHandler}
          >
            -
          </Button>
          <Typography>session time</Typography>
          <Button
            className="increment"
            disabled={sessionDetail.active !== "false"}
            onClick={sessionIncrementHandler}
          >
            +
          </Button>
        </Box>
        <Box display="flex">
          <Button
            className="decrement"
            disabled={sessionDetail.active !== "false"}
            onClick={breakDecrementHandler}
          >
            -
          </Button>
          <Typography>break time</Typography>
          <Button
            className="increment"
            disabled={sessionDetail.active !== "false"}
            onClick={breakIncrementHandler}
          >
            +
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default PomTimer;
