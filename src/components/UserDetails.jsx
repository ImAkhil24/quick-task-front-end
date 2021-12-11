import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { call } from "../services/api";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    maxHeight: "40%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  statLabel: {
    fontSize: 12,
    color: "#9e9e9e",
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
}));

const UserDetails = ({ tasks }) => {

  // states
  const initialState = {
    name: null,
    email: null,
    age: null,
  };
  const [userInfo, setUserInfo] = useState(initialState);

  // sideEffect
  useEffect(() => {
    call("GET", "/users/me")
      .then((data) => {
        setUserInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // we have to update no of task here too so make the tasks state on the mutual parent component of task list and userDetails.

  const classes = useStyles();
  return (
    <Card className={classes.card} sx={{ boxShadow: 3 }}>
      <CssBaseline />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}>
          {userInfo.name !== null ? userInfo.name[0] : ""}
        </Avatar>
        <Typography className={classes.heading}>{userInfo.name}</Typography>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Typography width="50%" className={classes.statLabel}>
          Tasks Completed
        </Typography>

        <Typography width="50%" className={classes.statLabel}>
          Pending Tasks
        </Typography>
        <Typography width="50%" className={classes.statValue}>
          {tasks.countCompleted}
        </Typography>
        <Typography width="50%" className={classes.statValue}>
          {tasks.countPending}
        </Typography>
      </Box>
    </Card>
  );
};

export default UserDetails;
